const ScaleMotion = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.4,
    },
  },
}

const HeightMotion = {
  closed: {
    height: 0,
    overflow: 'hidden',
    paddingTop: 0,
    paddingBottom: 0,
    margin: 0,
    border: 0,
    transition: {
      type: 'tween',
      duration: 0.1,
    },
  },
  open: {
    height: 'auto',
    overflow: 'hidden',
    transition: {
      type: 'tween',
      duration: 0.1,
    },
  },
}

export { ScaleMotion, HeightMotion }
