const { CDSUtils } = require("../app/assets/javascripts/calendar_date_select/calendar_date_select");

describe("objectsToMap", () => {
  test("it should convert object keys and values to a map", () => {
    const result = new Map();
    result.set('a', 1);
    result.set('b', 2);
    expect(CDSUtils.objectsToMap({a: 1, b: 2})).toStrictEqual(result);
  });
  test("it should merge multiple objects from left to right", () => {
    const result = new Map();
    result.set('a', 1);
    result.set('b', 4);
    result.set('c', 3);
    expect(CDSUtils.objectsToMap({a: 1, b: 2}, {b: 4, c: 3})).toStrictEqual(result);
  });
  test("it should accept Maps", () => {
    const result = new Map();
    result.set('a', 1);
    result.set('b', 4);
    result.set('c', 3);
    expect(CDSUtils.objectsToMap(result)).toStrictEqual(result);
  });
  test("it should accept Maps and Objects", () => {
    const m = new Map();
    m.set('a', 1);
    m.set('b', 2);

    const result = new Map();
    result.set('a', 1);
    result.set('b', 4);
    result.set('c', 3);
    expect(CDSUtils.objectsToMap(m, {b: 4, c: 3})).toStrictEqual(result);
  });
  test("it should accept empty objects", () => {
    expect(CDSUtils.objectsToMap({})).toEqual(new Map());
  });
});

describe("range", () => {
  test("it should generate an array of consecutive numbers", () => {
    expect(CDSUtils.range(1, 3)).toStrictEqual([1, 2, 3]);
  });
  test("it should handle start > end", () => {
    expect(CDSUtils.range(3, 1)).toStrictEqual([]);
  });
  test("it should handle negative numbers", () => {
    expect(CDSUtils.range(-1, 1)).toStrictEqual([-1, 0, 1]);
  });
});

describe("floor_to_interval", () => {
  test("it should round down to the nearest interval", () => {
    expect(CDSUtils.floor_to_interval(9,5)).toBe(5);
  });
  test("it should should not round if n == i", () => {
    expect(CDSUtils.floor_to_interval(5,5)).toBe(5);
  });
  test("it should should round down if n < i", () => {
    expect(CDSUtils.floor_to_interval(1,5)).toBe(0);
  });
});

describe("findFirstChildElementByTagName", () => {

  class TestElement {
    constructor(tagName, ...children) {
      this.tagName = tagName;
      this.children = children;
    }

    hasChildNodes() {
      return this.children.length > 0;
    }
  }

  test("it should handle not finding a tag", () => {
    const parent = new TestElement('parent', new TestElement('a'), new TestElement('b'));
    expect(CDSUtils.findFirstChildElementByTagName(parent,'asdf')).toBeNull();
  });

  test("it should find the element for a direct descendant", () => {
    const target = new TestElement('target');
    const parent = new TestElement('parent', new TestElement('a'), target);
    expect(CDSUtils.findFirstChildElementByTagName(parent,'target')).toBe(target);
  });

  test("it should find the first for a child descendant", () => {
    const target = new TestElement('target');
    const parent = new TestElement('parent', new TestElement('a'), new TestElement('b', target));
    expect(CDSUtils.findFirstChildElementByTagName(parent,'target')).toBe(target);
  });

  test("it should find the left-most element in the tree", () => {
    const target = new TestElement('target');
    const parent = new TestElement('parent', new TestElement('a', target), new TestElement('target'));
    expect(CDSUtils.findFirstChildElementByTagName(parent,'target')).toBe(target);
  });

});