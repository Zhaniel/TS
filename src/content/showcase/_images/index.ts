export const fwr = {
  sources: Object.values(
    // @ts-ignore
    import.meta.glob("./FWR/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    }) as string[],
  ),
  title: "Forum Wizja Rozwoju 2022",
  url: "https://polinations.com/",
  featured: 1,
};

export const ngl = {
  sources: Object.values(
    // @ts-ignore
    import.meta.glob("./NGL/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    }) as string[],
  ),
  title: "trolololo",
  url: "https://polinations.com/",
  featured: 1,
};
