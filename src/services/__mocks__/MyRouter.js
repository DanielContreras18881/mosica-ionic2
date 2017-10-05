const navigateToGigDouble = jest.fn()
const RouterMock = { navigateToGig: navigateToGigDouble}

const MyRouter = (history)=> {
  return RouterMock;
}
module.exports = {
  MyRouter: MyRouter,
}

