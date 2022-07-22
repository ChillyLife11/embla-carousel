import React, { PropsWithChildren, useCallback, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import FocusTrap from 'focus-trap-react'
import { useEventListener, useNavigation } from 'hooks'
import { hiddenAtBreakpointStyles } from 'utils'
import { MEDIA, LAYERS } from 'consts'
import { Menu } from './Menu'
import { FRAME_SPACING } from 'components/SiteLayout'
import { HEADER_HEIGHT } from 'components/Header'

export const NAVIGATION_ID = 'main-navigation-menu'

const Nav = styled.nav<{ $isOpen: boolean }>`
  z-index: ${LAYERS.NAVIGATION};
  position: fixed;

  ${MEDIA.COMPACT} {
    ${({ $isOpen }) => css`
      transform: ${!$isOpen && 'translateX(-100%)'};
      visibility: ${!$isOpen && 'hidden'};
    `};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${MEDIA.DESKTOP} {
    top: calc(${FRAME_SPACING} + ${HEADER_HEIGHT});
    bottom: 0;
  }
`

const Overlay = styled.div`
  background-color: var(--background-site);
  opacity: 0.9;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${hiddenAtBreakpointStyles};
`

type PropType = PropsWithChildren<{
  collapsed: boolean
}>

export const Navigation = (props: PropType) => {
  const { collapsed } = props
  const { isOpen, closeNavigation } = useNavigation()
  const id = collapsed ? NAVIGATION_ID : undefined
  const role = collapsed ? 'dialog' : undefined
  const ariaModal = collapsed ? 'true' : undefined
  const closeKeys = useRef(['Escape', 'Esc'])

  const onKeyUp = useCallback(
    ({ key }: KeyboardEvent) => {
      if (closeKeys.current.includes(key)) closeNavigation()
    },
    [closeNavigation],
  )

  useEventListener({
    type: 'keyup',
    listener: onKeyUp,
  })

  useEffect(() => {
    if (!collapsed) closeNavigation()
    return () => closeNavigation()
  }, [collapsed, closeNavigation])

  return (
    <FocusTrap active={isOpen}>
      <Nav
        role={role}
        aria-modal={ariaModal}
        aria-labelledby={id}
        aria-label="Main Navigation Menu"
        $isOpen={isOpen}
        {...props}
      >
        <Overlay onPointerUp={closeNavigation} $hidden="DESKTOP" />
        <Menu />
      </Nav>
    </FocusTrap>
  )
}
