import styled, { css } from "styled-components/native";
import { spaceProps, coreProps } from "../customize";
import { ViewComponent } from "../types";

const vstackBase = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;`

export const VStack: ViewComponent = styled.View`
  ${vstackBase}
  ${coreProps}
  ${spaceProps}`
