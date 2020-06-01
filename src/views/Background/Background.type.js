// @flow
export type BackgroundType = {
  id: number | string,
  handleColorChange: (values: Object) => Function,
  handleGradientChange: (values: Object) => Function,
  handleImageChange: (values: Object) => Function,
  initialValues: {
    color: string,
    gradient: {
      angle: number,
      from: string,
      to: string
    },
    image: string
  }
};
