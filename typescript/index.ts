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

type USER = {
  email: string;
  password: string;
};

type ALLOWER_PROPS<K> = {
  readonly [T in keyof K]: boolean;
};

const Modal: ALLOWER_PROPS<USER> = {
  email: true,
  password: false,
};

function isAllowed<T>(props: ALLOWER_PROPS<T>) {
  console.log(props);
}

isAllowed<USER>({
  email: false,
  password: false,
});

/**
 *
 * check if the T has a function type
 *
 */
type GetReturnType<T> = T extends (...args: any[]) => infer U ? U : never;

function someFunction() {
  return true;
}

type ReturnTypeOfSomeFunction = GetReturnType<typeof someFunction>;
