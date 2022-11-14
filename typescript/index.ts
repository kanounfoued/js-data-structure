function pickObjectProperty<T, K extends keyof T>(obj: T, keys: K[]) {
  const result = {} as Pick<T, K>;

  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }

  return result;
}

const obj = {
  name: "qsdfsf",
  age: 23,
};

console.log(pickObjectProperty(obj, ["name"]));

interface CatInfo {
  name: string;
  age: number;
}

type CatCategory = "magi" | "super" | "classic";

const CatInfoCategory: Record<CatCategory, CatInfo> = {
  magi: { name: "cool", age: 34 },
  super: { name: "cool", age: 34 },
  classic: { name: "cool", age: 34 },
};

function stringifyObjectKeyValues<T extends Record<string, any>>(obj: T) {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      [key]: JSON.stringify(obj[key]),
    }),
    {} as { [K in keyof T]: string }
  );
}
