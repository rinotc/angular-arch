import z from 'zod/v4';
import {FirstName, LastName, UserId} from './user.brands';

/**
 * ユーザーモデル
 *
 * ユーザーの情報を表すクラスです。
 *
 * @readonly {UserId} id - ユーザーID
 * @readonly {FirstName} firstName - ユーザーの名
 * @readonly {LastName} lastName - ユーザーの姓
 */
export class User {
  readonly id: UserId;
  readonly firstName: FirstName;
  readonly lastName: LastName;

  constructor(
    id: string,
    firstName: string,
    lastName: string
  ) {
    this.id = UserId.of(id);
    this.firstName = FirstName.of(firstName);
    this.lastName = LastName.of(lastName);
  }

  private static schema = z.object({
    id: z.string().transform((value) => UserId.of(value)),
    firstName: z.string().transform((value) => FirstName.of(value)),
    lastName: z.string().transform((value) => LastName.of(value))
  })

  static fromAny(anyValue: unknown): User | undefined {
    const result = User.schema.safeParse(anyValue);
    if (result.success) {
      return new User(result.data.id, result.data.firstName, result.data.lastName);
    } else {
      console.error('Invalid user data:', result.error);
      return undefined;
    }
  }

  static fromJson(json: { id: string, firstName: string, lastName: string }): User {
    const result = User.schema.safeParse(json);
    if (result.success) {
      return new User(result.data.id, result.data.firstName, result.data.lastName);
    } else {
      console.error('Invalid user JSON:', result.error);
      throw new Error('Invalid user JSON');
    }
  }
}
