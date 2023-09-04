export const fwr = {
  sources: Object.values(
    // @ts-ignore
    import.meta.glob("./fwr/*.{png,jpg,jpeg,PNG,JPG,JPEG}", {
      eager: true,
      as: "url",
    }) as string[],
  ),
  title: "Forum Wizja Rozwoju",
  featured: 1,
};

export const ngl = {
  sources: Object.values(
    // @ts-ignore
    import.meta.glob("./nlg/*.{png,jpg,jpeg,PNG,JPG,JPEG}", {
      eager: true,
      as: "url",
    }) as string[],
  ),
  title: "Nagroda Literacka Gdynia",
  featured: 1,
};

export const port = {
  sources: Object.values(
    // @ts-ignore
    import.meta.glob("./port/*.{png,jpg,jpeg,PNG,JPG,JPEG}", {
      eager: true,
      as: "url",
    }) as string[],
  ),
  title: "100-lecie Portu Gdynia",
  featured: 1,
};

export const mayday = {
  sources: Object.values(
    // @ts-ignore
    import.meta.glob("./mayday/*.{png,jpg,jpeg,PNG,JPG,JPEG}", {
      eager: true,
      as: "url",
    }) as string[],
  ),
  title: "Mayday 2",
  featured: 1,
};

export const prom = {
  sources: Object.values(
    // @ts-ignore
    import.meta.glob("./prom/*.{png,jpg,jpeg,PNG,JPG,JPEG}", {
      eager: true,
      as: "url",
    }) as string[],
  ),
  title: "Konferencja Polski PCS",
  featured: 1,
};

export const wojna = {
  sources: Object.values(
    // @ts-ignore
    import.meta.glob("./wojna/*.{png,jpg,jpeg,PNG,JPG,JPEG}", {
      eager: true,
      as: "url",
    }) as string[],
  ),
  title: "40. Rocznica wprowadzenia stanu wojennego",
  featured: 1,
};

