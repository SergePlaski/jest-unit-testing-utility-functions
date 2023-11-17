import {
	containsDuplicates1,
	containsDuplicates2,
	containsDuplicates3,
	containsDuplicates4,
} from "./arr-contains-duplicates"; // utility JS functions

describe("containsDuplicates1", () => {
	it("should return true if any value appears at least twice in the array", () => {
		expect(containsDuplicates1([1, 2, 3, 1])).toBe(true);
	});

	it("should return false if every element is distinct", () => {
		expect(containsDuplicates1([1, 2, 3, 4])).toBe(false);
	});
});

describe("containsDuplicates2", () => {
	it("should return true if any value appears at least twice in the array", () => {
		expect(containsDuplicates2([1, 2, 3, 1])).toBe(true);
	});

	it("should return false if every element is distinct", () => {
		expect(containsDuplicates2([1, 2, 3, 4])).toBe(false);
	});
});

describe("containsDuplicates3", () => {
	it("should return true if any value appears at least twice in the array", () => {
		expect(containsDuplicates3([1, 2, 3, 1])).toBe(true);
	});

	it("should return false if every element is distinct", () => {
		expect(containsDuplicates3([1, 2, 3, 4])).toBe(false);
	});
});

describe("containsDuplicates4", () => {
	it("should return true if any value appears at least twice in the array", () => {
		expect(containsDuplicates4([1, 2, 3, 1])).toBe(true);
	});

	it("should return false if every element is distinct", () => {
		expect(containsDuplicates4([1, 2, 3, 4])).toBe(false);
	});
});
