export default {
  red: {
    background: 'red',
  },
  row: {
    flexFlow: 'row',
  },
  col: {
    flexFlow: 'column',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  align: (alignItems, justifyContent) => ({
    alignItems,
    justifyContent,
  }),
  flex: flex => ({
    flex,
  }),
}
