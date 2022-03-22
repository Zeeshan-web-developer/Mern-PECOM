function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "test",
        age: 20,
      });
    }, 1000);
  });
}

test("test async await", async () => {
  const data = await fetchData();
  expect(data.id).toBe(1);
});

test("async await", async () => {
  expect.assertions(1);
  try {
    const data = await fetchData();
    expect(data.id).toBe(1);
  } catch (error) {
    expect(error).toMatch("error");
  }
});
