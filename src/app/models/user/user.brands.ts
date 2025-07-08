/** ユーザーID */
export type UserId = string & { readonly __brand: unique symbol };
export const UserId = {
  of(value: string): UserId {
    return value as UserId;
  }
}

/** ユーザーの名前 */
export type FirstName = string & { readonly __brand: unique symbol };
export const FirstName = {
  of(value: string): FirstName {
    return value as FirstName;
  }
}

/** ユーザーの姓 */
export type LastName = string & { readonly __brand: unique symbol };
export const LastName = {
  of(value: string): LastName {
    return value as LastName;
  }
}
