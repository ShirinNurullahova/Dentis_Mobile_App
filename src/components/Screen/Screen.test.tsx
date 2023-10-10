import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Screen from "./Screen";
import { Platform } from "react-native";

describe("Screen test", () => {
  test("should match with snapshot", () => {
    const comp = render(<Screen />);
    expect(comp).toMatchSnapshot();
  });
  test("Screen should call onPullToRefresh when refreshing", () => {
    const onPullToRefreshMock = jest.fn();
    const comp = render(<Screen onPullToRefresh={onPullToRefreshMock} />);
    const refreshControl = comp.getByTestId("refreshControl");
    fireEvent(refreshControl.props.refreshControl, "onRefresh");
    expect(refreshControl.props.refreshControl).toBeTruthy();
    expect(onPullToRefreshMock).toHaveBeenCalledTimes(1);
  });
  test("handleKeyboardAvoidingViewBehavior should return correct behavior for ios", () => {
    Platform.OS = "ios";
    const onPullToRefreshMock = jest.fn();
    const comp = render(<Screen onPullToRefresh={onPullToRefreshMock} />);
    const keyboardAvoidingView = comp.getByTestId("keyboardAvoidingView");
    fireEvent(keyboardAvoidingView, "behavior");
    expect(keyboardAvoidingView.props.id).toBe("padding");
  });
  test("handleKeyboardAvoidingViewBehavior should return correct behavior for android", () => {
    Platform.OS = "android";
    const onPullToRefreshMock = jest.fn();
    const comp = render(<Screen onPullToRefresh={onPullToRefreshMock} />);
    const keyboardAvoidingView = comp.getByTestId("keyboardAvoidingView");
    fireEvent(keyboardAvoidingView, "behavior");
    expect(keyboardAvoidingView.props.id).toBeUndefined();
  });
  //   test("should set refreshing to false", () => {
  //     const stopRefreshing = jest.fn();
  //     const onPullToRefreshMock = jest.fn(stopRefreshing);
  //     const comp = render(<Screen onPullToRefresh={onPullToRefreshMock} />);
  //     const refreshControl = comp.getByTestId("refreshControl");
  //     fireEvent(refreshControl.props.refreshControl, "onRefresh", stopRefreshing);
  //     expect(refreshControl.props.refreshing).toBeFalsy();
  //     fireEvent(comp.getByTestId("content"), "stopRefreshing");
  //     expect(stopRefreshing).toHaveBeenCalledTimes(1);
  //   });
});
