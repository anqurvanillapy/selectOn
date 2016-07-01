var expect = chai.expect

describe('Element', function () {
  describe('#prototype', function () {
    it('should have property `selectOn()`', function () {
      expect(Element.prototype).to.have.property('selectOn')
    })
  })
})
