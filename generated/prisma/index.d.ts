
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model calificacion
 * 
 */
export type calificacion = $Result.DefaultSelection<Prisma.$calificacionPayload>
/**
 * Model curso
 * 
 */
export type curso = $Result.DefaultSelection<Prisma.$cursoPayload>
/**
 * Model leccion
 * 
 */
export type leccion = $Result.DefaultSelection<Prisma.$leccionPayload>
/**
 * Model progreso
 * 
 */
export type progreso = $Result.DefaultSelection<Prisma.$progresoPayload>
/**
 * Model unidad
 * 
 */
export type unidad = $Result.DefaultSelection<Prisma.$unidadPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model usuario_curso
 * 
 */
export type usuario_curso = $Result.DefaultSelection<Prisma.$usuario_cursoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Calificacions
 * const calificacions = await prisma.calificacion.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Calificacions
   * const calificacions = await prisma.calificacion.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.calificacion`: Exposes CRUD operations for the **calificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calificacions
    * const calificacions = await prisma.calificacion.findMany()
    * ```
    */
  get calificacion(): Prisma.calificacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.cursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leccion`: Exposes CRUD operations for the **leccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leccions
    * const leccions = await prisma.leccion.findMany()
    * ```
    */
  get leccion(): Prisma.leccionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progreso`: Exposes CRUD operations for the **progreso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progresos
    * const progresos = await prisma.progreso.findMany()
    * ```
    */
  get progreso(): Prisma.progresoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unidad`: Exposes CRUD operations for the **unidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Unidads
    * const unidads = await prisma.unidad.findMany()
    * ```
    */
  get unidad(): Prisma.unidadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario_curso`: Exposes CRUD operations for the **usuario_curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuario_cursos
    * const usuario_cursos = await prisma.usuario_curso.findMany()
    * ```
    */
  get usuario_curso(): Prisma.usuario_cursoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    calificacion: 'calificacion',
    curso: 'curso',
    leccion: 'leccion',
    progreso: 'progreso',
    unidad: 'unidad',
    usuario: 'usuario',
    usuario_curso: 'usuario_curso'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "calificacion" | "curso" | "leccion" | "progreso" | "unidad" | "usuario" | "usuario_curso"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      calificacion: {
        payload: Prisma.$calificacionPayload<ExtArgs>
        fields: Prisma.calificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.calificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.calificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>
          }
          findFirst: {
            args: Prisma.calificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.calificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>
          }
          findMany: {
            args: Prisma.calificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>[]
          }
          create: {
            args: Prisma.calificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>
          }
          createMany: {
            args: Prisma.calificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.calificacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>[]
          }
          delete: {
            args: Prisma.calificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>
          }
          update: {
            args: Prisma.calificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>
          }
          deleteMany: {
            args: Prisma.calificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.calificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.calificacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>[]
          }
          upsert: {
            args: Prisma.calificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calificacionPayload>
          }
          aggregate: {
            args: Prisma.CalificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalificacion>
          }
          groupBy: {
            args: Prisma.calificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.calificacionCountArgs<ExtArgs>
            result: $Utils.Optional<CalificacionCountAggregateOutputType> | number
          }
        }
      }
      curso: {
        payload: Prisma.$cursoPayload<ExtArgs>
        fields: Prisma.cursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          findFirst: {
            args: Prisma.cursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          findMany: {
            args: Prisma.cursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>[]
          }
          create: {
            args: Prisma.cursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          createMany: {
            args: Prisma.cursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>[]
          }
          delete: {
            args: Prisma.cursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          update: {
            args: Prisma.cursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          deleteMany: {
            args: Prisma.cursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>[]
          }
          upsert: {
            args: Prisma.cursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.cursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.cursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
      leccion: {
        payload: Prisma.$leccionPayload<ExtArgs>
        fields: Prisma.leccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leccionPayload>
          }
          findFirst: {
            args: Prisma.leccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leccionPayload>
          }
          findMany: {
            args: Prisma.leccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leccionPayload>[]
          }
          create: {
            args: Prisma.leccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leccionPayload>
          }
          createMany: {
            args: Prisma.leccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leccionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leccionPayload>[]
          }
          delete: {
            args: Prisma.leccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leccionPayload>
          }
          update: {
            args: Prisma.leccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leccionPayload>
          }
          deleteMany: {
            args: Prisma.leccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.leccionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leccionPayload>[]
          }
          upsert: {
            args: Prisma.leccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leccionPayload>
          }
          aggregate: {
            args: Prisma.LeccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeccion>
          }
          groupBy: {
            args: Prisma.leccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.leccionCountArgs<ExtArgs>
            result: $Utils.Optional<LeccionCountAggregateOutputType> | number
          }
        }
      }
      progreso: {
        payload: Prisma.$progresoPayload<ExtArgs>
        fields: Prisma.progresoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.progresoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.progresoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresoPayload>
          }
          findFirst: {
            args: Prisma.progresoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.progresoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresoPayload>
          }
          findMany: {
            args: Prisma.progresoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresoPayload>[]
          }
          create: {
            args: Prisma.progresoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresoPayload>
          }
          createMany: {
            args: Prisma.progresoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.progresoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresoPayload>[]
          }
          delete: {
            args: Prisma.progresoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresoPayload>
          }
          update: {
            args: Prisma.progresoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresoPayload>
          }
          deleteMany: {
            args: Prisma.progresoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.progresoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.progresoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresoPayload>[]
          }
          upsert: {
            args: Prisma.progresoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progresoPayload>
          }
          aggregate: {
            args: Prisma.ProgresoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgreso>
          }
          groupBy: {
            args: Prisma.progresoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgresoGroupByOutputType>[]
          }
          count: {
            args: Prisma.progresoCountArgs<ExtArgs>
            result: $Utils.Optional<ProgresoCountAggregateOutputType> | number
          }
        }
      }
      unidad: {
        payload: Prisma.$unidadPayload<ExtArgs>
        fields: Prisma.unidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.unidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.unidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadPayload>
          }
          findFirst: {
            args: Prisma.unidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.unidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadPayload>
          }
          findMany: {
            args: Prisma.unidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadPayload>[]
          }
          create: {
            args: Prisma.unidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadPayload>
          }
          createMany: {
            args: Prisma.unidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.unidadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadPayload>[]
          }
          delete: {
            args: Prisma.unidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadPayload>
          }
          update: {
            args: Prisma.unidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadPayload>
          }
          deleteMany: {
            args: Prisma.unidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.unidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.unidadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadPayload>[]
          }
          upsert: {
            args: Prisma.unidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadPayload>
          }
          aggregate: {
            args: Prisma.UnidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnidad>
          }
          groupBy: {
            args: Prisma.unidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.unidadCountArgs<ExtArgs>
            result: $Utils.Optional<UnidadCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      usuario_curso: {
        payload: Prisma.$usuario_cursoPayload<ExtArgs>
        fields: Prisma.usuario_cursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuario_cursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_cursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuario_cursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_cursoPayload>
          }
          findFirst: {
            args: Prisma.usuario_cursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_cursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuario_cursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_cursoPayload>
          }
          findMany: {
            args: Prisma.usuario_cursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_cursoPayload>[]
          }
          create: {
            args: Prisma.usuario_cursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_cursoPayload>
          }
          createMany: {
            args: Prisma.usuario_cursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuario_cursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_cursoPayload>[]
          }
          delete: {
            args: Prisma.usuario_cursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_cursoPayload>
          }
          update: {
            args: Prisma.usuario_cursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_cursoPayload>
          }
          deleteMany: {
            args: Prisma.usuario_cursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuario_cursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuario_cursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_cursoPayload>[]
          }
          upsert: {
            args: Prisma.usuario_cursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_cursoPayload>
          }
          aggregate: {
            args: Prisma.Usuario_cursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario_curso>
          }
          groupBy: {
            args: Prisma.usuario_cursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Usuario_cursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuario_cursoCountArgs<ExtArgs>
            result: $Utils.Optional<Usuario_cursoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    calificacion?: calificacionOmit
    curso?: cursoOmit
    leccion?: leccionOmit
    progreso?: progresoOmit
    unidad?: unidadOmit
    usuario?: usuarioOmit
    usuario_curso?: usuario_cursoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    calificacion: number
    unidad: number
    usuario_curso: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calificacion?: boolean | CursoCountOutputTypeCountCalificacionArgs
    unidad?: boolean | CursoCountOutputTypeCountUnidadArgs
    usuario_curso?: boolean | CursoCountOutputTypeCountUsuario_cursoArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountCalificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: calificacionWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountUnidadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: unidadWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountUsuario_cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_cursoWhereInput
  }


  /**
   * Count Type LeccionCountOutputType
   */

  export type LeccionCountOutputType = {
    progreso: number
  }

  export type LeccionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progreso?: boolean | LeccionCountOutputTypeCountProgresoArgs
  }

  // Custom InputTypes
  /**
   * LeccionCountOutputType without action
   */
  export type LeccionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeccionCountOutputType
     */
    select?: LeccionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeccionCountOutputType without action
   */
  export type LeccionCountOutputTypeCountProgresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progresoWhereInput
  }


  /**
   * Count Type UnidadCountOutputType
   */

  export type UnidadCountOutputType = {
    leccion: number
  }

  export type UnidadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leccion?: boolean | UnidadCountOutputTypeCountLeccionArgs
  }

  // Custom InputTypes
  /**
   * UnidadCountOutputType without action
   */
  export type UnidadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadCountOutputType
     */
    select?: UnidadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnidadCountOutputType without action
   */
  export type UnidadCountOutputTypeCountLeccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leccionWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    calificacion: number
    progreso: number
    usuario_curso: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calificacion?: boolean | UsuarioCountOutputTypeCountCalificacionArgs
    progreso?: boolean | UsuarioCountOutputTypeCountProgresoArgs
    usuario_curso?: boolean | UsuarioCountOutputTypeCountUsuario_cursoArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCalificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: calificacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProgresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progresoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountUsuario_cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_cursoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model calificacion
   */

  export type AggregateCalificacion = {
    _count: CalificacionCountAggregateOutputType | null
    _avg: CalificacionAvgAggregateOutputType | null
    _sum: CalificacionSumAggregateOutputType | null
    _min: CalificacionMinAggregateOutputType | null
    _max: CalificacionMaxAggregateOutputType | null
  }

  export type CalificacionAvgAggregateOutputType = {
    calificacion_id: number | null
    user_id: number | null
    calificacion: Decimal | null
  }

  export type CalificacionSumAggregateOutputType = {
    calificacion_id: number | null
    user_id: number | null
    calificacion: Decimal | null
  }

  export type CalificacionMinAggregateOutputType = {
    calificacion_id: number | null
    user_id: number | null
    curso_id: string | null
    calificacion: Decimal | null
    fecha_calificacion: Date | null
  }

  export type CalificacionMaxAggregateOutputType = {
    calificacion_id: number | null
    user_id: number | null
    curso_id: string | null
    calificacion: Decimal | null
    fecha_calificacion: Date | null
  }

  export type CalificacionCountAggregateOutputType = {
    calificacion_id: number
    user_id: number
    curso_id: number
    calificacion: number
    fecha_calificacion: number
    _all: number
  }


  export type CalificacionAvgAggregateInputType = {
    calificacion_id?: true
    user_id?: true
    calificacion?: true
  }

  export type CalificacionSumAggregateInputType = {
    calificacion_id?: true
    user_id?: true
    calificacion?: true
  }

  export type CalificacionMinAggregateInputType = {
    calificacion_id?: true
    user_id?: true
    curso_id?: true
    calificacion?: true
    fecha_calificacion?: true
  }

  export type CalificacionMaxAggregateInputType = {
    calificacion_id?: true
    user_id?: true
    curso_id?: true
    calificacion?: true
    fecha_calificacion?: true
  }

  export type CalificacionCountAggregateInputType = {
    calificacion_id?: true
    user_id?: true
    curso_id?: true
    calificacion?: true
    fecha_calificacion?: true
    _all?: true
  }

  export type CalificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calificacion to aggregate.
     */
    where?: calificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calificacions to fetch.
     */
    orderBy?: calificacionOrderByWithRelationInput | calificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: calificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned calificacions
    **/
    _count?: true | CalificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalificacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalificacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalificacionMaxAggregateInputType
  }

  export type GetCalificacionAggregateType<T extends CalificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateCalificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalificacion[P]>
      : GetScalarType<T[P], AggregateCalificacion[P]>
  }




  export type calificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: calificacionWhereInput
    orderBy?: calificacionOrderByWithAggregationInput | calificacionOrderByWithAggregationInput[]
    by: CalificacionScalarFieldEnum[] | CalificacionScalarFieldEnum
    having?: calificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalificacionCountAggregateInputType | true
    _avg?: CalificacionAvgAggregateInputType
    _sum?: CalificacionSumAggregateInputType
    _min?: CalificacionMinAggregateInputType
    _max?: CalificacionMaxAggregateInputType
  }

  export type CalificacionGroupByOutputType = {
    calificacion_id: number
    user_id: number | null
    curso_id: string | null
    calificacion: Decimal | null
    fecha_calificacion: Date | null
    _count: CalificacionCountAggregateOutputType | null
    _avg: CalificacionAvgAggregateOutputType | null
    _sum: CalificacionSumAggregateOutputType | null
    _min: CalificacionMinAggregateOutputType | null
    _max: CalificacionMaxAggregateOutputType | null
  }

  type GetCalificacionGroupByPayload<T extends calificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalificacionGroupByOutputType[P]>
            : GetScalarType<T[P], CalificacionGroupByOutputType[P]>
        }
      >
    >


  export type calificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    calificacion_id?: boolean
    user_id?: boolean
    curso_id?: boolean
    calificacion?: boolean
    fecha_calificacion?: boolean
    curso?: boolean | calificacion$cursoArgs<ExtArgs>
    usuario?: boolean | calificacion$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["calificacion"]>

  export type calificacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    calificacion_id?: boolean
    user_id?: boolean
    curso_id?: boolean
    calificacion?: boolean
    fecha_calificacion?: boolean
    curso?: boolean | calificacion$cursoArgs<ExtArgs>
    usuario?: boolean | calificacion$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["calificacion"]>

  export type calificacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    calificacion_id?: boolean
    user_id?: boolean
    curso_id?: boolean
    calificacion?: boolean
    fecha_calificacion?: boolean
    curso?: boolean | calificacion$cursoArgs<ExtArgs>
    usuario?: boolean | calificacion$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["calificacion"]>

  export type calificacionSelectScalar = {
    calificacion_id?: boolean
    user_id?: boolean
    curso_id?: boolean
    calificacion?: boolean
    fecha_calificacion?: boolean
  }

  export type calificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"calificacion_id" | "user_id" | "curso_id" | "calificacion" | "fecha_calificacion", ExtArgs["result"]["calificacion"]>
  export type calificacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | calificacion$cursoArgs<ExtArgs>
    usuario?: boolean | calificacion$usuarioArgs<ExtArgs>
  }
  export type calificacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | calificacion$cursoArgs<ExtArgs>
    usuario?: boolean | calificacion$usuarioArgs<ExtArgs>
  }
  export type calificacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | calificacion$cursoArgs<ExtArgs>
    usuario?: boolean | calificacion$usuarioArgs<ExtArgs>
  }

  export type $calificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "calificacion"
    objects: {
      curso: Prisma.$cursoPayload<ExtArgs> | null
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      calificacion_id: number
      user_id: number | null
      curso_id: string | null
      calificacion: Prisma.Decimal | null
      fecha_calificacion: Date | null
    }, ExtArgs["result"]["calificacion"]>
    composites: {}
  }

  type calificacionGetPayload<S extends boolean | null | undefined | calificacionDefaultArgs> = $Result.GetResult<Prisma.$calificacionPayload, S>

  type calificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<calificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalificacionCountAggregateInputType | true
    }

  export interface calificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['calificacion'], meta: { name: 'calificacion' } }
    /**
     * Find zero or one Calificacion that matches the filter.
     * @param {calificacionFindUniqueArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends calificacionFindUniqueArgs>(args: SelectSubset<T, calificacionFindUniqueArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {calificacionFindUniqueOrThrowArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends calificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, calificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calificacionFindFirstArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends calificacionFindFirstArgs>(args?: SelectSubset<T, calificacionFindFirstArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calificacionFindFirstOrThrowArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends calificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, calificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calificacions
     * const calificacions = await prisma.calificacion.findMany()
     * 
     * // Get first 10 Calificacions
     * const calificacions = await prisma.calificacion.findMany({ take: 10 })
     * 
     * // Only select the `calificacion_id`
     * const calificacionWithCalificacion_idOnly = await prisma.calificacion.findMany({ select: { calificacion_id: true } })
     * 
     */
    findMany<T extends calificacionFindManyArgs>(args?: SelectSubset<T, calificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calificacion.
     * @param {calificacionCreateArgs} args - Arguments to create a Calificacion.
     * @example
     * // Create one Calificacion
     * const Calificacion = await prisma.calificacion.create({
     *   data: {
     *     // ... data to create a Calificacion
     *   }
     * })
     * 
     */
    create<T extends calificacionCreateArgs>(args: SelectSubset<T, calificacionCreateArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calificacions.
     * @param {calificacionCreateManyArgs} args - Arguments to create many Calificacions.
     * @example
     * // Create many Calificacions
     * const calificacion = await prisma.calificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends calificacionCreateManyArgs>(args?: SelectSubset<T, calificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Calificacions and returns the data saved in the database.
     * @param {calificacionCreateManyAndReturnArgs} args - Arguments to create many Calificacions.
     * @example
     * // Create many Calificacions
     * const calificacion = await prisma.calificacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Calificacions and only return the `calificacion_id`
     * const calificacionWithCalificacion_idOnly = await prisma.calificacion.createManyAndReturn({
     *   select: { calificacion_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends calificacionCreateManyAndReturnArgs>(args?: SelectSubset<T, calificacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Calificacion.
     * @param {calificacionDeleteArgs} args - Arguments to delete one Calificacion.
     * @example
     * // Delete one Calificacion
     * const Calificacion = await prisma.calificacion.delete({
     *   where: {
     *     // ... filter to delete one Calificacion
     *   }
     * })
     * 
     */
    delete<T extends calificacionDeleteArgs>(args: SelectSubset<T, calificacionDeleteArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calificacion.
     * @param {calificacionUpdateArgs} args - Arguments to update one Calificacion.
     * @example
     * // Update one Calificacion
     * const calificacion = await prisma.calificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends calificacionUpdateArgs>(args: SelectSubset<T, calificacionUpdateArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calificacions.
     * @param {calificacionDeleteManyArgs} args - Arguments to filter Calificacions to delete.
     * @example
     * // Delete a few Calificacions
     * const { count } = await prisma.calificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends calificacionDeleteManyArgs>(args?: SelectSubset<T, calificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calificacions
     * const calificacion = await prisma.calificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends calificacionUpdateManyArgs>(args: SelectSubset<T, calificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calificacions and returns the data updated in the database.
     * @param {calificacionUpdateManyAndReturnArgs} args - Arguments to update many Calificacions.
     * @example
     * // Update many Calificacions
     * const calificacion = await prisma.calificacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Calificacions and only return the `calificacion_id`
     * const calificacionWithCalificacion_idOnly = await prisma.calificacion.updateManyAndReturn({
     *   select: { calificacion_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends calificacionUpdateManyAndReturnArgs>(args: SelectSubset<T, calificacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Calificacion.
     * @param {calificacionUpsertArgs} args - Arguments to update or create a Calificacion.
     * @example
     * // Update or create a Calificacion
     * const calificacion = await prisma.calificacion.upsert({
     *   create: {
     *     // ... data to create a Calificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calificacion we want to update
     *   }
     * })
     */
    upsert<T extends calificacionUpsertArgs>(args: SelectSubset<T, calificacionUpsertArgs<ExtArgs>>): Prisma__calificacionClient<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calificacionCountArgs} args - Arguments to filter Calificacions to count.
     * @example
     * // Count the number of Calificacions
     * const count = await prisma.calificacion.count({
     *   where: {
     *     // ... the filter for the Calificacions we want to count
     *   }
     * })
    **/
    count<T extends calificacionCountArgs>(
      args?: Subset<T, calificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CalificacionAggregateArgs>(args: Subset<T, CalificacionAggregateArgs>): Prisma.PrismaPromise<GetCalificacionAggregateType<T>>

    /**
     * Group by Calificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calificacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends calificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: calificacionGroupByArgs['orderBy'] }
        : { orderBy?: calificacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, calificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the calificacion model
   */
  readonly fields: calificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for calificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__calificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends calificacion$cursoArgs<ExtArgs> = {}>(args?: Subset<T, calificacion$cursoArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends calificacion$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, calificacion$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the calificacion model
   */
  interface calificacionFieldRefs {
    readonly calificacion_id: FieldRef<"calificacion", 'Int'>
    readonly user_id: FieldRef<"calificacion", 'Int'>
    readonly curso_id: FieldRef<"calificacion", 'String'>
    readonly calificacion: FieldRef<"calificacion", 'Decimal'>
    readonly fecha_calificacion: FieldRef<"calificacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * calificacion findUnique
   */
  export type calificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * Filter, which calificacion to fetch.
     */
    where: calificacionWhereUniqueInput
  }

  /**
   * calificacion findUniqueOrThrow
   */
  export type calificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * Filter, which calificacion to fetch.
     */
    where: calificacionWhereUniqueInput
  }

  /**
   * calificacion findFirst
   */
  export type calificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * Filter, which calificacion to fetch.
     */
    where?: calificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calificacions to fetch.
     */
    orderBy?: calificacionOrderByWithRelationInput | calificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calificacions.
     */
    cursor?: calificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calificacions.
     */
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * calificacion findFirstOrThrow
   */
  export type calificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * Filter, which calificacion to fetch.
     */
    where?: calificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calificacions to fetch.
     */
    orderBy?: calificacionOrderByWithRelationInput | calificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calificacions.
     */
    cursor?: calificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calificacions.
     */
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * calificacion findMany
   */
  export type calificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * Filter, which calificacions to fetch.
     */
    where?: calificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calificacions to fetch.
     */
    orderBy?: calificacionOrderByWithRelationInput | calificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing calificacions.
     */
    cursor?: calificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calificacions.
     */
    skip?: number
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * calificacion create
   */
  export type calificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * The data needed to create a calificacion.
     */
    data?: XOR<calificacionCreateInput, calificacionUncheckedCreateInput>
  }

  /**
   * calificacion createMany
   */
  export type calificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many calificacions.
     */
    data: calificacionCreateManyInput | calificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * calificacion createManyAndReturn
   */
  export type calificacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * The data used to create many calificacions.
     */
    data: calificacionCreateManyInput | calificacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * calificacion update
   */
  export type calificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * The data needed to update a calificacion.
     */
    data: XOR<calificacionUpdateInput, calificacionUncheckedUpdateInput>
    /**
     * Choose, which calificacion to update.
     */
    where: calificacionWhereUniqueInput
  }

  /**
   * calificacion updateMany
   */
  export type calificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update calificacions.
     */
    data: XOR<calificacionUpdateManyMutationInput, calificacionUncheckedUpdateManyInput>
    /**
     * Filter which calificacions to update
     */
    where?: calificacionWhereInput
    /**
     * Limit how many calificacions to update.
     */
    limit?: number
  }

  /**
   * calificacion updateManyAndReturn
   */
  export type calificacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * The data used to update calificacions.
     */
    data: XOR<calificacionUpdateManyMutationInput, calificacionUncheckedUpdateManyInput>
    /**
     * Filter which calificacions to update
     */
    where?: calificacionWhereInput
    /**
     * Limit how many calificacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * calificacion upsert
   */
  export type calificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * The filter to search for the calificacion to update in case it exists.
     */
    where: calificacionWhereUniqueInput
    /**
     * In case the calificacion found by the `where` argument doesn't exist, create a new calificacion with this data.
     */
    create: XOR<calificacionCreateInput, calificacionUncheckedCreateInput>
    /**
     * In case the calificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<calificacionUpdateInput, calificacionUncheckedUpdateInput>
  }

  /**
   * calificacion delete
   */
  export type calificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    /**
     * Filter which calificacion to delete.
     */
    where: calificacionWhereUniqueInput
  }

  /**
   * calificacion deleteMany
   */
  export type calificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calificacions to delete
     */
    where?: calificacionWhereInput
    /**
     * Limit how many calificacions to delete.
     */
    limit?: number
  }

  /**
   * calificacion.curso
   */
  export type calificacion$cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    where?: cursoWhereInput
  }

  /**
   * calificacion.usuario
   */
  export type calificacion$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * calificacion without action
   */
  export type calificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
  }


  /**
   * Model curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoAvgAggregateOutputType = {
    calificacion_promedio: Decimal | null
    precio: Decimal | null
    duracion: number | null
  }

  export type CursoSumAggregateOutputType = {
    calificacion_promedio: Decimal | null
    precio: Decimal | null
    duracion: number | null
  }

  export type CursoMinAggregateOutputType = {
    curso_id: string | null
    nombre: string | null
    descripcion: string | null
    calificacion_promedio: Decimal | null
    materiales: string | null
    imagen: string | null
    precio: Decimal | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    video_intro: string | null
    duracion: number | null
  }

  export type CursoMaxAggregateOutputType = {
    curso_id: string | null
    nombre: string | null
    descripcion: string | null
    calificacion_promedio: Decimal | null
    materiales: string | null
    imagen: string | null
    precio: Decimal | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    video_intro: string | null
    duracion: number | null
  }

  export type CursoCountAggregateOutputType = {
    curso_id: number
    nombre: number
    descripcion: number
    calificacion_promedio: number
    materiales: number
    imagen: number
    precio: number
    fecha_creacion: number
    fecha_actualizacion: number
    video_intro: number
    duracion: number
    _all: number
  }


  export type CursoAvgAggregateInputType = {
    calificacion_promedio?: true
    precio?: true
    duracion?: true
  }

  export type CursoSumAggregateInputType = {
    calificacion_promedio?: true
    precio?: true
    duracion?: true
  }

  export type CursoMinAggregateInputType = {
    curso_id?: true
    nombre?: true
    descripcion?: true
    calificacion_promedio?: true
    materiales?: true
    imagen?: true
    precio?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    video_intro?: true
    duracion?: true
  }

  export type CursoMaxAggregateInputType = {
    curso_id?: true
    nombre?: true
    descripcion?: true
    calificacion_promedio?: true
    materiales?: true
    imagen?: true
    precio?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    video_intro?: true
    duracion?: true
  }

  export type CursoCountAggregateInputType = {
    curso_id?: true
    nombre?: true
    descripcion?: true
    calificacion_promedio?: true
    materiales?: true
    imagen?: true
    precio?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    video_intro?: true
    duracion?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which curso to aggregate.
     */
    where?: cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursoOrderByWithRelationInput | cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type cursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cursoWhereInput
    orderBy?: cursoOrderByWithAggregationInput | cursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: cursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _avg?: CursoAvgAggregateInputType
    _sum?: CursoSumAggregateInputType
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    curso_id: string
    nombre: string
    descripcion: string | null
    calificacion_promedio: Decimal | null
    materiales: string | null
    imagen: string | null
    precio: Decimal | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    video_intro: string | null
    duracion: number | null
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends cursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type cursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    curso_id?: boolean
    nombre?: boolean
    descripcion?: boolean
    calificacion_promedio?: boolean
    materiales?: boolean
    imagen?: boolean
    precio?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    video_intro?: boolean
    duracion?: boolean
    calificacion?: boolean | curso$calificacionArgs<ExtArgs>
    unidad?: boolean | curso$unidadArgs<ExtArgs>
    usuario_curso?: boolean | curso$usuario_cursoArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type cursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    curso_id?: boolean
    nombre?: boolean
    descripcion?: boolean
    calificacion_promedio?: boolean
    materiales?: boolean
    imagen?: boolean
    precio?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    video_intro?: boolean
    duracion?: boolean
  }, ExtArgs["result"]["curso"]>

  export type cursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    curso_id?: boolean
    nombre?: boolean
    descripcion?: boolean
    calificacion_promedio?: boolean
    materiales?: boolean
    imagen?: boolean
    precio?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    video_intro?: boolean
    duracion?: boolean
  }, ExtArgs["result"]["curso"]>

  export type cursoSelectScalar = {
    curso_id?: boolean
    nombre?: boolean
    descripcion?: boolean
    calificacion_promedio?: boolean
    materiales?: boolean
    imagen?: boolean
    precio?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    video_intro?: boolean
    duracion?: boolean
  }

  export type cursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"curso_id" | "nombre" | "descripcion" | "calificacion_promedio" | "materiales" | "imagen" | "precio" | "fecha_creacion" | "fecha_actualizacion" | "video_intro" | "duracion", ExtArgs["result"]["curso"]>
  export type cursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calificacion?: boolean | curso$calificacionArgs<ExtArgs>
    unidad?: boolean | curso$unidadArgs<ExtArgs>
    usuario_curso?: boolean | curso$usuario_cursoArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "curso"
    objects: {
      calificacion: Prisma.$calificacionPayload<ExtArgs>[]
      unidad: Prisma.$unidadPayload<ExtArgs>[]
      usuario_curso: Prisma.$usuario_cursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      curso_id: string
      nombre: string
      descripcion: string | null
      calificacion_promedio: Prisma.Decimal | null
      materiales: string | null
      imagen: string | null
      precio: Prisma.Decimal | null
      fecha_creacion: Date | null
      fecha_actualizacion: Date | null
      video_intro: string | null
      duracion: number | null
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type cursoGetPayload<S extends boolean | null | undefined | cursoDefaultArgs> = $Result.GetResult<Prisma.$cursoPayload, S>

  type cursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface cursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['curso'], meta: { name: 'curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {cursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cursoFindUniqueArgs>(args: SelectSubset<T, cursoFindUniqueArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cursoFindUniqueOrThrowArgs>(args: SelectSubset<T, cursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cursoFindFirstArgs>(args?: SelectSubset<T, cursoFindFirstArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cursoFindFirstOrThrowArgs>(args?: SelectSubset<T, cursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `curso_id`
     * const cursoWithCurso_idOnly = await prisma.curso.findMany({ select: { curso_id: true } })
     * 
     */
    findMany<T extends cursoFindManyArgs>(args?: SelectSubset<T, cursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curso.
     * @param {cursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends cursoCreateArgs>(args: SelectSubset<T, cursoCreateArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {cursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cursoCreateManyArgs>(args?: SelectSubset<T, cursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursos and returns the data saved in the database.
     * @param {cursoCreateManyAndReturnArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursos and only return the `curso_id`
     * const cursoWithCurso_idOnly = await prisma.curso.createManyAndReturn({
     *   select: { curso_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cursoCreateManyAndReturnArgs>(args?: SelectSubset<T, cursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curso.
     * @param {cursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends cursoDeleteArgs>(args: SelectSubset<T, cursoDeleteArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curso.
     * @param {cursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cursoUpdateArgs>(args: SelectSubset<T, cursoUpdateArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {cursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cursoDeleteManyArgs>(args?: SelectSubset<T, cursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cursoUpdateManyArgs>(args: SelectSubset<T, cursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos and returns the data updated in the database.
     * @param {cursoUpdateManyAndReturnArgs} args - Arguments to update many Cursos.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cursos and only return the `curso_id`
     * const cursoWithCurso_idOnly = await prisma.curso.updateManyAndReturn({
     *   select: { curso_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cursoUpdateManyAndReturnArgs>(args: SelectSubset<T, cursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curso.
     * @param {cursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends cursoUpsertArgs>(args: SelectSubset<T, cursoUpsertArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends cursoCountArgs>(
      args?: Subset<T, cursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cursoGroupByArgs['orderBy'] }
        : { orderBy?: cursoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the curso model
   */
  readonly fields: cursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    calificacion<T extends curso$calificacionArgs<ExtArgs> = {}>(args?: Subset<T, curso$calificacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    unidad<T extends curso$unidadArgs<ExtArgs> = {}>(args?: Subset<T, curso$unidadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario_curso<T extends curso$usuario_cursoArgs<ExtArgs> = {}>(args?: Subset<T, curso$usuario_cursoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the curso model
   */
  interface cursoFieldRefs {
    readonly curso_id: FieldRef<"curso", 'String'>
    readonly nombre: FieldRef<"curso", 'String'>
    readonly descripcion: FieldRef<"curso", 'String'>
    readonly calificacion_promedio: FieldRef<"curso", 'Decimal'>
    readonly materiales: FieldRef<"curso", 'String'>
    readonly imagen: FieldRef<"curso", 'String'>
    readonly precio: FieldRef<"curso", 'Decimal'>
    readonly fecha_creacion: FieldRef<"curso", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"curso", 'DateTime'>
    readonly video_intro: FieldRef<"curso", 'String'>
    readonly duracion: FieldRef<"curso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * curso findUnique
   */
  export type cursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter, which curso to fetch.
     */
    where: cursoWhereUniqueInput
  }

  /**
   * curso findUniqueOrThrow
   */
  export type cursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter, which curso to fetch.
     */
    where: cursoWhereUniqueInput
  }

  /**
   * curso findFirst
   */
  export type cursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter, which curso to fetch.
     */
    where?: cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursoOrderByWithRelationInput | cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursos.
     */
    cursor?: cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * curso findFirstOrThrow
   */
  export type cursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter, which curso to fetch.
     */
    where?: cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursoOrderByWithRelationInput | cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursos.
     */
    cursor?: cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * curso findMany
   */
  export type cursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where?: cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursoOrderByWithRelationInput | cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cursos.
     */
    cursor?: cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * curso create
   */
  export type cursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * The data needed to create a curso.
     */
    data: XOR<cursoCreateInput, cursoUncheckedCreateInput>
  }

  /**
   * curso createMany
   */
  export type cursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cursos.
     */
    data: cursoCreateManyInput | cursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * curso createManyAndReturn
   */
  export type cursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * The data used to create many cursos.
     */
    data: cursoCreateManyInput | cursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * curso update
   */
  export type cursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * The data needed to update a curso.
     */
    data: XOR<cursoUpdateInput, cursoUncheckedUpdateInput>
    /**
     * Choose, which curso to update.
     */
    where: cursoWhereUniqueInput
  }

  /**
   * curso updateMany
   */
  export type cursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cursos.
     */
    data: XOR<cursoUpdateManyMutationInput, cursoUncheckedUpdateManyInput>
    /**
     * Filter which cursos to update
     */
    where?: cursoWhereInput
    /**
     * Limit how many cursos to update.
     */
    limit?: number
  }

  /**
   * curso updateManyAndReturn
   */
  export type cursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * The data used to update cursos.
     */
    data: XOR<cursoUpdateManyMutationInput, cursoUncheckedUpdateManyInput>
    /**
     * Filter which cursos to update
     */
    where?: cursoWhereInput
    /**
     * Limit how many cursos to update.
     */
    limit?: number
  }

  /**
   * curso upsert
   */
  export type cursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * The filter to search for the curso to update in case it exists.
     */
    where: cursoWhereUniqueInput
    /**
     * In case the curso found by the `where` argument doesn't exist, create a new curso with this data.
     */
    create: XOR<cursoCreateInput, cursoUncheckedCreateInput>
    /**
     * In case the curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cursoUpdateInput, cursoUncheckedUpdateInput>
  }

  /**
   * curso delete
   */
  export type cursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    /**
     * Filter which curso to delete.
     */
    where: cursoWhereUniqueInput
  }

  /**
   * curso deleteMany
   */
  export type cursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cursos to delete
     */
    where?: cursoWhereInput
    /**
     * Limit how many cursos to delete.
     */
    limit?: number
  }

  /**
   * curso.calificacion
   */
  export type curso$calificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    where?: calificacionWhereInput
    orderBy?: calificacionOrderByWithRelationInput | calificacionOrderByWithRelationInput[]
    cursor?: calificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * curso.unidad
   */
  export type curso$unidadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidad
     */
    select?: unidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidad
     */
    omit?: unidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadInclude<ExtArgs> | null
    where?: unidadWhereInput
    orderBy?: unidadOrderByWithRelationInput | unidadOrderByWithRelationInput[]
    cursor?: unidadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnidadScalarFieldEnum | UnidadScalarFieldEnum[]
  }

  /**
   * curso.usuario_curso
   */
  export type curso$usuario_cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_curso
     */
    select?: usuario_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_curso
     */
    omit?: usuario_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_cursoInclude<ExtArgs> | null
    where?: usuario_cursoWhereInput
    orderBy?: usuario_cursoOrderByWithRelationInput | usuario_cursoOrderByWithRelationInput[]
    cursor?: usuario_cursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_cursoScalarFieldEnum | Usuario_cursoScalarFieldEnum[]
  }

  /**
   * curso without action
   */
  export type cursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
  }


  /**
   * Model leccion
   */

  export type AggregateLeccion = {
    _count: LeccionCountAggregateOutputType | null
    _avg: LeccionAvgAggregateOutputType | null
    _sum: LeccionSumAggregateOutputType | null
    _min: LeccionMinAggregateOutputType | null
    _max: LeccionMaxAggregateOutputType | null
  }

  export type LeccionAvgAggregateOutputType = {
    leccion_id: number | null
    unidad_id: number | null
  }

  export type LeccionSumAggregateOutputType = {
    leccion_id: number | null
    unidad_id: number | null
  }

  export type LeccionMinAggregateOutputType = {
    leccion_id: number | null
    unidad_id: number | null
    nombre: string | null
    video_url: string | null
    material_descarga: string | null
    leccion: string | null
  }

  export type LeccionMaxAggregateOutputType = {
    leccion_id: number | null
    unidad_id: number | null
    nombre: string | null
    video_url: string | null
    material_descarga: string | null
    leccion: string | null
  }

  export type LeccionCountAggregateOutputType = {
    leccion_id: number
    unidad_id: number
    nombre: number
    video_url: number
    material_descarga: number
    leccion: number
    _all: number
  }


  export type LeccionAvgAggregateInputType = {
    leccion_id?: true
    unidad_id?: true
  }

  export type LeccionSumAggregateInputType = {
    leccion_id?: true
    unidad_id?: true
  }

  export type LeccionMinAggregateInputType = {
    leccion_id?: true
    unidad_id?: true
    nombre?: true
    video_url?: true
    material_descarga?: true
    leccion?: true
  }

  export type LeccionMaxAggregateInputType = {
    leccion_id?: true
    unidad_id?: true
    nombre?: true
    video_url?: true
    material_descarga?: true
    leccion?: true
  }

  export type LeccionCountAggregateInputType = {
    leccion_id?: true
    unidad_id?: true
    nombre?: true
    video_url?: true
    material_descarga?: true
    leccion?: true
    _all?: true
  }

  export type LeccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leccion to aggregate.
     */
    where?: leccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leccions to fetch.
     */
    orderBy?: leccionOrderByWithRelationInput | leccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leccions
    **/
    _count?: true | LeccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeccionMaxAggregateInputType
  }

  export type GetLeccionAggregateType<T extends LeccionAggregateArgs> = {
        [P in keyof T & keyof AggregateLeccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeccion[P]>
      : GetScalarType<T[P], AggregateLeccion[P]>
  }




  export type leccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leccionWhereInput
    orderBy?: leccionOrderByWithAggregationInput | leccionOrderByWithAggregationInput[]
    by: LeccionScalarFieldEnum[] | LeccionScalarFieldEnum
    having?: leccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeccionCountAggregateInputType | true
    _avg?: LeccionAvgAggregateInputType
    _sum?: LeccionSumAggregateInputType
    _min?: LeccionMinAggregateInputType
    _max?: LeccionMaxAggregateInputType
  }

  export type LeccionGroupByOutputType = {
    leccion_id: number
    unidad_id: number | null
    nombre: string
    video_url: string | null
    material_descarga: string | null
    leccion: string | null
    _count: LeccionCountAggregateOutputType | null
    _avg: LeccionAvgAggregateOutputType | null
    _sum: LeccionSumAggregateOutputType | null
    _min: LeccionMinAggregateOutputType | null
    _max: LeccionMaxAggregateOutputType | null
  }

  type GetLeccionGroupByPayload<T extends leccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeccionGroupByOutputType[P]>
            : GetScalarType<T[P], LeccionGroupByOutputType[P]>
        }
      >
    >


  export type leccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leccion_id?: boolean
    unidad_id?: boolean
    nombre?: boolean
    video_url?: boolean
    material_descarga?: boolean
    leccion?: boolean
    unidad?: boolean | leccion$unidadArgs<ExtArgs>
    progreso?: boolean | leccion$progresoArgs<ExtArgs>
    _count?: boolean | LeccionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leccion"]>

  export type leccionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leccion_id?: boolean
    unidad_id?: boolean
    nombre?: boolean
    video_url?: boolean
    material_descarga?: boolean
    leccion?: boolean
    unidad?: boolean | leccion$unidadArgs<ExtArgs>
  }, ExtArgs["result"]["leccion"]>

  export type leccionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leccion_id?: boolean
    unidad_id?: boolean
    nombre?: boolean
    video_url?: boolean
    material_descarga?: boolean
    leccion?: boolean
    unidad?: boolean | leccion$unidadArgs<ExtArgs>
  }, ExtArgs["result"]["leccion"]>

  export type leccionSelectScalar = {
    leccion_id?: boolean
    unidad_id?: boolean
    nombre?: boolean
    video_url?: boolean
    material_descarga?: boolean
    leccion?: boolean
  }

  export type leccionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"leccion_id" | "unidad_id" | "nombre" | "video_url" | "material_descarga" | "leccion", ExtArgs["result"]["leccion"]>
  export type leccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unidad?: boolean | leccion$unidadArgs<ExtArgs>
    progreso?: boolean | leccion$progresoArgs<ExtArgs>
    _count?: boolean | LeccionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type leccionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unidad?: boolean | leccion$unidadArgs<ExtArgs>
  }
  export type leccionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unidad?: boolean | leccion$unidadArgs<ExtArgs>
  }

  export type $leccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leccion"
    objects: {
      unidad: Prisma.$unidadPayload<ExtArgs> | null
      progreso: Prisma.$progresoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      leccion_id: number
      unidad_id: number | null
      nombre: string
      video_url: string | null
      material_descarga: string | null
      leccion: string | null
    }, ExtArgs["result"]["leccion"]>
    composites: {}
  }

  type leccionGetPayload<S extends boolean | null | undefined | leccionDefaultArgs> = $Result.GetResult<Prisma.$leccionPayload, S>

  type leccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeccionCountAggregateInputType | true
    }

  export interface leccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leccion'], meta: { name: 'leccion' } }
    /**
     * Find zero or one Leccion that matches the filter.
     * @param {leccionFindUniqueArgs} args - Arguments to find a Leccion
     * @example
     * // Get one Leccion
     * const leccion = await prisma.leccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leccionFindUniqueArgs>(args: SelectSubset<T, leccionFindUniqueArgs<ExtArgs>>): Prisma__leccionClient<$Result.GetResult<Prisma.$leccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leccion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leccionFindUniqueOrThrowArgs} args - Arguments to find a Leccion
     * @example
     * // Get one Leccion
     * const leccion = await prisma.leccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leccionFindUniqueOrThrowArgs>(args: SelectSubset<T, leccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leccionClient<$Result.GetResult<Prisma.$leccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leccionFindFirstArgs} args - Arguments to find a Leccion
     * @example
     * // Get one Leccion
     * const leccion = await prisma.leccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leccionFindFirstArgs>(args?: SelectSubset<T, leccionFindFirstArgs<ExtArgs>>): Prisma__leccionClient<$Result.GetResult<Prisma.$leccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leccionFindFirstOrThrowArgs} args - Arguments to find a Leccion
     * @example
     * // Get one Leccion
     * const leccion = await prisma.leccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leccionFindFirstOrThrowArgs>(args?: SelectSubset<T, leccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__leccionClient<$Result.GetResult<Prisma.$leccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leccions
     * const leccions = await prisma.leccion.findMany()
     * 
     * // Get first 10 Leccions
     * const leccions = await prisma.leccion.findMany({ take: 10 })
     * 
     * // Only select the `leccion_id`
     * const leccionWithLeccion_idOnly = await prisma.leccion.findMany({ select: { leccion_id: true } })
     * 
     */
    findMany<T extends leccionFindManyArgs>(args?: SelectSubset<T, leccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leccion.
     * @param {leccionCreateArgs} args - Arguments to create a Leccion.
     * @example
     * // Create one Leccion
     * const Leccion = await prisma.leccion.create({
     *   data: {
     *     // ... data to create a Leccion
     *   }
     * })
     * 
     */
    create<T extends leccionCreateArgs>(args: SelectSubset<T, leccionCreateArgs<ExtArgs>>): Prisma__leccionClient<$Result.GetResult<Prisma.$leccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leccions.
     * @param {leccionCreateManyArgs} args - Arguments to create many Leccions.
     * @example
     * // Create many Leccions
     * const leccion = await prisma.leccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leccionCreateManyArgs>(args?: SelectSubset<T, leccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leccions and returns the data saved in the database.
     * @param {leccionCreateManyAndReturnArgs} args - Arguments to create many Leccions.
     * @example
     * // Create many Leccions
     * const leccion = await prisma.leccion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leccions and only return the `leccion_id`
     * const leccionWithLeccion_idOnly = await prisma.leccion.createManyAndReturn({
     *   select: { leccion_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leccionCreateManyAndReturnArgs>(args?: SelectSubset<T, leccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leccionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leccion.
     * @param {leccionDeleteArgs} args - Arguments to delete one Leccion.
     * @example
     * // Delete one Leccion
     * const Leccion = await prisma.leccion.delete({
     *   where: {
     *     // ... filter to delete one Leccion
     *   }
     * })
     * 
     */
    delete<T extends leccionDeleteArgs>(args: SelectSubset<T, leccionDeleteArgs<ExtArgs>>): Prisma__leccionClient<$Result.GetResult<Prisma.$leccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leccion.
     * @param {leccionUpdateArgs} args - Arguments to update one Leccion.
     * @example
     * // Update one Leccion
     * const leccion = await prisma.leccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leccionUpdateArgs>(args: SelectSubset<T, leccionUpdateArgs<ExtArgs>>): Prisma__leccionClient<$Result.GetResult<Prisma.$leccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leccions.
     * @param {leccionDeleteManyArgs} args - Arguments to filter Leccions to delete.
     * @example
     * // Delete a few Leccions
     * const { count } = await prisma.leccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leccionDeleteManyArgs>(args?: SelectSubset<T, leccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leccions
     * const leccion = await prisma.leccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leccionUpdateManyArgs>(args: SelectSubset<T, leccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leccions and returns the data updated in the database.
     * @param {leccionUpdateManyAndReturnArgs} args - Arguments to update many Leccions.
     * @example
     * // Update many Leccions
     * const leccion = await prisma.leccion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leccions and only return the `leccion_id`
     * const leccionWithLeccion_idOnly = await prisma.leccion.updateManyAndReturn({
     *   select: { leccion_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends leccionUpdateManyAndReturnArgs>(args: SelectSubset<T, leccionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leccionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leccion.
     * @param {leccionUpsertArgs} args - Arguments to update or create a Leccion.
     * @example
     * // Update or create a Leccion
     * const leccion = await prisma.leccion.upsert({
     *   create: {
     *     // ... data to create a Leccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leccion we want to update
     *   }
     * })
     */
    upsert<T extends leccionUpsertArgs>(args: SelectSubset<T, leccionUpsertArgs<ExtArgs>>): Prisma__leccionClient<$Result.GetResult<Prisma.$leccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leccionCountArgs} args - Arguments to filter Leccions to count.
     * @example
     * // Count the number of Leccions
     * const count = await prisma.leccion.count({
     *   where: {
     *     // ... the filter for the Leccions we want to count
     *   }
     * })
    **/
    count<T extends leccionCountArgs>(
      args?: Subset<T, leccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeccionAggregateArgs>(args: Subset<T, LeccionAggregateArgs>): Prisma.PrismaPromise<GetLeccionAggregateType<T>>

    /**
     * Group by Leccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leccionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leccionGroupByArgs['orderBy'] }
        : { orderBy?: leccionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leccion model
   */
  readonly fields: leccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unidad<T extends leccion$unidadArgs<ExtArgs> = {}>(args?: Subset<T, leccion$unidadArgs<ExtArgs>>): Prisma__unidadClient<$Result.GetResult<Prisma.$unidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    progreso<T extends leccion$progresoArgs<ExtArgs> = {}>(args?: Subset<T, leccion$progresoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leccion model
   */
  interface leccionFieldRefs {
    readonly leccion_id: FieldRef<"leccion", 'Int'>
    readonly unidad_id: FieldRef<"leccion", 'Int'>
    readonly nombre: FieldRef<"leccion", 'String'>
    readonly video_url: FieldRef<"leccion", 'String'>
    readonly material_descarga: FieldRef<"leccion", 'String'>
    readonly leccion: FieldRef<"leccion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * leccion findUnique
   */
  export type leccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leccion
     */
    select?: leccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leccion
     */
    omit?: leccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leccionInclude<ExtArgs> | null
    /**
     * Filter, which leccion to fetch.
     */
    where: leccionWhereUniqueInput
  }

  /**
   * leccion findUniqueOrThrow
   */
  export type leccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leccion
     */
    select?: leccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leccion
     */
    omit?: leccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leccionInclude<ExtArgs> | null
    /**
     * Filter, which leccion to fetch.
     */
    where: leccionWhereUniqueInput
  }

  /**
   * leccion findFirst
   */
  export type leccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leccion
     */
    select?: leccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leccion
     */
    omit?: leccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leccionInclude<ExtArgs> | null
    /**
     * Filter, which leccion to fetch.
     */
    where?: leccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leccions to fetch.
     */
    orderBy?: leccionOrderByWithRelationInput | leccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leccions.
     */
    cursor?: leccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leccions.
     */
    distinct?: LeccionScalarFieldEnum | LeccionScalarFieldEnum[]
  }

  /**
   * leccion findFirstOrThrow
   */
  export type leccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leccion
     */
    select?: leccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leccion
     */
    omit?: leccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leccionInclude<ExtArgs> | null
    /**
     * Filter, which leccion to fetch.
     */
    where?: leccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leccions to fetch.
     */
    orderBy?: leccionOrderByWithRelationInput | leccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leccions.
     */
    cursor?: leccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leccions.
     */
    distinct?: LeccionScalarFieldEnum | LeccionScalarFieldEnum[]
  }

  /**
   * leccion findMany
   */
  export type leccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leccion
     */
    select?: leccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leccion
     */
    omit?: leccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leccionInclude<ExtArgs> | null
    /**
     * Filter, which leccions to fetch.
     */
    where?: leccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leccions to fetch.
     */
    orderBy?: leccionOrderByWithRelationInput | leccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leccions.
     */
    cursor?: leccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leccions.
     */
    skip?: number
    distinct?: LeccionScalarFieldEnum | LeccionScalarFieldEnum[]
  }

  /**
   * leccion create
   */
  export type leccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leccion
     */
    select?: leccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leccion
     */
    omit?: leccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leccionInclude<ExtArgs> | null
    /**
     * The data needed to create a leccion.
     */
    data: XOR<leccionCreateInput, leccionUncheckedCreateInput>
  }

  /**
   * leccion createMany
   */
  export type leccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leccions.
     */
    data: leccionCreateManyInput | leccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leccion createManyAndReturn
   */
  export type leccionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leccion
     */
    select?: leccionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leccion
     */
    omit?: leccionOmit<ExtArgs> | null
    /**
     * The data used to create many leccions.
     */
    data: leccionCreateManyInput | leccionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leccionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * leccion update
   */
  export type leccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leccion
     */
    select?: leccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leccion
     */
    omit?: leccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leccionInclude<ExtArgs> | null
    /**
     * The data needed to update a leccion.
     */
    data: XOR<leccionUpdateInput, leccionUncheckedUpdateInput>
    /**
     * Choose, which leccion to update.
     */
    where: leccionWhereUniqueInput
  }

  /**
   * leccion updateMany
   */
  export type leccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leccions.
     */
    data: XOR<leccionUpdateManyMutationInput, leccionUncheckedUpdateManyInput>
    /**
     * Filter which leccions to update
     */
    where?: leccionWhereInput
    /**
     * Limit how many leccions to update.
     */
    limit?: number
  }

  /**
   * leccion updateManyAndReturn
   */
  export type leccionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leccion
     */
    select?: leccionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leccion
     */
    omit?: leccionOmit<ExtArgs> | null
    /**
     * The data used to update leccions.
     */
    data: XOR<leccionUpdateManyMutationInput, leccionUncheckedUpdateManyInput>
    /**
     * Filter which leccions to update
     */
    where?: leccionWhereInput
    /**
     * Limit how many leccions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leccionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * leccion upsert
   */
  export type leccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leccion
     */
    select?: leccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leccion
     */
    omit?: leccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leccionInclude<ExtArgs> | null
    /**
     * The filter to search for the leccion to update in case it exists.
     */
    where: leccionWhereUniqueInput
    /**
     * In case the leccion found by the `where` argument doesn't exist, create a new leccion with this data.
     */
    create: XOR<leccionCreateInput, leccionUncheckedCreateInput>
    /**
     * In case the leccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leccionUpdateInput, leccionUncheckedUpdateInput>
  }

  /**
   * leccion delete
   */
  export type leccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leccion
     */
    select?: leccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leccion
     */
    omit?: leccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leccionInclude<ExtArgs> | null
    /**
     * Filter which leccion to delete.
     */
    where: leccionWhereUniqueInput
  }

  /**
   * leccion deleteMany
   */
  export type leccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leccions to delete
     */
    where?: leccionWhereInput
    /**
     * Limit how many leccions to delete.
     */
    limit?: number
  }

  /**
   * leccion.unidad
   */
  export type leccion$unidadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidad
     */
    select?: unidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidad
     */
    omit?: unidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadInclude<ExtArgs> | null
    where?: unidadWhereInput
  }

  /**
   * leccion.progreso
   */
  export type leccion$progresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progreso
     */
    select?: progresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progreso
     */
    omit?: progresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresoInclude<ExtArgs> | null
    where?: progresoWhereInput
    orderBy?: progresoOrderByWithRelationInput | progresoOrderByWithRelationInput[]
    cursor?: progresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * leccion without action
   */
  export type leccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leccion
     */
    select?: leccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leccion
     */
    omit?: leccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leccionInclude<ExtArgs> | null
  }


  /**
   * Model progreso
   */

  export type AggregateProgreso = {
    _count: ProgresoCountAggregateOutputType | null
    _avg: ProgresoAvgAggregateOutputType | null
    _sum: ProgresoSumAggregateOutputType | null
    _min: ProgresoMinAggregateOutputType | null
    _max: ProgresoMaxAggregateOutputType | null
  }

  export type ProgresoAvgAggregateOutputType = {
    user_id: number | null
    leccion_id: number | null
    progreso_id: number | null
  }

  export type ProgresoSumAggregateOutputType = {
    user_id: number | null
    leccion_id: number | null
    progreso_id: number | null
  }

  export type ProgresoMinAggregateOutputType = {
    user_id: number | null
    leccion_id: number | null
    completado: boolean | null
    progreso_id: number | null
  }

  export type ProgresoMaxAggregateOutputType = {
    user_id: number | null
    leccion_id: number | null
    completado: boolean | null
    progreso_id: number | null
  }

  export type ProgresoCountAggregateOutputType = {
    user_id: number
    leccion_id: number
    completado: number
    progreso_id: number
    _all: number
  }


  export type ProgresoAvgAggregateInputType = {
    user_id?: true
    leccion_id?: true
    progreso_id?: true
  }

  export type ProgresoSumAggregateInputType = {
    user_id?: true
    leccion_id?: true
    progreso_id?: true
  }

  export type ProgresoMinAggregateInputType = {
    user_id?: true
    leccion_id?: true
    completado?: true
    progreso_id?: true
  }

  export type ProgresoMaxAggregateInputType = {
    user_id?: true
    leccion_id?: true
    completado?: true
    progreso_id?: true
  }

  export type ProgresoCountAggregateInputType = {
    user_id?: true
    leccion_id?: true
    completado?: true
    progreso_id?: true
    _all?: true
  }

  export type ProgresoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progreso to aggregate.
     */
    where?: progresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progresos to fetch.
     */
    orderBy?: progresoOrderByWithRelationInput | progresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: progresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned progresos
    **/
    _count?: true | ProgresoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgresoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgresoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgresoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgresoMaxAggregateInputType
  }

  export type GetProgresoAggregateType<T extends ProgresoAggregateArgs> = {
        [P in keyof T & keyof AggregateProgreso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgreso[P]>
      : GetScalarType<T[P], AggregateProgreso[P]>
  }




  export type progresoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progresoWhereInput
    orderBy?: progresoOrderByWithAggregationInput | progresoOrderByWithAggregationInput[]
    by: ProgresoScalarFieldEnum[] | ProgresoScalarFieldEnum
    having?: progresoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgresoCountAggregateInputType | true
    _avg?: ProgresoAvgAggregateInputType
    _sum?: ProgresoSumAggregateInputType
    _min?: ProgresoMinAggregateInputType
    _max?: ProgresoMaxAggregateInputType
  }

  export type ProgresoGroupByOutputType = {
    user_id: number | null
    leccion_id: number | null
    completado: boolean | null
    progreso_id: number
    _count: ProgresoCountAggregateOutputType | null
    _avg: ProgresoAvgAggregateOutputType | null
    _sum: ProgresoSumAggregateOutputType | null
    _min: ProgresoMinAggregateOutputType | null
    _max: ProgresoMaxAggregateOutputType | null
  }

  type GetProgresoGroupByPayload<T extends progresoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgresoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgresoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgresoGroupByOutputType[P]>
            : GetScalarType<T[P], ProgresoGroupByOutputType[P]>
        }
      >
    >


  export type progresoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    leccion_id?: boolean
    completado?: boolean
    progreso_id?: boolean
    leccion?: boolean | progreso$leccionArgs<ExtArgs>
    usuario?: boolean | progreso$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["progreso"]>

  export type progresoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    leccion_id?: boolean
    completado?: boolean
    progreso_id?: boolean
    leccion?: boolean | progreso$leccionArgs<ExtArgs>
    usuario?: boolean | progreso$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["progreso"]>

  export type progresoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    leccion_id?: boolean
    completado?: boolean
    progreso_id?: boolean
    leccion?: boolean | progreso$leccionArgs<ExtArgs>
    usuario?: boolean | progreso$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["progreso"]>

  export type progresoSelectScalar = {
    user_id?: boolean
    leccion_id?: boolean
    completado?: boolean
    progreso_id?: boolean
  }

  export type progresoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "leccion_id" | "completado" | "progreso_id", ExtArgs["result"]["progreso"]>
  export type progresoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leccion?: boolean | progreso$leccionArgs<ExtArgs>
    usuario?: boolean | progreso$usuarioArgs<ExtArgs>
  }
  export type progresoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leccion?: boolean | progreso$leccionArgs<ExtArgs>
    usuario?: boolean | progreso$usuarioArgs<ExtArgs>
  }
  export type progresoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leccion?: boolean | progreso$leccionArgs<ExtArgs>
    usuario?: boolean | progreso$usuarioArgs<ExtArgs>
  }

  export type $progresoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "progreso"
    objects: {
      leccion: Prisma.$leccionPayload<ExtArgs> | null
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number | null
      leccion_id: number | null
      completado: boolean | null
      progreso_id: number
    }, ExtArgs["result"]["progreso"]>
    composites: {}
  }

  type progresoGetPayload<S extends boolean | null | undefined | progresoDefaultArgs> = $Result.GetResult<Prisma.$progresoPayload, S>

  type progresoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<progresoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgresoCountAggregateInputType | true
    }

  export interface progresoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['progreso'], meta: { name: 'progreso' } }
    /**
     * Find zero or one Progreso that matches the filter.
     * @param {progresoFindUniqueArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends progresoFindUniqueArgs>(args: SelectSubset<T, progresoFindUniqueArgs<ExtArgs>>): Prisma__progresoClient<$Result.GetResult<Prisma.$progresoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Progreso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {progresoFindUniqueOrThrowArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends progresoFindUniqueOrThrowArgs>(args: SelectSubset<T, progresoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__progresoClient<$Result.GetResult<Prisma.$progresoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progreso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progresoFindFirstArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends progresoFindFirstArgs>(args?: SelectSubset<T, progresoFindFirstArgs<ExtArgs>>): Prisma__progresoClient<$Result.GetResult<Prisma.$progresoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progreso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progresoFindFirstOrThrowArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends progresoFindFirstOrThrowArgs>(args?: SelectSubset<T, progresoFindFirstOrThrowArgs<ExtArgs>>): Prisma__progresoClient<$Result.GetResult<Prisma.$progresoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Progresos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progresoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progresos
     * const progresos = await prisma.progreso.findMany()
     * 
     * // Get first 10 Progresos
     * const progresos = await prisma.progreso.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const progresoWithUser_idOnly = await prisma.progreso.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends progresoFindManyArgs>(args?: SelectSubset<T, progresoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Progreso.
     * @param {progresoCreateArgs} args - Arguments to create a Progreso.
     * @example
     * // Create one Progreso
     * const Progreso = await prisma.progreso.create({
     *   data: {
     *     // ... data to create a Progreso
     *   }
     * })
     * 
     */
    create<T extends progresoCreateArgs>(args: SelectSubset<T, progresoCreateArgs<ExtArgs>>): Prisma__progresoClient<$Result.GetResult<Prisma.$progresoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Progresos.
     * @param {progresoCreateManyArgs} args - Arguments to create many Progresos.
     * @example
     * // Create many Progresos
     * const progreso = await prisma.progreso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends progresoCreateManyArgs>(args?: SelectSubset<T, progresoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Progresos and returns the data saved in the database.
     * @param {progresoCreateManyAndReturnArgs} args - Arguments to create many Progresos.
     * @example
     * // Create many Progresos
     * const progreso = await prisma.progreso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Progresos and only return the `user_id`
     * const progresoWithUser_idOnly = await prisma.progreso.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends progresoCreateManyAndReturnArgs>(args?: SelectSubset<T, progresoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progresoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Progreso.
     * @param {progresoDeleteArgs} args - Arguments to delete one Progreso.
     * @example
     * // Delete one Progreso
     * const Progreso = await prisma.progreso.delete({
     *   where: {
     *     // ... filter to delete one Progreso
     *   }
     * })
     * 
     */
    delete<T extends progresoDeleteArgs>(args: SelectSubset<T, progresoDeleteArgs<ExtArgs>>): Prisma__progresoClient<$Result.GetResult<Prisma.$progresoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Progreso.
     * @param {progresoUpdateArgs} args - Arguments to update one Progreso.
     * @example
     * // Update one Progreso
     * const progreso = await prisma.progreso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends progresoUpdateArgs>(args: SelectSubset<T, progresoUpdateArgs<ExtArgs>>): Prisma__progresoClient<$Result.GetResult<Prisma.$progresoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Progresos.
     * @param {progresoDeleteManyArgs} args - Arguments to filter Progresos to delete.
     * @example
     * // Delete a few Progresos
     * const { count } = await prisma.progreso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends progresoDeleteManyArgs>(args?: SelectSubset<T, progresoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progresoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progresos
     * const progreso = await prisma.progreso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends progresoUpdateManyArgs>(args: SelectSubset<T, progresoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresos and returns the data updated in the database.
     * @param {progresoUpdateManyAndReturnArgs} args - Arguments to update many Progresos.
     * @example
     * // Update many Progresos
     * const progreso = await prisma.progreso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Progresos and only return the `user_id`
     * const progresoWithUser_idOnly = await prisma.progreso.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends progresoUpdateManyAndReturnArgs>(args: SelectSubset<T, progresoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progresoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Progreso.
     * @param {progresoUpsertArgs} args - Arguments to update or create a Progreso.
     * @example
     * // Update or create a Progreso
     * const progreso = await prisma.progreso.upsert({
     *   create: {
     *     // ... data to create a Progreso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progreso we want to update
     *   }
     * })
     */
    upsert<T extends progresoUpsertArgs>(args: SelectSubset<T, progresoUpsertArgs<ExtArgs>>): Prisma__progresoClient<$Result.GetResult<Prisma.$progresoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Progresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progresoCountArgs} args - Arguments to filter Progresos to count.
     * @example
     * // Count the number of Progresos
     * const count = await prisma.progreso.count({
     *   where: {
     *     // ... the filter for the Progresos we want to count
     *   }
     * })
    **/
    count<T extends progresoCountArgs>(
      args?: Subset<T, progresoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgresoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgresoAggregateArgs>(args: Subset<T, ProgresoAggregateArgs>): Prisma.PrismaPromise<GetProgresoAggregateType<T>>

    /**
     * Group by Progreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progresoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends progresoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: progresoGroupByArgs['orderBy'] }
        : { orderBy?: progresoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, progresoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgresoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the progreso model
   */
  readonly fields: progresoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for progreso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__progresoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leccion<T extends progreso$leccionArgs<ExtArgs> = {}>(args?: Subset<T, progreso$leccionArgs<ExtArgs>>): Prisma__leccionClient<$Result.GetResult<Prisma.$leccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends progreso$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, progreso$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the progreso model
   */
  interface progresoFieldRefs {
    readonly user_id: FieldRef<"progreso", 'Int'>
    readonly leccion_id: FieldRef<"progreso", 'Int'>
    readonly completado: FieldRef<"progreso", 'Boolean'>
    readonly progreso_id: FieldRef<"progreso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * progreso findUnique
   */
  export type progresoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progreso
     */
    select?: progresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progreso
     */
    omit?: progresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresoInclude<ExtArgs> | null
    /**
     * Filter, which progreso to fetch.
     */
    where: progresoWhereUniqueInput
  }

  /**
   * progreso findUniqueOrThrow
   */
  export type progresoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progreso
     */
    select?: progresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progreso
     */
    omit?: progresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresoInclude<ExtArgs> | null
    /**
     * Filter, which progreso to fetch.
     */
    where: progresoWhereUniqueInput
  }

  /**
   * progreso findFirst
   */
  export type progresoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progreso
     */
    select?: progresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progreso
     */
    omit?: progresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresoInclude<ExtArgs> | null
    /**
     * Filter, which progreso to fetch.
     */
    where?: progresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progresos to fetch.
     */
    orderBy?: progresoOrderByWithRelationInput | progresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for progresos.
     */
    cursor?: progresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of progresos.
     */
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * progreso findFirstOrThrow
   */
  export type progresoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progreso
     */
    select?: progresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progreso
     */
    omit?: progresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresoInclude<ExtArgs> | null
    /**
     * Filter, which progreso to fetch.
     */
    where?: progresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progresos to fetch.
     */
    orderBy?: progresoOrderByWithRelationInput | progresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for progresos.
     */
    cursor?: progresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of progresos.
     */
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * progreso findMany
   */
  export type progresoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progreso
     */
    select?: progresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progreso
     */
    omit?: progresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresoInclude<ExtArgs> | null
    /**
     * Filter, which progresos to fetch.
     */
    where?: progresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progresos to fetch.
     */
    orderBy?: progresoOrderByWithRelationInput | progresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing progresos.
     */
    cursor?: progresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progresos.
     */
    skip?: number
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * progreso create
   */
  export type progresoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progreso
     */
    select?: progresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progreso
     */
    omit?: progresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresoInclude<ExtArgs> | null
    /**
     * The data needed to create a progreso.
     */
    data?: XOR<progresoCreateInput, progresoUncheckedCreateInput>
  }

  /**
   * progreso createMany
   */
  export type progresoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many progresos.
     */
    data: progresoCreateManyInput | progresoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * progreso createManyAndReturn
   */
  export type progresoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progreso
     */
    select?: progresoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the progreso
     */
    omit?: progresoOmit<ExtArgs> | null
    /**
     * The data used to create many progresos.
     */
    data: progresoCreateManyInput | progresoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * progreso update
   */
  export type progresoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progreso
     */
    select?: progresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progreso
     */
    omit?: progresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresoInclude<ExtArgs> | null
    /**
     * The data needed to update a progreso.
     */
    data: XOR<progresoUpdateInput, progresoUncheckedUpdateInput>
    /**
     * Choose, which progreso to update.
     */
    where: progresoWhereUniqueInput
  }

  /**
   * progreso updateMany
   */
  export type progresoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update progresos.
     */
    data: XOR<progresoUpdateManyMutationInput, progresoUncheckedUpdateManyInput>
    /**
     * Filter which progresos to update
     */
    where?: progresoWhereInput
    /**
     * Limit how many progresos to update.
     */
    limit?: number
  }

  /**
   * progreso updateManyAndReturn
   */
  export type progresoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progreso
     */
    select?: progresoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the progreso
     */
    omit?: progresoOmit<ExtArgs> | null
    /**
     * The data used to update progresos.
     */
    data: XOR<progresoUpdateManyMutationInput, progresoUncheckedUpdateManyInput>
    /**
     * Filter which progresos to update
     */
    where?: progresoWhereInput
    /**
     * Limit how many progresos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * progreso upsert
   */
  export type progresoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progreso
     */
    select?: progresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progreso
     */
    omit?: progresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresoInclude<ExtArgs> | null
    /**
     * The filter to search for the progreso to update in case it exists.
     */
    where: progresoWhereUniqueInput
    /**
     * In case the progreso found by the `where` argument doesn't exist, create a new progreso with this data.
     */
    create: XOR<progresoCreateInput, progresoUncheckedCreateInput>
    /**
     * In case the progreso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<progresoUpdateInput, progresoUncheckedUpdateInput>
  }

  /**
   * progreso delete
   */
  export type progresoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progreso
     */
    select?: progresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progreso
     */
    omit?: progresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresoInclude<ExtArgs> | null
    /**
     * Filter which progreso to delete.
     */
    where: progresoWhereUniqueInput
  }

  /**
   * progreso deleteMany
   */
  export type progresoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progresos to delete
     */
    where?: progresoWhereInput
    /**
     * Limit how many progresos to delete.
     */
    limit?: number
  }

  /**
   * progreso.leccion
   */
  export type progreso$leccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leccion
     */
    select?: leccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leccion
     */
    omit?: leccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leccionInclude<ExtArgs> | null
    where?: leccionWhereInput
  }

  /**
   * progreso.usuario
   */
  export type progreso$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * progreso without action
   */
  export type progresoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progreso
     */
    select?: progresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progreso
     */
    omit?: progresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresoInclude<ExtArgs> | null
  }


  /**
   * Model unidad
   */

  export type AggregateUnidad = {
    _count: UnidadCountAggregateOutputType | null
    _avg: UnidadAvgAggregateOutputType | null
    _sum: UnidadSumAggregateOutputType | null
    _min: UnidadMinAggregateOutputType | null
    _max: UnidadMaxAggregateOutputType | null
  }

  export type UnidadAvgAggregateOutputType = {
    unidad_id: number | null
  }

  export type UnidadSumAggregateOutputType = {
    unidad_id: number | null
  }

  export type UnidadMinAggregateOutputType = {
    unidad_id: number | null
    curso_id: string | null
    nombre: string | null
    descripcion: string | null
    unidad: string | null
  }

  export type UnidadMaxAggregateOutputType = {
    unidad_id: number | null
    curso_id: string | null
    nombre: string | null
    descripcion: string | null
    unidad: string | null
  }

  export type UnidadCountAggregateOutputType = {
    unidad_id: number
    curso_id: number
    nombre: number
    descripcion: number
    unidad: number
    _all: number
  }


  export type UnidadAvgAggregateInputType = {
    unidad_id?: true
  }

  export type UnidadSumAggregateInputType = {
    unidad_id?: true
  }

  export type UnidadMinAggregateInputType = {
    unidad_id?: true
    curso_id?: true
    nombre?: true
    descripcion?: true
    unidad?: true
  }

  export type UnidadMaxAggregateInputType = {
    unidad_id?: true
    curso_id?: true
    nombre?: true
    descripcion?: true
    unidad?: true
  }

  export type UnidadCountAggregateInputType = {
    unidad_id?: true
    curso_id?: true
    nombre?: true
    descripcion?: true
    unidad?: true
    _all?: true
  }

  export type UnidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which unidad to aggregate.
     */
    where?: unidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unidads to fetch.
     */
    orderBy?: unidadOrderByWithRelationInput | unidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: unidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned unidads
    **/
    _count?: true | UnidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnidadMaxAggregateInputType
  }

  export type GetUnidadAggregateType<T extends UnidadAggregateArgs> = {
        [P in keyof T & keyof AggregateUnidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnidad[P]>
      : GetScalarType<T[P], AggregateUnidad[P]>
  }




  export type unidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: unidadWhereInput
    orderBy?: unidadOrderByWithAggregationInput | unidadOrderByWithAggregationInput[]
    by: UnidadScalarFieldEnum[] | UnidadScalarFieldEnum
    having?: unidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnidadCountAggregateInputType | true
    _avg?: UnidadAvgAggregateInputType
    _sum?: UnidadSumAggregateInputType
    _min?: UnidadMinAggregateInputType
    _max?: UnidadMaxAggregateInputType
  }

  export type UnidadGroupByOutputType = {
    unidad_id: number
    curso_id: string | null
    nombre: string
    descripcion: string | null
    unidad: string | null
    _count: UnidadCountAggregateOutputType | null
    _avg: UnidadAvgAggregateOutputType | null
    _sum: UnidadSumAggregateOutputType | null
    _min: UnidadMinAggregateOutputType | null
    _max: UnidadMaxAggregateOutputType | null
  }

  type GetUnidadGroupByPayload<T extends unidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnidadGroupByOutputType[P]>
            : GetScalarType<T[P], UnidadGroupByOutputType[P]>
        }
      >
    >


  export type unidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    unidad_id?: boolean
    curso_id?: boolean
    nombre?: boolean
    descripcion?: boolean
    unidad?: boolean
    leccion?: boolean | unidad$leccionArgs<ExtArgs>
    curso?: boolean | unidad$cursoArgs<ExtArgs>
    _count?: boolean | UnidadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unidad"]>

  export type unidadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    unidad_id?: boolean
    curso_id?: boolean
    nombre?: boolean
    descripcion?: boolean
    unidad?: boolean
    curso?: boolean | unidad$cursoArgs<ExtArgs>
  }, ExtArgs["result"]["unidad"]>

  export type unidadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    unidad_id?: boolean
    curso_id?: boolean
    nombre?: boolean
    descripcion?: boolean
    unidad?: boolean
    curso?: boolean | unidad$cursoArgs<ExtArgs>
  }, ExtArgs["result"]["unidad"]>

  export type unidadSelectScalar = {
    unidad_id?: boolean
    curso_id?: boolean
    nombre?: boolean
    descripcion?: boolean
    unidad?: boolean
  }

  export type unidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"unidad_id" | "curso_id" | "nombre" | "descripcion" | "unidad", ExtArgs["result"]["unidad"]>
  export type unidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leccion?: boolean | unidad$leccionArgs<ExtArgs>
    curso?: boolean | unidad$cursoArgs<ExtArgs>
    _count?: boolean | UnidadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type unidadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | unidad$cursoArgs<ExtArgs>
  }
  export type unidadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | unidad$cursoArgs<ExtArgs>
  }

  export type $unidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "unidad"
    objects: {
      leccion: Prisma.$leccionPayload<ExtArgs>[]
      curso: Prisma.$cursoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      unidad_id: number
      curso_id: string | null
      nombre: string
      descripcion: string | null
      unidad: string | null
    }, ExtArgs["result"]["unidad"]>
    composites: {}
  }

  type unidadGetPayload<S extends boolean | null | undefined | unidadDefaultArgs> = $Result.GetResult<Prisma.$unidadPayload, S>

  type unidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<unidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnidadCountAggregateInputType | true
    }

  export interface unidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['unidad'], meta: { name: 'unidad' } }
    /**
     * Find zero or one Unidad that matches the filter.
     * @param {unidadFindUniqueArgs} args - Arguments to find a Unidad
     * @example
     * // Get one Unidad
     * const unidad = await prisma.unidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends unidadFindUniqueArgs>(args: SelectSubset<T, unidadFindUniqueArgs<ExtArgs>>): Prisma__unidadClient<$Result.GetResult<Prisma.$unidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {unidadFindUniqueOrThrowArgs} args - Arguments to find a Unidad
     * @example
     * // Get one Unidad
     * const unidad = await prisma.unidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends unidadFindUniqueOrThrowArgs>(args: SelectSubset<T, unidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__unidadClient<$Result.GetResult<Prisma.$unidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadFindFirstArgs} args - Arguments to find a Unidad
     * @example
     * // Get one Unidad
     * const unidad = await prisma.unidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends unidadFindFirstArgs>(args?: SelectSubset<T, unidadFindFirstArgs<ExtArgs>>): Prisma__unidadClient<$Result.GetResult<Prisma.$unidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadFindFirstOrThrowArgs} args - Arguments to find a Unidad
     * @example
     * // Get one Unidad
     * const unidad = await prisma.unidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends unidadFindFirstOrThrowArgs>(args?: SelectSubset<T, unidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__unidadClient<$Result.GetResult<Prisma.$unidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Unidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Unidads
     * const unidads = await prisma.unidad.findMany()
     * 
     * // Get first 10 Unidads
     * const unidads = await prisma.unidad.findMany({ take: 10 })
     * 
     * // Only select the `unidad_id`
     * const unidadWithUnidad_idOnly = await prisma.unidad.findMany({ select: { unidad_id: true } })
     * 
     */
    findMany<T extends unidadFindManyArgs>(args?: SelectSubset<T, unidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unidad.
     * @param {unidadCreateArgs} args - Arguments to create a Unidad.
     * @example
     * // Create one Unidad
     * const Unidad = await prisma.unidad.create({
     *   data: {
     *     // ... data to create a Unidad
     *   }
     * })
     * 
     */
    create<T extends unidadCreateArgs>(args: SelectSubset<T, unidadCreateArgs<ExtArgs>>): Prisma__unidadClient<$Result.GetResult<Prisma.$unidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Unidads.
     * @param {unidadCreateManyArgs} args - Arguments to create many Unidads.
     * @example
     * // Create many Unidads
     * const unidad = await prisma.unidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends unidadCreateManyArgs>(args?: SelectSubset<T, unidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Unidads and returns the data saved in the database.
     * @param {unidadCreateManyAndReturnArgs} args - Arguments to create many Unidads.
     * @example
     * // Create many Unidads
     * const unidad = await prisma.unidad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Unidads and only return the `unidad_id`
     * const unidadWithUnidad_idOnly = await prisma.unidad.createManyAndReturn({
     *   select: { unidad_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends unidadCreateManyAndReturnArgs>(args?: SelectSubset<T, unidadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unidadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unidad.
     * @param {unidadDeleteArgs} args - Arguments to delete one Unidad.
     * @example
     * // Delete one Unidad
     * const Unidad = await prisma.unidad.delete({
     *   where: {
     *     // ... filter to delete one Unidad
     *   }
     * })
     * 
     */
    delete<T extends unidadDeleteArgs>(args: SelectSubset<T, unidadDeleteArgs<ExtArgs>>): Prisma__unidadClient<$Result.GetResult<Prisma.$unidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unidad.
     * @param {unidadUpdateArgs} args - Arguments to update one Unidad.
     * @example
     * // Update one Unidad
     * const unidad = await prisma.unidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends unidadUpdateArgs>(args: SelectSubset<T, unidadUpdateArgs<ExtArgs>>): Prisma__unidadClient<$Result.GetResult<Prisma.$unidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Unidads.
     * @param {unidadDeleteManyArgs} args - Arguments to filter Unidads to delete.
     * @example
     * // Delete a few Unidads
     * const { count } = await prisma.unidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends unidadDeleteManyArgs>(args?: SelectSubset<T, unidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Unidads
     * const unidad = await prisma.unidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends unidadUpdateManyArgs>(args: SelectSubset<T, unidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unidads and returns the data updated in the database.
     * @param {unidadUpdateManyAndReturnArgs} args - Arguments to update many Unidads.
     * @example
     * // Update many Unidads
     * const unidad = await prisma.unidad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Unidads and only return the `unidad_id`
     * const unidadWithUnidad_idOnly = await prisma.unidad.updateManyAndReturn({
     *   select: { unidad_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends unidadUpdateManyAndReturnArgs>(args: SelectSubset<T, unidadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unidadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unidad.
     * @param {unidadUpsertArgs} args - Arguments to update or create a Unidad.
     * @example
     * // Update or create a Unidad
     * const unidad = await prisma.unidad.upsert({
     *   create: {
     *     // ... data to create a Unidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unidad we want to update
     *   }
     * })
     */
    upsert<T extends unidadUpsertArgs>(args: SelectSubset<T, unidadUpsertArgs<ExtArgs>>): Prisma__unidadClient<$Result.GetResult<Prisma.$unidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Unidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadCountArgs} args - Arguments to filter Unidads to count.
     * @example
     * // Count the number of Unidads
     * const count = await prisma.unidad.count({
     *   where: {
     *     // ... the filter for the Unidads we want to count
     *   }
     * })
    **/
    count<T extends unidadCountArgs>(
      args?: Subset<T, unidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnidadAggregateArgs>(args: Subset<T, UnidadAggregateArgs>): Prisma.PrismaPromise<GetUnidadAggregateType<T>>

    /**
     * Group by Unidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends unidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: unidadGroupByArgs['orderBy'] }
        : { orderBy?: unidadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, unidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the unidad model
   */
  readonly fields: unidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for unidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__unidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leccion<T extends unidad$leccionArgs<ExtArgs> = {}>(args?: Subset<T, unidad$leccionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curso<T extends unidad$cursoArgs<ExtArgs> = {}>(args?: Subset<T, unidad$cursoArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the unidad model
   */
  interface unidadFieldRefs {
    readonly unidad_id: FieldRef<"unidad", 'Int'>
    readonly curso_id: FieldRef<"unidad", 'String'>
    readonly nombre: FieldRef<"unidad", 'String'>
    readonly descripcion: FieldRef<"unidad", 'String'>
    readonly unidad: FieldRef<"unidad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * unidad findUnique
   */
  export type unidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidad
     */
    select?: unidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidad
     */
    omit?: unidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadInclude<ExtArgs> | null
    /**
     * Filter, which unidad to fetch.
     */
    where: unidadWhereUniqueInput
  }

  /**
   * unidad findUniqueOrThrow
   */
  export type unidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidad
     */
    select?: unidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidad
     */
    omit?: unidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadInclude<ExtArgs> | null
    /**
     * Filter, which unidad to fetch.
     */
    where: unidadWhereUniqueInput
  }

  /**
   * unidad findFirst
   */
  export type unidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidad
     */
    select?: unidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidad
     */
    omit?: unidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadInclude<ExtArgs> | null
    /**
     * Filter, which unidad to fetch.
     */
    where?: unidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unidads to fetch.
     */
    orderBy?: unidadOrderByWithRelationInput | unidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for unidads.
     */
    cursor?: unidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of unidads.
     */
    distinct?: UnidadScalarFieldEnum | UnidadScalarFieldEnum[]
  }

  /**
   * unidad findFirstOrThrow
   */
  export type unidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidad
     */
    select?: unidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidad
     */
    omit?: unidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadInclude<ExtArgs> | null
    /**
     * Filter, which unidad to fetch.
     */
    where?: unidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unidads to fetch.
     */
    orderBy?: unidadOrderByWithRelationInput | unidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for unidads.
     */
    cursor?: unidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of unidads.
     */
    distinct?: UnidadScalarFieldEnum | UnidadScalarFieldEnum[]
  }

  /**
   * unidad findMany
   */
  export type unidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidad
     */
    select?: unidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidad
     */
    omit?: unidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadInclude<ExtArgs> | null
    /**
     * Filter, which unidads to fetch.
     */
    where?: unidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unidads to fetch.
     */
    orderBy?: unidadOrderByWithRelationInput | unidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing unidads.
     */
    cursor?: unidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unidads.
     */
    skip?: number
    distinct?: UnidadScalarFieldEnum | UnidadScalarFieldEnum[]
  }

  /**
   * unidad create
   */
  export type unidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidad
     */
    select?: unidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidad
     */
    omit?: unidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadInclude<ExtArgs> | null
    /**
     * The data needed to create a unidad.
     */
    data: XOR<unidadCreateInput, unidadUncheckedCreateInput>
  }

  /**
   * unidad createMany
   */
  export type unidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many unidads.
     */
    data: unidadCreateManyInput | unidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * unidad createManyAndReturn
   */
  export type unidadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidad
     */
    select?: unidadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the unidad
     */
    omit?: unidadOmit<ExtArgs> | null
    /**
     * The data used to create many unidads.
     */
    data: unidadCreateManyInput | unidadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * unidad update
   */
  export type unidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidad
     */
    select?: unidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidad
     */
    omit?: unidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadInclude<ExtArgs> | null
    /**
     * The data needed to update a unidad.
     */
    data: XOR<unidadUpdateInput, unidadUncheckedUpdateInput>
    /**
     * Choose, which unidad to update.
     */
    where: unidadWhereUniqueInput
  }

  /**
   * unidad updateMany
   */
  export type unidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update unidads.
     */
    data: XOR<unidadUpdateManyMutationInput, unidadUncheckedUpdateManyInput>
    /**
     * Filter which unidads to update
     */
    where?: unidadWhereInput
    /**
     * Limit how many unidads to update.
     */
    limit?: number
  }

  /**
   * unidad updateManyAndReturn
   */
  export type unidadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidad
     */
    select?: unidadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the unidad
     */
    omit?: unidadOmit<ExtArgs> | null
    /**
     * The data used to update unidads.
     */
    data: XOR<unidadUpdateManyMutationInput, unidadUncheckedUpdateManyInput>
    /**
     * Filter which unidads to update
     */
    where?: unidadWhereInput
    /**
     * Limit how many unidads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * unidad upsert
   */
  export type unidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidad
     */
    select?: unidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidad
     */
    omit?: unidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadInclude<ExtArgs> | null
    /**
     * The filter to search for the unidad to update in case it exists.
     */
    where: unidadWhereUniqueInput
    /**
     * In case the unidad found by the `where` argument doesn't exist, create a new unidad with this data.
     */
    create: XOR<unidadCreateInput, unidadUncheckedCreateInput>
    /**
     * In case the unidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<unidadUpdateInput, unidadUncheckedUpdateInput>
  }

  /**
   * unidad delete
   */
  export type unidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidad
     */
    select?: unidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidad
     */
    omit?: unidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadInclude<ExtArgs> | null
    /**
     * Filter which unidad to delete.
     */
    where: unidadWhereUniqueInput
  }

  /**
   * unidad deleteMany
   */
  export type unidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which unidads to delete
     */
    where?: unidadWhereInput
    /**
     * Limit how many unidads to delete.
     */
    limit?: number
  }

  /**
   * unidad.leccion
   */
  export type unidad$leccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leccion
     */
    select?: leccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leccion
     */
    omit?: leccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leccionInclude<ExtArgs> | null
    where?: leccionWhereInput
    orderBy?: leccionOrderByWithRelationInput | leccionOrderByWithRelationInput[]
    cursor?: leccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeccionScalarFieldEnum | LeccionScalarFieldEnum[]
  }

  /**
   * unidad.curso
   */
  export type unidad$cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curso
     */
    select?: cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curso
     */
    omit?: cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursoInclude<ExtArgs> | null
    where?: cursoWhereInput
  }

  /**
   * unidad without action
   */
  export type unidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidad
     */
    select?: unidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidad
     */
    omit?: unidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    user_id: number | null
    nombres: string | null
    apellidos: string | null
    dni: string | null
    celular: string | null
    correo: string | null
    usuario: string | null
    contrasenia: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    rol: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    user_id: number | null
    nombres: string | null
    apellidos: string | null
    dni: string | null
    celular: string | null
    correo: string | null
    usuario: string | null
    contrasenia: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    rol: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    user_id: number
    nombres: number
    apellidos: number
    dni: number
    celular: number
    correo: number
    usuario: number
    contrasenia: number
    fecha_creacion: number
    fecha_actualizacion: number
    rol: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    user_id?: true
  }

  export type UsuarioSumAggregateInputType = {
    user_id?: true
  }

  export type UsuarioMinAggregateInputType = {
    user_id?: true
    nombres?: true
    apellidos?: true
    dni?: true
    celular?: true
    correo?: true
    usuario?: true
    contrasenia?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    rol?: true
  }

  export type UsuarioMaxAggregateInputType = {
    user_id?: true
    nombres?: true
    apellidos?: true
    dni?: true
    celular?: true
    correo?: true
    usuario?: true
    contrasenia?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    rol?: true
  }

  export type UsuarioCountAggregateInputType = {
    user_id?: true
    nombres?: true
    apellidos?: true
    dni?: true
    celular?: true
    correo?: true
    usuario?: true
    contrasenia?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    rol?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    user_id: number
    nombres: string | null
    apellidos: string | null
    dni: string | null
    celular: string | null
    correo: string
    usuario: string | null
    contrasenia: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    rol: string | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    nombres?: boolean
    apellidos?: boolean
    dni?: boolean
    celular?: boolean
    correo?: boolean
    usuario?: boolean
    contrasenia?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    rol?: boolean
    calificacion?: boolean | usuario$calificacionArgs<ExtArgs>
    progreso?: boolean | usuario$progresoArgs<ExtArgs>
    usuario_curso?: boolean | usuario$usuario_cursoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    nombres?: boolean
    apellidos?: boolean
    dni?: boolean
    celular?: boolean
    correo?: boolean
    usuario?: boolean
    contrasenia?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    nombres?: boolean
    apellidos?: boolean
    dni?: boolean
    celular?: boolean
    correo?: boolean
    usuario?: boolean
    contrasenia?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectScalar = {
    user_id?: boolean
    nombres?: boolean
    apellidos?: boolean
    dni?: boolean
    celular?: boolean
    correo?: boolean
    usuario?: boolean
    contrasenia?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    rol?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "nombres" | "apellidos" | "dni" | "celular" | "correo" | "usuario" | "contrasenia" | "fecha_creacion" | "fecha_actualizacion" | "rol", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calificacion?: boolean | usuario$calificacionArgs<ExtArgs>
    progreso?: boolean | usuario$progresoArgs<ExtArgs>
    usuario_curso?: boolean | usuario$usuario_cursoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      calificacion: Prisma.$calificacionPayload<ExtArgs>[]
      progreso: Prisma.$progresoPayload<ExtArgs>[]
      usuario_curso: Prisma.$usuario_cursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      nombres: string | null
      apellidos: string | null
      dni: string | null
      celular: string | null
      correo: string
      usuario: string | null
      contrasenia: string | null
      fecha_creacion: Date | null
      fecha_actualizacion: Date | null
      rol: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usuarioWithUser_idOnly = await prisma.usuario.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `user_id`
     * const usuarioWithUser_idOnly = await prisma.usuario.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `user_id`
     * const usuarioWithUser_idOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    calificacion<T extends usuario$calificacionArgs<ExtArgs> = {}>(args?: Subset<T, usuario$calificacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progreso<T extends usuario$progresoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$progresoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario_curso<T extends usuario$usuario_cursoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$usuario_cursoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly user_id: FieldRef<"usuario", 'Int'>
    readonly nombres: FieldRef<"usuario", 'String'>
    readonly apellidos: FieldRef<"usuario", 'String'>
    readonly dni: FieldRef<"usuario", 'String'>
    readonly celular: FieldRef<"usuario", 'String'>
    readonly correo: FieldRef<"usuario", 'String'>
    readonly usuario: FieldRef<"usuario", 'String'>
    readonly contrasenia: FieldRef<"usuario", 'String'>
    readonly fecha_creacion: FieldRef<"usuario", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"usuario", 'DateTime'>
    readonly rol: FieldRef<"usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario createManyAndReturn
   */
  export type usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario updateManyAndReturn
   */
  export type usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.calificacion
   */
  export type usuario$calificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calificacion
     */
    select?: calificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calificacion
     */
    omit?: calificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calificacionInclude<ExtArgs> | null
    where?: calificacionWhereInput
    orderBy?: calificacionOrderByWithRelationInput | calificacionOrderByWithRelationInput[]
    cursor?: calificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * usuario.progreso
   */
  export type usuario$progresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progreso
     */
    select?: progresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progreso
     */
    omit?: progresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progresoInclude<ExtArgs> | null
    where?: progresoWhereInput
    orderBy?: progresoOrderByWithRelationInput | progresoOrderByWithRelationInput[]
    cursor?: progresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * usuario.usuario_curso
   */
  export type usuario$usuario_cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_curso
     */
    select?: usuario_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_curso
     */
    omit?: usuario_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_cursoInclude<ExtArgs> | null
    where?: usuario_cursoWhereInput
    orderBy?: usuario_cursoOrderByWithRelationInput | usuario_cursoOrderByWithRelationInput[]
    cursor?: usuario_cursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_cursoScalarFieldEnum | Usuario_cursoScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model usuario_curso
   */

  export type AggregateUsuario_curso = {
    _count: Usuario_cursoCountAggregateOutputType | null
    _avg: Usuario_cursoAvgAggregateOutputType | null
    _sum: Usuario_cursoSumAggregateOutputType | null
    _min: Usuario_cursoMinAggregateOutputType | null
    _max: Usuario_cursoMaxAggregateOutputType | null
  }

  export type Usuario_cursoAvgAggregateOutputType = {
    user_id: number | null
  }

  export type Usuario_cursoSumAggregateOutputType = {
    user_id: number | null
  }

  export type Usuario_cursoMinAggregateOutputType = {
    user_id: number | null
    curso_id: string | null
  }

  export type Usuario_cursoMaxAggregateOutputType = {
    user_id: number | null
    curso_id: string | null
  }

  export type Usuario_cursoCountAggregateOutputType = {
    user_id: number
    curso_id: number
    _all: number
  }


  export type Usuario_cursoAvgAggregateInputType = {
    user_id?: true
  }

  export type Usuario_cursoSumAggregateInputType = {
    user_id?: true
  }

  export type Usuario_cursoMinAggregateInputType = {
    user_id?: true
    curso_id?: true
  }

  export type Usuario_cursoMaxAggregateInputType = {
    user_id?: true
    curso_id?: true
  }

  export type Usuario_cursoCountAggregateInputType = {
    user_id?: true
    curso_id?: true
    _all?: true
  }

  export type Usuario_cursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_curso to aggregate.
     */
    where?: usuario_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_cursos to fetch.
     */
    orderBy?: usuario_cursoOrderByWithRelationInput | usuario_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuario_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuario_cursos
    **/
    _count?: true | Usuario_cursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usuario_cursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usuario_cursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuario_cursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuario_cursoMaxAggregateInputType
  }

  export type GetUsuario_cursoAggregateType<T extends Usuario_cursoAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario_curso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario_curso[P]>
      : GetScalarType<T[P], AggregateUsuario_curso[P]>
  }




  export type usuario_cursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_cursoWhereInput
    orderBy?: usuario_cursoOrderByWithAggregationInput | usuario_cursoOrderByWithAggregationInput[]
    by: Usuario_cursoScalarFieldEnum[] | Usuario_cursoScalarFieldEnum
    having?: usuario_cursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuario_cursoCountAggregateInputType | true
    _avg?: Usuario_cursoAvgAggregateInputType
    _sum?: Usuario_cursoSumAggregateInputType
    _min?: Usuario_cursoMinAggregateInputType
    _max?: Usuario_cursoMaxAggregateInputType
  }

  export type Usuario_cursoGroupByOutputType = {
    user_id: number
    curso_id: string
    _count: Usuario_cursoCountAggregateOutputType | null
    _avg: Usuario_cursoAvgAggregateOutputType | null
    _sum: Usuario_cursoSumAggregateOutputType | null
    _min: Usuario_cursoMinAggregateOutputType | null
    _max: Usuario_cursoMaxAggregateOutputType | null
  }

  type GetUsuario_cursoGroupByPayload<T extends usuario_cursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuario_cursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuario_cursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuario_cursoGroupByOutputType[P]>
            : GetScalarType<T[P], Usuario_cursoGroupByOutputType[P]>
        }
      >
    >


  export type usuario_cursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    curso_id?: boolean
    curso?: boolean | cursoDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_curso"]>

  export type usuario_cursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    curso_id?: boolean
    curso?: boolean | cursoDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_curso"]>

  export type usuario_cursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    curso_id?: boolean
    curso?: boolean | cursoDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_curso"]>

  export type usuario_cursoSelectScalar = {
    user_id?: boolean
    curso_id?: boolean
  }

  export type usuario_cursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "curso_id", ExtArgs["result"]["usuario_curso"]>
  export type usuario_cursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | cursoDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type usuario_cursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | cursoDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type usuario_cursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | cursoDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $usuario_cursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario_curso"
    objects: {
      curso: Prisma.$cursoPayload<ExtArgs>
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      curso_id: string
    }, ExtArgs["result"]["usuario_curso"]>
    composites: {}
  }

  type usuario_cursoGetPayload<S extends boolean | null | undefined | usuario_cursoDefaultArgs> = $Result.GetResult<Prisma.$usuario_cursoPayload, S>

  type usuario_cursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuario_cursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Usuario_cursoCountAggregateInputType | true
    }

  export interface usuario_cursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario_curso'], meta: { name: 'usuario_curso' } }
    /**
     * Find zero or one Usuario_curso that matches the filter.
     * @param {usuario_cursoFindUniqueArgs} args - Arguments to find a Usuario_curso
     * @example
     * // Get one Usuario_curso
     * const usuario_curso = await prisma.usuario_curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuario_cursoFindUniqueArgs>(args: SelectSubset<T, usuario_cursoFindUniqueArgs<ExtArgs>>): Prisma__usuario_cursoClient<$Result.GetResult<Prisma.$usuario_cursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario_curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuario_cursoFindUniqueOrThrowArgs} args - Arguments to find a Usuario_curso
     * @example
     * // Get one Usuario_curso
     * const usuario_curso = await prisma.usuario_curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuario_cursoFindUniqueOrThrowArgs>(args: SelectSubset<T, usuario_cursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuario_cursoClient<$Result.GetResult<Prisma.$usuario_cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_cursoFindFirstArgs} args - Arguments to find a Usuario_curso
     * @example
     * // Get one Usuario_curso
     * const usuario_curso = await prisma.usuario_curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuario_cursoFindFirstArgs>(args?: SelectSubset<T, usuario_cursoFindFirstArgs<ExtArgs>>): Prisma__usuario_cursoClient<$Result.GetResult<Prisma.$usuario_cursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_cursoFindFirstOrThrowArgs} args - Arguments to find a Usuario_curso
     * @example
     * // Get one Usuario_curso
     * const usuario_curso = await prisma.usuario_curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuario_cursoFindFirstOrThrowArgs>(args?: SelectSubset<T, usuario_cursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuario_cursoClient<$Result.GetResult<Prisma.$usuario_cursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuario_cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_cursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuario_cursos
     * const usuario_cursos = await prisma.usuario_curso.findMany()
     * 
     * // Get first 10 Usuario_cursos
     * const usuario_cursos = await prisma.usuario_curso.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usuario_cursoWithUser_idOnly = await prisma.usuario_curso.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usuario_cursoFindManyArgs>(args?: SelectSubset<T, usuario_cursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario_curso.
     * @param {usuario_cursoCreateArgs} args - Arguments to create a Usuario_curso.
     * @example
     * // Create one Usuario_curso
     * const Usuario_curso = await prisma.usuario_curso.create({
     *   data: {
     *     // ... data to create a Usuario_curso
     *   }
     * })
     * 
     */
    create<T extends usuario_cursoCreateArgs>(args: SelectSubset<T, usuario_cursoCreateArgs<ExtArgs>>): Prisma__usuario_cursoClient<$Result.GetResult<Prisma.$usuario_cursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuario_cursos.
     * @param {usuario_cursoCreateManyArgs} args - Arguments to create many Usuario_cursos.
     * @example
     * // Create many Usuario_cursos
     * const usuario_curso = await prisma.usuario_curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuario_cursoCreateManyArgs>(args?: SelectSubset<T, usuario_cursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuario_cursos and returns the data saved in the database.
     * @param {usuario_cursoCreateManyAndReturnArgs} args - Arguments to create many Usuario_cursos.
     * @example
     * // Create many Usuario_cursos
     * const usuario_curso = await prisma.usuario_curso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuario_cursos and only return the `user_id`
     * const usuario_cursoWithUser_idOnly = await prisma.usuario_curso.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuario_cursoCreateManyAndReturnArgs>(args?: SelectSubset<T, usuario_cursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_cursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario_curso.
     * @param {usuario_cursoDeleteArgs} args - Arguments to delete one Usuario_curso.
     * @example
     * // Delete one Usuario_curso
     * const Usuario_curso = await prisma.usuario_curso.delete({
     *   where: {
     *     // ... filter to delete one Usuario_curso
     *   }
     * })
     * 
     */
    delete<T extends usuario_cursoDeleteArgs>(args: SelectSubset<T, usuario_cursoDeleteArgs<ExtArgs>>): Prisma__usuario_cursoClient<$Result.GetResult<Prisma.$usuario_cursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario_curso.
     * @param {usuario_cursoUpdateArgs} args - Arguments to update one Usuario_curso.
     * @example
     * // Update one Usuario_curso
     * const usuario_curso = await prisma.usuario_curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuario_cursoUpdateArgs>(args: SelectSubset<T, usuario_cursoUpdateArgs<ExtArgs>>): Prisma__usuario_cursoClient<$Result.GetResult<Prisma.$usuario_cursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuario_cursos.
     * @param {usuario_cursoDeleteManyArgs} args - Arguments to filter Usuario_cursos to delete.
     * @example
     * // Delete a few Usuario_cursos
     * const { count } = await prisma.usuario_curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuario_cursoDeleteManyArgs>(args?: SelectSubset<T, usuario_cursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_cursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuario_cursos
     * const usuario_curso = await prisma.usuario_curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuario_cursoUpdateManyArgs>(args: SelectSubset<T, usuario_cursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_cursos and returns the data updated in the database.
     * @param {usuario_cursoUpdateManyAndReturnArgs} args - Arguments to update many Usuario_cursos.
     * @example
     * // Update many Usuario_cursos
     * const usuario_curso = await prisma.usuario_curso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuario_cursos and only return the `user_id`
     * const usuario_cursoWithUser_idOnly = await prisma.usuario_curso.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuario_cursoUpdateManyAndReturnArgs>(args: SelectSubset<T, usuario_cursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_cursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario_curso.
     * @param {usuario_cursoUpsertArgs} args - Arguments to update or create a Usuario_curso.
     * @example
     * // Update or create a Usuario_curso
     * const usuario_curso = await prisma.usuario_curso.upsert({
     *   create: {
     *     // ... data to create a Usuario_curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario_curso we want to update
     *   }
     * })
     */
    upsert<T extends usuario_cursoUpsertArgs>(args: SelectSubset<T, usuario_cursoUpsertArgs<ExtArgs>>): Prisma__usuario_cursoClient<$Result.GetResult<Prisma.$usuario_cursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuario_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_cursoCountArgs} args - Arguments to filter Usuario_cursos to count.
     * @example
     * // Count the number of Usuario_cursos
     * const count = await prisma.usuario_curso.count({
     *   where: {
     *     // ... the filter for the Usuario_cursos we want to count
     *   }
     * })
    **/
    count<T extends usuario_cursoCountArgs>(
      args?: Subset<T, usuario_cursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuario_cursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario_curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_cursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Usuario_cursoAggregateArgs>(args: Subset<T, Usuario_cursoAggregateArgs>): Prisma.PrismaPromise<GetUsuario_cursoAggregateType<T>>

    /**
     * Group by Usuario_curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_cursoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuario_cursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuario_cursoGroupByArgs['orderBy'] }
        : { orderBy?: usuario_cursoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuario_cursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuario_cursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario_curso model
   */
  readonly fields: usuario_cursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario_curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuario_cursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends cursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cursoDefaultArgs<ExtArgs>>): Prisma__cursoClient<$Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario_curso model
   */
  interface usuario_cursoFieldRefs {
    readonly user_id: FieldRef<"usuario_curso", 'Int'>
    readonly curso_id: FieldRef<"usuario_curso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuario_curso findUnique
   */
  export type usuario_cursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_curso
     */
    select?: usuario_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_curso
     */
    omit?: usuario_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_cursoInclude<ExtArgs> | null
    /**
     * Filter, which usuario_curso to fetch.
     */
    where: usuario_cursoWhereUniqueInput
  }

  /**
   * usuario_curso findUniqueOrThrow
   */
  export type usuario_cursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_curso
     */
    select?: usuario_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_curso
     */
    omit?: usuario_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_cursoInclude<ExtArgs> | null
    /**
     * Filter, which usuario_curso to fetch.
     */
    where: usuario_cursoWhereUniqueInput
  }

  /**
   * usuario_curso findFirst
   */
  export type usuario_cursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_curso
     */
    select?: usuario_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_curso
     */
    omit?: usuario_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_cursoInclude<ExtArgs> | null
    /**
     * Filter, which usuario_curso to fetch.
     */
    where?: usuario_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_cursos to fetch.
     */
    orderBy?: usuario_cursoOrderByWithRelationInput | usuario_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_cursos.
     */
    cursor?: usuario_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_cursos.
     */
    distinct?: Usuario_cursoScalarFieldEnum | Usuario_cursoScalarFieldEnum[]
  }

  /**
   * usuario_curso findFirstOrThrow
   */
  export type usuario_cursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_curso
     */
    select?: usuario_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_curso
     */
    omit?: usuario_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_cursoInclude<ExtArgs> | null
    /**
     * Filter, which usuario_curso to fetch.
     */
    where?: usuario_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_cursos to fetch.
     */
    orderBy?: usuario_cursoOrderByWithRelationInput | usuario_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_cursos.
     */
    cursor?: usuario_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_cursos.
     */
    distinct?: Usuario_cursoScalarFieldEnum | Usuario_cursoScalarFieldEnum[]
  }

  /**
   * usuario_curso findMany
   */
  export type usuario_cursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_curso
     */
    select?: usuario_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_curso
     */
    omit?: usuario_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_cursoInclude<ExtArgs> | null
    /**
     * Filter, which usuario_cursos to fetch.
     */
    where?: usuario_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_cursos to fetch.
     */
    orderBy?: usuario_cursoOrderByWithRelationInput | usuario_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuario_cursos.
     */
    cursor?: usuario_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_cursos.
     */
    skip?: number
    distinct?: Usuario_cursoScalarFieldEnum | Usuario_cursoScalarFieldEnum[]
  }

  /**
   * usuario_curso create
   */
  export type usuario_cursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_curso
     */
    select?: usuario_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_curso
     */
    omit?: usuario_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_cursoInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario_curso.
     */
    data: XOR<usuario_cursoCreateInput, usuario_cursoUncheckedCreateInput>
  }

  /**
   * usuario_curso createMany
   */
  export type usuario_cursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuario_cursos.
     */
    data: usuario_cursoCreateManyInput | usuario_cursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario_curso createManyAndReturn
   */
  export type usuario_cursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_curso
     */
    select?: usuario_cursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_curso
     */
    omit?: usuario_cursoOmit<ExtArgs> | null
    /**
     * The data used to create many usuario_cursos.
     */
    data: usuario_cursoCreateManyInput | usuario_cursoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_cursoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario_curso update
   */
  export type usuario_cursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_curso
     */
    select?: usuario_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_curso
     */
    omit?: usuario_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_cursoInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario_curso.
     */
    data: XOR<usuario_cursoUpdateInput, usuario_cursoUncheckedUpdateInput>
    /**
     * Choose, which usuario_curso to update.
     */
    where: usuario_cursoWhereUniqueInput
  }

  /**
   * usuario_curso updateMany
   */
  export type usuario_cursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuario_cursos.
     */
    data: XOR<usuario_cursoUpdateManyMutationInput, usuario_cursoUncheckedUpdateManyInput>
    /**
     * Filter which usuario_cursos to update
     */
    where?: usuario_cursoWhereInput
    /**
     * Limit how many usuario_cursos to update.
     */
    limit?: number
  }

  /**
   * usuario_curso updateManyAndReturn
   */
  export type usuario_cursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_curso
     */
    select?: usuario_cursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_curso
     */
    omit?: usuario_cursoOmit<ExtArgs> | null
    /**
     * The data used to update usuario_cursos.
     */
    data: XOR<usuario_cursoUpdateManyMutationInput, usuario_cursoUncheckedUpdateManyInput>
    /**
     * Filter which usuario_cursos to update
     */
    where?: usuario_cursoWhereInput
    /**
     * Limit how many usuario_cursos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_cursoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario_curso upsert
   */
  export type usuario_cursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_curso
     */
    select?: usuario_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_curso
     */
    omit?: usuario_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_cursoInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario_curso to update in case it exists.
     */
    where: usuario_cursoWhereUniqueInput
    /**
     * In case the usuario_curso found by the `where` argument doesn't exist, create a new usuario_curso with this data.
     */
    create: XOR<usuario_cursoCreateInput, usuario_cursoUncheckedCreateInput>
    /**
     * In case the usuario_curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuario_cursoUpdateInput, usuario_cursoUncheckedUpdateInput>
  }

  /**
   * usuario_curso delete
   */
  export type usuario_cursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_curso
     */
    select?: usuario_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_curso
     */
    omit?: usuario_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_cursoInclude<ExtArgs> | null
    /**
     * Filter which usuario_curso to delete.
     */
    where: usuario_cursoWhereUniqueInput
  }

  /**
   * usuario_curso deleteMany
   */
  export type usuario_cursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_cursos to delete
     */
    where?: usuario_cursoWhereInput
    /**
     * Limit how many usuario_cursos to delete.
     */
    limit?: number
  }

  /**
   * usuario_curso without action
   */
  export type usuario_cursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_curso
     */
    select?: usuario_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_curso
     */
    omit?: usuario_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_cursoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CalificacionScalarFieldEnum: {
    calificacion_id: 'calificacion_id',
    user_id: 'user_id',
    curso_id: 'curso_id',
    calificacion: 'calificacion',
    fecha_calificacion: 'fecha_calificacion'
  };

  export type CalificacionScalarFieldEnum = (typeof CalificacionScalarFieldEnum)[keyof typeof CalificacionScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    curso_id: 'curso_id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    calificacion_promedio: 'calificacion_promedio',
    materiales: 'materiales',
    imagen: 'imagen',
    precio: 'precio',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion',
    video_intro: 'video_intro',
    duracion: 'duracion'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const LeccionScalarFieldEnum: {
    leccion_id: 'leccion_id',
    unidad_id: 'unidad_id',
    nombre: 'nombre',
    video_url: 'video_url',
    material_descarga: 'material_descarga',
    leccion: 'leccion'
  };

  export type LeccionScalarFieldEnum = (typeof LeccionScalarFieldEnum)[keyof typeof LeccionScalarFieldEnum]


  export const ProgresoScalarFieldEnum: {
    user_id: 'user_id',
    leccion_id: 'leccion_id',
    completado: 'completado',
    progreso_id: 'progreso_id'
  };

  export type ProgresoScalarFieldEnum = (typeof ProgresoScalarFieldEnum)[keyof typeof ProgresoScalarFieldEnum]


  export const UnidadScalarFieldEnum: {
    unidad_id: 'unidad_id',
    curso_id: 'curso_id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    unidad: 'unidad'
  };

  export type UnidadScalarFieldEnum = (typeof UnidadScalarFieldEnum)[keyof typeof UnidadScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    user_id: 'user_id',
    nombres: 'nombres',
    apellidos: 'apellidos',
    dni: 'dni',
    celular: 'celular',
    correo: 'correo',
    usuario: 'usuario',
    contrasenia: 'contrasenia',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion',
    rol: 'rol'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const Usuario_cursoScalarFieldEnum: {
    user_id: 'user_id',
    curso_id: 'curso_id'
  };

  export type Usuario_cursoScalarFieldEnum = (typeof Usuario_cursoScalarFieldEnum)[keyof typeof Usuario_cursoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type calificacionWhereInput = {
    AND?: calificacionWhereInput | calificacionWhereInput[]
    OR?: calificacionWhereInput[]
    NOT?: calificacionWhereInput | calificacionWhereInput[]
    calificacion_id?: IntFilter<"calificacion"> | number
    user_id?: IntNullableFilter<"calificacion"> | number | null
    curso_id?: StringNullableFilter<"calificacion"> | string | null
    calificacion?: DecimalNullableFilter<"calificacion"> | Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: DateTimeNullableFilter<"calificacion"> | Date | string | null
    curso?: XOR<CursoNullableScalarRelationFilter, cursoWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }

  export type calificacionOrderByWithRelationInput = {
    calificacion_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    curso_id?: SortOrderInput | SortOrder
    calificacion?: SortOrderInput | SortOrder
    fecha_calificacion?: SortOrderInput | SortOrder
    curso?: cursoOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type calificacionWhereUniqueInput = Prisma.AtLeast<{
    calificacion_id?: number
    user_id_curso_id?: calificacionUser_idCurso_idCompoundUniqueInput
    AND?: calificacionWhereInput | calificacionWhereInput[]
    OR?: calificacionWhereInput[]
    NOT?: calificacionWhereInput | calificacionWhereInput[]
    user_id?: IntNullableFilter<"calificacion"> | number | null
    curso_id?: StringNullableFilter<"calificacion"> | string | null
    calificacion?: DecimalNullableFilter<"calificacion"> | Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: DateTimeNullableFilter<"calificacion"> | Date | string | null
    curso?: XOR<CursoNullableScalarRelationFilter, cursoWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }, "calificacion_id" | "user_id_curso_id">

  export type calificacionOrderByWithAggregationInput = {
    calificacion_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    curso_id?: SortOrderInput | SortOrder
    calificacion?: SortOrderInput | SortOrder
    fecha_calificacion?: SortOrderInput | SortOrder
    _count?: calificacionCountOrderByAggregateInput
    _avg?: calificacionAvgOrderByAggregateInput
    _max?: calificacionMaxOrderByAggregateInput
    _min?: calificacionMinOrderByAggregateInput
    _sum?: calificacionSumOrderByAggregateInput
  }

  export type calificacionScalarWhereWithAggregatesInput = {
    AND?: calificacionScalarWhereWithAggregatesInput | calificacionScalarWhereWithAggregatesInput[]
    OR?: calificacionScalarWhereWithAggregatesInput[]
    NOT?: calificacionScalarWhereWithAggregatesInput | calificacionScalarWhereWithAggregatesInput[]
    calificacion_id?: IntWithAggregatesFilter<"calificacion"> | number
    user_id?: IntNullableWithAggregatesFilter<"calificacion"> | number | null
    curso_id?: StringNullableWithAggregatesFilter<"calificacion"> | string | null
    calificacion?: DecimalNullableWithAggregatesFilter<"calificacion"> | Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: DateTimeNullableWithAggregatesFilter<"calificacion"> | Date | string | null
  }

  export type cursoWhereInput = {
    AND?: cursoWhereInput | cursoWhereInput[]
    OR?: cursoWhereInput[]
    NOT?: cursoWhereInput | cursoWhereInput[]
    curso_id?: StringFilter<"curso"> | string
    nombre?: StringFilter<"curso"> | string
    descripcion?: StringNullableFilter<"curso"> | string | null
    calificacion_promedio?: DecimalNullableFilter<"curso"> | Decimal | DecimalJsLike | number | string | null
    materiales?: StringNullableFilter<"curso"> | string | null
    imagen?: StringNullableFilter<"curso"> | string | null
    precio?: DecimalNullableFilter<"curso"> | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeNullableFilter<"curso"> | Date | string | null
    fecha_actualizacion?: DateTimeNullableFilter<"curso"> | Date | string | null
    video_intro?: StringNullableFilter<"curso"> | string | null
    duracion?: IntNullableFilter<"curso"> | number | null
    calificacion?: CalificacionListRelationFilter
    unidad?: UnidadListRelationFilter
    usuario_curso?: Usuario_cursoListRelationFilter
  }

  export type cursoOrderByWithRelationInput = {
    curso_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    calificacion_promedio?: SortOrderInput | SortOrder
    materiales?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    precio?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    video_intro?: SortOrderInput | SortOrder
    duracion?: SortOrderInput | SortOrder
    calificacion?: calificacionOrderByRelationAggregateInput
    unidad?: unidadOrderByRelationAggregateInput
    usuario_curso?: usuario_cursoOrderByRelationAggregateInput
  }

  export type cursoWhereUniqueInput = Prisma.AtLeast<{
    curso_id?: string
    AND?: cursoWhereInput | cursoWhereInput[]
    OR?: cursoWhereInput[]
    NOT?: cursoWhereInput | cursoWhereInput[]
    nombre?: StringFilter<"curso"> | string
    descripcion?: StringNullableFilter<"curso"> | string | null
    calificacion_promedio?: DecimalNullableFilter<"curso"> | Decimal | DecimalJsLike | number | string | null
    materiales?: StringNullableFilter<"curso"> | string | null
    imagen?: StringNullableFilter<"curso"> | string | null
    precio?: DecimalNullableFilter<"curso"> | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeNullableFilter<"curso"> | Date | string | null
    fecha_actualizacion?: DateTimeNullableFilter<"curso"> | Date | string | null
    video_intro?: StringNullableFilter<"curso"> | string | null
    duracion?: IntNullableFilter<"curso"> | number | null
    calificacion?: CalificacionListRelationFilter
    unidad?: UnidadListRelationFilter
    usuario_curso?: Usuario_cursoListRelationFilter
  }, "curso_id">

  export type cursoOrderByWithAggregationInput = {
    curso_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    calificacion_promedio?: SortOrderInput | SortOrder
    materiales?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    precio?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    video_intro?: SortOrderInput | SortOrder
    duracion?: SortOrderInput | SortOrder
    _count?: cursoCountOrderByAggregateInput
    _avg?: cursoAvgOrderByAggregateInput
    _max?: cursoMaxOrderByAggregateInput
    _min?: cursoMinOrderByAggregateInput
    _sum?: cursoSumOrderByAggregateInput
  }

  export type cursoScalarWhereWithAggregatesInput = {
    AND?: cursoScalarWhereWithAggregatesInput | cursoScalarWhereWithAggregatesInput[]
    OR?: cursoScalarWhereWithAggregatesInput[]
    NOT?: cursoScalarWhereWithAggregatesInput | cursoScalarWhereWithAggregatesInput[]
    curso_id?: StringWithAggregatesFilter<"curso"> | string
    nombre?: StringWithAggregatesFilter<"curso"> | string
    descripcion?: StringNullableWithAggregatesFilter<"curso"> | string | null
    calificacion_promedio?: DecimalNullableWithAggregatesFilter<"curso"> | Decimal | DecimalJsLike | number | string | null
    materiales?: StringNullableWithAggregatesFilter<"curso"> | string | null
    imagen?: StringNullableWithAggregatesFilter<"curso"> | string | null
    precio?: DecimalNullableWithAggregatesFilter<"curso"> | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"curso"> | Date | string | null
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"curso"> | Date | string | null
    video_intro?: StringNullableWithAggregatesFilter<"curso"> | string | null
    duracion?: IntNullableWithAggregatesFilter<"curso"> | number | null
  }

  export type leccionWhereInput = {
    AND?: leccionWhereInput | leccionWhereInput[]
    OR?: leccionWhereInput[]
    NOT?: leccionWhereInput | leccionWhereInput[]
    leccion_id?: IntFilter<"leccion"> | number
    unidad_id?: IntNullableFilter<"leccion"> | number | null
    nombre?: StringFilter<"leccion"> | string
    video_url?: StringNullableFilter<"leccion"> | string | null
    material_descarga?: StringNullableFilter<"leccion"> | string | null
    leccion?: StringNullableFilter<"leccion"> | string | null
    unidad?: XOR<UnidadNullableScalarRelationFilter, unidadWhereInput> | null
    progreso?: ProgresoListRelationFilter
  }

  export type leccionOrderByWithRelationInput = {
    leccion_id?: SortOrder
    unidad_id?: SortOrderInput | SortOrder
    nombre?: SortOrder
    video_url?: SortOrderInput | SortOrder
    material_descarga?: SortOrderInput | SortOrder
    leccion?: SortOrderInput | SortOrder
    unidad?: unidadOrderByWithRelationInput
    progreso?: progresoOrderByRelationAggregateInput
  }

  export type leccionWhereUniqueInput = Prisma.AtLeast<{
    leccion_id?: number
    AND?: leccionWhereInput | leccionWhereInput[]
    OR?: leccionWhereInput[]
    NOT?: leccionWhereInput | leccionWhereInput[]
    unidad_id?: IntNullableFilter<"leccion"> | number | null
    nombre?: StringFilter<"leccion"> | string
    video_url?: StringNullableFilter<"leccion"> | string | null
    material_descarga?: StringNullableFilter<"leccion"> | string | null
    leccion?: StringNullableFilter<"leccion"> | string | null
    unidad?: XOR<UnidadNullableScalarRelationFilter, unidadWhereInput> | null
    progreso?: ProgresoListRelationFilter
  }, "leccion_id">

  export type leccionOrderByWithAggregationInput = {
    leccion_id?: SortOrder
    unidad_id?: SortOrderInput | SortOrder
    nombre?: SortOrder
    video_url?: SortOrderInput | SortOrder
    material_descarga?: SortOrderInput | SortOrder
    leccion?: SortOrderInput | SortOrder
    _count?: leccionCountOrderByAggregateInput
    _avg?: leccionAvgOrderByAggregateInput
    _max?: leccionMaxOrderByAggregateInput
    _min?: leccionMinOrderByAggregateInput
    _sum?: leccionSumOrderByAggregateInput
  }

  export type leccionScalarWhereWithAggregatesInput = {
    AND?: leccionScalarWhereWithAggregatesInput | leccionScalarWhereWithAggregatesInput[]
    OR?: leccionScalarWhereWithAggregatesInput[]
    NOT?: leccionScalarWhereWithAggregatesInput | leccionScalarWhereWithAggregatesInput[]
    leccion_id?: IntWithAggregatesFilter<"leccion"> | number
    unidad_id?: IntNullableWithAggregatesFilter<"leccion"> | number | null
    nombre?: StringWithAggregatesFilter<"leccion"> | string
    video_url?: StringNullableWithAggregatesFilter<"leccion"> | string | null
    material_descarga?: StringNullableWithAggregatesFilter<"leccion"> | string | null
    leccion?: StringNullableWithAggregatesFilter<"leccion"> | string | null
  }

  export type progresoWhereInput = {
    AND?: progresoWhereInput | progresoWhereInput[]
    OR?: progresoWhereInput[]
    NOT?: progresoWhereInput | progresoWhereInput[]
    user_id?: IntNullableFilter<"progreso"> | number | null
    leccion_id?: IntNullableFilter<"progreso"> | number | null
    completado?: BoolNullableFilter<"progreso"> | boolean | null
    progreso_id?: IntFilter<"progreso"> | number
    leccion?: XOR<LeccionNullableScalarRelationFilter, leccionWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }

  export type progresoOrderByWithRelationInput = {
    user_id?: SortOrderInput | SortOrder
    leccion_id?: SortOrderInput | SortOrder
    completado?: SortOrderInput | SortOrder
    progreso_id?: SortOrder
    leccion?: leccionOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type progresoWhereUniqueInput = Prisma.AtLeast<{
    progreso_id?: number
    user_id_leccion_id?: progresoUser_idLeccion_idCompoundUniqueInput
    AND?: progresoWhereInput | progresoWhereInput[]
    OR?: progresoWhereInput[]
    NOT?: progresoWhereInput | progresoWhereInput[]
    user_id?: IntNullableFilter<"progreso"> | number | null
    leccion_id?: IntNullableFilter<"progreso"> | number | null
    completado?: BoolNullableFilter<"progreso"> | boolean | null
    leccion?: XOR<LeccionNullableScalarRelationFilter, leccionWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }, "progreso_id" | "user_id_leccion_id">

  export type progresoOrderByWithAggregationInput = {
    user_id?: SortOrderInput | SortOrder
    leccion_id?: SortOrderInput | SortOrder
    completado?: SortOrderInput | SortOrder
    progreso_id?: SortOrder
    _count?: progresoCountOrderByAggregateInput
    _avg?: progresoAvgOrderByAggregateInput
    _max?: progresoMaxOrderByAggregateInput
    _min?: progresoMinOrderByAggregateInput
    _sum?: progresoSumOrderByAggregateInput
  }

  export type progresoScalarWhereWithAggregatesInput = {
    AND?: progresoScalarWhereWithAggregatesInput | progresoScalarWhereWithAggregatesInput[]
    OR?: progresoScalarWhereWithAggregatesInput[]
    NOT?: progresoScalarWhereWithAggregatesInput | progresoScalarWhereWithAggregatesInput[]
    user_id?: IntNullableWithAggregatesFilter<"progreso"> | number | null
    leccion_id?: IntNullableWithAggregatesFilter<"progreso"> | number | null
    completado?: BoolNullableWithAggregatesFilter<"progreso"> | boolean | null
    progreso_id?: IntWithAggregatesFilter<"progreso"> | number
  }

  export type unidadWhereInput = {
    AND?: unidadWhereInput | unidadWhereInput[]
    OR?: unidadWhereInput[]
    NOT?: unidadWhereInput | unidadWhereInput[]
    unidad_id?: IntFilter<"unidad"> | number
    curso_id?: StringNullableFilter<"unidad"> | string | null
    nombre?: StringFilter<"unidad"> | string
    descripcion?: StringNullableFilter<"unidad"> | string | null
    unidad?: StringNullableFilter<"unidad"> | string | null
    leccion?: LeccionListRelationFilter
    curso?: XOR<CursoNullableScalarRelationFilter, cursoWhereInput> | null
  }

  export type unidadOrderByWithRelationInput = {
    unidad_id?: SortOrder
    curso_id?: SortOrderInput | SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    unidad?: SortOrderInput | SortOrder
    leccion?: leccionOrderByRelationAggregateInput
    curso?: cursoOrderByWithRelationInput
  }

  export type unidadWhereUniqueInput = Prisma.AtLeast<{
    unidad_id?: number
    AND?: unidadWhereInput | unidadWhereInput[]
    OR?: unidadWhereInput[]
    NOT?: unidadWhereInput | unidadWhereInput[]
    curso_id?: StringNullableFilter<"unidad"> | string | null
    nombre?: StringFilter<"unidad"> | string
    descripcion?: StringNullableFilter<"unidad"> | string | null
    unidad?: StringNullableFilter<"unidad"> | string | null
    leccion?: LeccionListRelationFilter
    curso?: XOR<CursoNullableScalarRelationFilter, cursoWhereInput> | null
  }, "unidad_id">

  export type unidadOrderByWithAggregationInput = {
    unidad_id?: SortOrder
    curso_id?: SortOrderInput | SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    unidad?: SortOrderInput | SortOrder
    _count?: unidadCountOrderByAggregateInput
    _avg?: unidadAvgOrderByAggregateInput
    _max?: unidadMaxOrderByAggregateInput
    _min?: unidadMinOrderByAggregateInput
    _sum?: unidadSumOrderByAggregateInput
  }

  export type unidadScalarWhereWithAggregatesInput = {
    AND?: unidadScalarWhereWithAggregatesInput | unidadScalarWhereWithAggregatesInput[]
    OR?: unidadScalarWhereWithAggregatesInput[]
    NOT?: unidadScalarWhereWithAggregatesInput | unidadScalarWhereWithAggregatesInput[]
    unidad_id?: IntWithAggregatesFilter<"unidad"> | number
    curso_id?: StringNullableWithAggregatesFilter<"unidad"> | string | null
    nombre?: StringWithAggregatesFilter<"unidad"> | string
    descripcion?: StringNullableWithAggregatesFilter<"unidad"> | string | null
    unidad?: StringNullableWithAggregatesFilter<"unidad"> | string | null
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    user_id?: IntFilter<"usuario"> | number
    nombres?: StringNullableFilter<"usuario"> | string | null
    apellidos?: StringNullableFilter<"usuario"> | string | null
    dni?: StringNullableFilter<"usuario"> | string | null
    celular?: StringNullableFilter<"usuario"> | string | null
    correo?: StringFilter<"usuario"> | string
    usuario?: StringNullableFilter<"usuario"> | string | null
    contrasenia?: StringNullableFilter<"usuario"> | string | null
    fecha_creacion?: DateTimeNullableFilter<"usuario"> | Date | string | null
    fecha_actualizacion?: DateTimeNullableFilter<"usuario"> | Date | string | null
    rol?: StringNullableFilter<"usuario"> | string | null
    calificacion?: CalificacionListRelationFilter
    progreso?: ProgresoListRelationFilter
    usuario_curso?: Usuario_cursoListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    user_id?: SortOrder
    nombres?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    celular?: SortOrderInput | SortOrder
    correo?: SortOrder
    usuario?: SortOrderInput | SortOrder
    contrasenia?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    rol?: SortOrderInput | SortOrder
    calificacion?: calificacionOrderByRelationAggregateInput
    progreso?: progresoOrderByRelationAggregateInput
    usuario_curso?: usuario_cursoOrderByRelationAggregateInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    dni?: string
    correo?: string
    usuario?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nombres?: StringNullableFilter<"usuario"> | string | null
    apellidos?: StringNullableFilter<"usuario"> | string | null
    celular?: StringNullableFilter<"usuario"> | string | null
    contrasenia?: StringNullableFilter<"usuario"> | string | null
    fecha_creacion?: DateTimeNullableFilter<"usuario"> | Date | string | null
    fecha_actualizacion?: DateTimeNullableFilter<"usuario"> | Date | string | null
    rol?: StringNullableFilter<"usuario"> | string | null
    calificacion?: CalificacionListRelationFilter
    progreso?: ProgresoListRelationFilter
    usuario_curso?: Usuario_cursoListRelationFilter
  }, "user_id" | "dni" | "correo" | "usuario">

  export type usuarioOrderByWithAggregationInput = {
    user_id?: SortOrder
    nombres?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    celular?: SortOrderInput | SortOrder
    correo?: SortOrder
    usuario?: SortOrderInput | SortOrder
    contrasenia?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    rol?: SortOrderInput | SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"usuario"> | number
    nombres?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    apellidos?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    dni?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    celular?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    correo?: StringWithAggregatesFilter<"usuario"> | string
    usuario?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    contrasenia?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"usuario"> | Date | string | null
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"usuario"> | Date | string | null
    rol?: StringNullableWithAggregatesFilter<"usuario"> | string | null
  }

  export type usuario_cursoWhereInput = {
    AND?: usuario_cursoWhereInput | usuario_cursoWhereInput[]
    OR?: usuario_cursoWhereInput[]
    NOT?: usuario_cursoWhereInput | usuario_cursoWhereInput[]
    user_id?: IntFilter<"usuario_curso"> | number
    curso_id?: StringFilter<"usuario_curso"> | string
    curso?: XOR<CursoScalarRelationFilter, cursoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type usuario_cursoOrderByWithRelationInput = {
    user_id?: SortOrder
    curso_id?: SortOrder
    curso?: cursoOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type usuario_cursoWhereUniqueInput = Prisma.AtLeast<{
    user_id_curso_id?: usuario_cursoUser_idCurso_idCompoundUniqueInput
    AND?: usuario_cursoWhereInput | usuario_cursoWhereInput[]
    OR?: usuario_cursoWhereInput[]
    NOT?: usuario_cursoWhereInput | usuario_cursoWhereInput[]
    user_id?: IntFilter<"usuario_curso"> | number
    curso_id?: StringFilter<"usuario_curso"> | string
    curso?: XOR<CursoScalarRelationFilter, cursoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "user_id_curso_id">

  export type usuario_cursoOrderByWithAggregationInput = {
    user_id?: SortOrder
    curso_id?: SortOrder
    _count?: usuario_cursoCountOrderByAggregateInput
    _avg?: usuario_cursoAvgOrderByAggregateInput
    _max?: usuario_cursoMaxOrderByAggregateInput
    _min?: usuario_cursoMinOrderByAggregateInput
    _sum?: usuario_cursoSumOrderByAggregateInput
  }

  export type usuario_cursoScalarWhereWithAggregatesInput = {
    AND?: usuario_cursoScalarWhereWithAggregatesInput | usuario_cursoScalarWhereWithAggregatesInput[]
    OR?: usuario_cursoScalarWhereWithAggregatesInput[]
    NOT?: usuario_cursoScalarWhereWithAggregatesInput | usuario_cursoScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"usuario_curso"> | number
    curso_id?: StringWithAggregatesFilter<"usuario_curso"> | string
  }

  export type calificacionCreateInput = {
    calificacion?: Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: Date | string | null
    curso?: cursoCreateNestedOneWithoutCalificacionInput
    usuario?: usuarioCreateNestedOneWithoutCalificacionInput
  }

  export type calificacionUncheckedCreateInput = {
    calificacion_id?: number
    user_id?: number | null
    curso_id?: string | null
    calificacion?: Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: Date | string | null
  }

  export type calificacionUpdateInput = {
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curso?: cursoUpdateOneWithoutCalificacionNestedInput
    usuario?: usuarioUpdateOneWithoutCalificacionNestedInput
  }

  export type calificacionUncheckedUpdateInput = {
    calificacion_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    curso_id?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type calificacionCreateManyInput = {
    calificacion_id?: number
    user_id?: number | null
    curso_id?: string | null
    calificacion?: Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: Date | string | null
  }

  export type calificacionUpdateManyMutationInput = {
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type calificacionUncheckedUpdateManyInput = {
    calificacion_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    curso_id?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cursoCreateInput = {
    curso_id: string
    nombre: string
    descripcion?: string | null
    calificacion_promedio?: Decimal | DecimalJsLike | number | string | null
    materiales?: string | null
    imagen?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    video_intro?: string | null
    duracion?: number | null
    calificacion?: calificacionCreateNestedManyWithoutCursoInput
    unidad?: unidadCreateNestedManyWithoutCursoInput
    usuario_curso?: usuario_cursoCreateNestedManyWithoutCursoInput
  }

  export type cursoUncheckedCreateInput = {
    curso_id: string
    nombre: string
    descripcion?: string | null
    calificacion_promedio?: Decimal | DecimalJsLike | number | string | null
    materiales?: string | null
    imagen?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    video_intro?: string | null
    duracion?: number | null
    calificacion?: calificacionUncheckedCreateNestedManyWithoutCursoInput
    unidad?: unidadUncheckedCreateNestedManyWithoutCursoInput
    usuario_curso?: usuario_cursoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type cursoUpdateInput = {
    curso_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion_promedio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    materiales?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    video_intro?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableIntFieldUpdateOperationsInput | number | null
    calificacion?: calificacionUpdateManyWithoutCursoNestedInput
    unidad?: unidadUpdateManyWithoutCursoNestedInput
    usuario_curso?: usuario_cursoUpdateManyWithoutCursoNestedInput
  }

  export type cursoUncheckedUpdateInput = {
    curso_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion_promedio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    materiales?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    video_intro?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableIntFieldUpdateOperationsInput | number | null
    calificacion?: calificacionUncheckedUpdateManyWithoutCursoNestedInput
    unidad?: unidadUncheckedUpdateManyWithoutCursoNestedInput
    usuario_curso?: usuario_cursoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type cursoCreateManyInput = {
    curso_id: string
    nombre: string
    descripcion?: string | null
    calificacion_promedio?: Decimal | DecimalJsLike | number | string | null
    materiales?: string | null
    imagen?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    video_intro?: string | null
    duracion?: number | null
  }

  export type cursoUpdateManyMutationInput = {
    curso_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion_promedio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    materiales?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    video_intro?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cursoUncheckedUpdateManyInput = {
    curso_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion_promedio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    materiales?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    video_intro?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type leccionCreateInput = {
    nombre: string
    video_url?: string | null
    material_descarga?: string | null
    leccion?: string | null
    unidad?: unidadCreateNestedOneWithoutLeccionInput
    progreso?: progresoCreateNestedManyWithoutLeccionInput
  }

  export type leccionUncheckedCreateInput = {
    leccion_id?: number
    unidad_id?: number | null
    nombre: string
    video_url?: string | null
    material_descarga?: string | null
    leccion?: string | null
    progreso?: progresoUncheckedCreateNestedManyWithoutLeccionInput
  }

  export type leccionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    material_descarga?: NullableStringFieldUpdateOperationsInput | string | null
    leccion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: unidadUpdateOneWithoutLeccionNestedInput
    progreso?: progresoUpdateManyWithoutLeccionNestedInput
  }

  export type leccionUncheckedUpdateInput = {
    leccion_id?: IntFieldUpdateOperationsInput | number
    unidad_id?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    material_descarga?: NullableStringFieldUpdateOperationsInput | string | null
    leccion?: NullableStringFieldUpdateOperationsInput | string | null
    progreso?: progresoUncheckedUpdateManyWithoutLeccionNestedInput
  }

  export type leccionCreateManyInput = {
    leccion_id?: number
    unidad_id?: number | null
    nombre: string
    video_url?: string | null
    material_descarga?: string | null
    leccion?: string | null
  }

  export type leccionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    material_descarga?: NullableStringFieldUpdateOperationsInput | string | null
    leccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type leccionUncheckedUpdateManyInput = {
    leccion_id?: IntFieldUpdateOperationsInput | number
    unidad_id?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    material_descarga?: NullableStringFieldUpdateOperationsInput | string | null
    leccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type progresoCreateInput = {
    completado?: boolean | null
    leccion?: leccionCreateNestedOneWithoutProgresoInput
    usuario?: usuarioCreateNestedOneWithoutProgresoInput
  }

  export type progresoUncheckedCreateInput = {
    user_id?: number | null
    leccion_id?: number | null
    completado?: boolean | null
    progreso_id?: number
  }

  export type progresoUpdateInput = {
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    leccion?: leccionUpdateOneWithoutProgresoNestedInput
    usuario?: usuarioUpdateOneWithoutProgresoNestedInput
  }

  export type progresoUncheckedUpdateInput = {
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    leccion_id?: NullableIntFieldUpdateOperationsInput | number | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    progreso_id?: IntFieldUpdateOperationsInput | number
  }

  export type progresoCreateManyInput = {
    user_id?: number | null
    leccion_id?: number | null
    completado?: boolean | null
    progreso_id?: number
  }

  export type progresoUpdateManyMutationInput = {
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type progresoUncheckedUpdateManyInput = {
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    leccion_id?: NullableIntFieldUpdateOperationsInput | number | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    progreso_id?: IntFieldUpdateOperationsInput | number
  }

  export type unidadCreateInput = {
    nombre: string
    descripcion?: string | null
    unidad?: string | null
    leccion?: leccionCreateNestedManyWithoutUnidadInput
    curso?: cursoCreateNestedOneWithoutUnidadInput
  }

  export type unidadUncheckedCreateInput = {
    unidad_id?: number
    curso_id?: string | null
    nombre: string
    descripcion?: string | null
    unidad?: string | null
    leccion?: leccionUncheckedCreateNestedManyWithoutUnidadInput
  }

  export type unidadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: NullableStringFieldUpdateOperationsInput | string | null
    leccion?: leccionUpdateManyWithoutUnidadNestedInput
    curso?: cursoUpdateOneWithoutUnidadNestedInput
  }

  export type unidadUncheckedUpdateInput = {
    unidad_id?: IntFieldUpdateOperationsInput | number
    curso_id?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: NullableStringFieldUpdateOperationsInput | string | null
    leccion?: leccionUncheckedUpdateManyWithoutUnidadNestedInput
  }

  export type unidadCreateManyInput = {
    unidad_id?: number
    curso_id?: string | null
    nombre: string
    descripcion?: string | null
    unidad?: string | null
  }

  export type unidadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type unidadUncheckedUpdateManyInput = {
    unidad_id?: IntFieldUpdateOperationsInput | number
    curso_id?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarioCreateInput = {
    nombres?: string | null
    apellidos?: string | null
    dni?: string | null
    celular?: string | null
    correo: string
    usuario?: string | null
    contrasenia?: string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    rol?: string | null
    calificacion?: calificacionCreateNestedManyWithoutUsuarioInput
    progreso?: progresoCreateNestedManyWithoutUsuarioInput
    usuario_curso?: usuario_cursoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    user_id?: number
    nombres?: string | null
    apellidos?: string | null
    dni?: string | null
    celular?: string | null
    correo: string
    usuario?: string | null
    contrasenia?: string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    rol?: string | null
    calificacion?: calificacionUncheckedCreateNestedManyWithoutUsuarioInput
    progreso?: progresoUncheckedCreateNestedManyWithoutUsuarioInput
    usuario_curso?: usuario_cursoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: calificacionUpdateManyWithoutUsuarioNestedInput
    progreso?: progresoUpdateManyWithoutUsuarioNestedInput
    usuario_curso?: usuario_cursoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: calificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    progreso?: progresoUncheckedUpdateManyWithoutUsuarioNestedInput
    usuario_curso?: usuario_cursoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    user_id?: number
    nombres?: string | null
    apellidos?: string | null
    dni?: string | null
    celular?: string | null
    correo: string
    usuario?: string | null
    contrasenia?: string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    rol?: string | null
  }

  export type usuarioUpdateManyMutationInput = {
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarioUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuario_cursoCreateInput = {
    curso: cursoCreateNestedOneWithoutUsuario_cursoInput
    usuario: usuarioCreateNestedOneWithoutUsuario_cursoInput
  }

  export type usuario_cursoUncheckedCreateInput = {
    user_id: number
    curso_id: string
  }

  export type usuario_cursoUpdateInput = {
    curso?: cursoUpdateOneRequiredWithoutUsuario_cursoNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutUsuario_cursoNestedInput
  }

  export type usuario_cursoUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    curso_id?: StringFieldUpdateOperationsInput | string
  }

  export type usuario_cursoCreateManyInput = {
    user_id: number
    curso_id: string
  }

  export type usuario_cursoUpdateManyMutationInput = {

  }

  export type usuario_cursoUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    curso_id?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CursoNullableScalarRelationFilter = {
    is?: cursoWhereInput | null
    isNot?: cursoWhereInput | null
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: usuarioWhereInput | null
    isNot?: usuarioWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type calificacionUser_idCurso_idCompoundUniqueInput = {
    user_id: number
    curso_id: string
  }

  export type calificacionCountOrderByAggregateInput = {
    calificacion_id?: SortOrder
    user_id?: SortOrder
    curso_id?: SortOrder
    calificacion?: SortOrder
    fecha_calificacion?: SortOrder
  }

  export type calificacionAvgOrderByAggregateInput = {
    calificacion_id?: SortOrder
    user_id?: SortOrder
    calificacion?: SortOrder
  }

  export type calificacionMaxOrderByAggregateInput = {
    calificacion_id?: SortOrder
    user_id?: SortOrder
    curso_id?: SortOrder
    calificacion?: SortOrder
    fecha_calificacion?: SortOrder
  }

  export type calificacionMinOrderByAggregateInput = {
    calificacion_id?: SortOrder
    user_id?: SortOrder
    curso_id?: SortOrder
    calificacion?: SortOrder
    fecha_calificacion?: SortOrder
  }

  export type calificacionSumOrderByAggregateInput = {
    calificacion_id?: SortOrder
    user_id?: SortOrder
    calificacion?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CalificacionListRelationFilter = {
    every?: calificacionWhereInput
    some?: calificacionWhereInput
    none?: calificacionWhereInput
  }

  export type UnidadListRelationFilter = {
    every?: unidadWhereInput
    some?: unidadWhereInput
    none?: unidadWhereInput
  }

  export type Usuario_cursoListRelationFilter = {
    every?: usuario_cursoWhereInput
    some?: usuario_cursoWhereInput
    none?: usuario_cursoWhereInput
  }

  export type calificacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type unidadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuario_cursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cursoCountOrderByAggregateInput = {
    curso_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    calificacion_promedio?: SortOrder
    materiales?: SortOrder
    imagen?: SortOrder
    precio?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    video_intro?: SortOrder
    duracion?: SortOrder
  }

  export type cursoAvgOrderByAggregateInput = {
    calificacion_promedio?: SortOrder
    precio?: SortOrder
    duracion?: SortOrder
  }

  export type cursoMaxOrderByAggregateInput = {
    curso_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    calificacion_promedio?: SortOrder
    materiales?: SortOrder
    imagen?: SortOrder
    precio?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    video_intro?: SortOrder
    duracion?: SortOrder
  }

  export type cursoMinOrderByAggregateInput = {
    curso_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    calificacion_promedio?: SortOrder
    materiales?: SortOrder
    imagen?: SortOrder
    precio?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    video_intro?: SortOrder
    duracion?: SortOrder
  }

  export type cursoSumOrderByAggregateInput = {
    calificacion_promedio?: SortOrder
    precio?: SortOrder
    duracion?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UnidadNullableScalarRelationFilter = {
    is?: unidadWhereInput | null
    isNot?: unidadWhereInput | null
  }

  export type ProgresoListRelationFilter = {
    every?: progresoWhereInput
    some?: progresoWhereInput
    none?: progresoWhereInput
  }

  export type progresoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type leccionCountOrderByAggregateInput = {
    leccion_id?: SortOrder
    unidad_id?: SortOrder
    nombre?: SortOrder
    video_url?: SortOrder
    material_descarga?: SortOrder
    leccion?: SortOrder
  }

  export type leccionAvgOrderByAggregateInput = {
    leccion_id?: SortOrder
    unidad_id?: SortOrder
  }

  export type leccionMaxOrderByAggregateInput = {
    leccion_id?: SortOrder
    unidad_id?: SortOrder
    nombre?: SortOrder
    video_url?: SortOrder
    material_descarga?: SortOrder
    leccion?: SortOrder
  }

  export type leccionMinOrderByAggregateInput = {
    leccion_id?: SortOrder
    unidad_id?: SortOrder
    nombre?: SortOrder
    video_url?: SortOrder
    material_descarga?: SortOrder
    leccion?: SortOrder
  }

  export type leccionSumOrderByAggregateInput = {
    leccion_id?: SortOrder
    unidad_id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type LeccionNullableScalarRelationFilter = {
    is?: leccionWhereInput | null
    isNot?: leccionWhereInput | null
  }

  export type progresoUser_idLeccion_idCompoundUniqueInput = {
    user_id: number
    leccion_id: number
  }

  export type progresoCountOrderByAggregateInput = {
    user_id?: SortOrder
    leccion_id?: SortOrder
    completado?: SortOrder
    progreso_id?: SortOrder
  }

  export type progresoAvgOrderByAggregateInput = {
    user_id?: SortOrder
    leccion_id?: SortOrder
    progreso_id?: SortOrder
  }

  export type progresoMaxOrderByAggregateInput = {
    user_id?: SortOrder
    leccion_id?: SortOrder
    completado?: SortOrder
    progreso_id?: SortOrder
  }

  export type progresoMinOrderByAggregateInput = {
    user_id?: SortOrder
    leccion_id?: SortOrder
    completado?: SortOrder
    progreso_id?: SortOrder
  }

  export type progresoSumOrderByAggregateInput = {
    user_id?: SortOrder
    leccion_id?: SortOrder
    progreso_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type LeccionListRelationFilter = {
    every?: leccionWhereInput
    some?: leccionWhereInput
    none?: leccionWhereInput
  }

  export type leccionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type unidadCountOrderByAggregateInput = {
    unidad_id?: SortOrder
    curso_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    unidad?: SortOrder
  }

  export type unidadAvgOrderByAggregateInput = {
    unidad_id?: SortOrder
  }

  export type unidadMaxOrderByAggregateInput = {
    unidad_id?: SortOrder
    curso_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    unidad?: SortOrder
  }

  export type unidadMinOrderByAggregateInput = {
    unidad_id?: SortOrder
    curso_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    unidad?: SortOrder
  }

  export type unidadSumOrderByAggregateInput = {
    unidad_id?: SortOrder
  }

  export type usuarioCountOrderByAggregateInput = {
    user_id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    celular?: SortOrder
    correo?: SortOrder
    usuario?: SortOrder
    contrasenia?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    rol?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    user_id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    celular?: SortOrder
    correo?: SortOrder
    usuario?: SortOrder
    contrasenia?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    rol?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    user_id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    celular?: SortOrder
    correo?: SortOrder
    usuario?: SortOrder
    contrasenia?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    rol?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type CursoScalarRelationFilter = {
    is?: cursoWhereInput
    isNot?: cursoWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type usuario_cursoUser_idCurso_idCompoundUniqueInput = {
    user_id: number
    curso_id: string
  }

  export type usuario_cursoCountOrderByAggregateInput = {
    user_id?: SortOrder
    curso_id?: SortOrder
  }

  export type usuario_cursoAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usuario_cursoMaxOrderByAggregateInput = {
    user_id?: SortOrder
    curso_id?: SortOrder
  }

  export type usuario_cursoMinOrderByAggregateInput = {
    user_id?: SortOrder
    curso_id?: SortOrder
  }

  export type usuario_cursoSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type cursoCreateNestedOneWithoutCalificacionInput = {
    create?: XOR<cursoCreateWithoutCalificacionInput, cursoUncheckedCreateWithoutCalificacionInput>
    connectOrCreate?: cursoCreateOrConnectWithoutCalificacionInput
    connect?: cursoWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutCalificacionInput = {
    create?: XOR<usuarioCreateWithoutCalificacionInput, usuarioUncheckedCreateWithoutCalificacionInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutCalificacionInput
    connect?: usuarioWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type cursoUpdateOneWithoutCalificacionNestedInput = {
    create?: XOR<cursoCreateWithoutCalificacionInput, cursoUncheckedCreateWithoutCalificacionInput>
    connectOrCreate?: cursoCreateOrConnectWithoutCalificacionInput
    upsert?: cursoUpsertWithoutCalificacionInput
    disconnect?: cursoWhereInput | boolean
    delete?: cursoWhereInput | boolean
    connect?: cursoWhereUniqueInput
    update?: XOR<XOR<cursoUpdateToOneWithWhereWithoutCalificacionInput, cursoUpdateWithoutCalificacionInput>, cursoUncheckedUpdateWithoutCalificacionInput>
  }

  export type usuarioUpdateOneWithoutCalificacionNestedInput = {
    create?: XOR<usuarioCreateWithoutCalificacionInput, usuarioUncheckedCreateWithoutCalificacionInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutCalificacionInput
    upsert?: usuarioUpsertWithoutCalificacionInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutCalificacionInput, usuarioUpdateWithoutCalificacionInput>, usuarioUncheckedUpdateWithoutCalificacionInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type calificacionCreateNestedManyWithoutCursoInput = {
    create?: XOR<calificacionCreateWithoutCursoInput, calificacionUncheckedCreateWithoutCursoInput> | calificacionCreateWithoutCursoInput[] | calificacionUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: calificacionCreateOrConnectWithoutCursoInput | calificacionCreateOrConnectWithoutCursoInput[]
    createMany?: calificacionCreateManyCursoInputEnvelope
    connect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
  }

  export type unidadCreateNestedManyWithoutCursoInput = {
    create?: XOR<unidadCreateWithoutCursoInput, unidadUncheckedCreateWithoutCursoInput> | unidadCreateWithoutCursoInput[] | unidadUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: unidadCreateOrConnectWithoutCursoInput | unidadCreateOrConnectWithoutCursoInput[]
    createMany?: unidadCreateManyCursoInputEnvelope
    connect?: unidadWhereUniqueInput | unidadWhereUniqueInput[]
  }

  export type usuario_cursoCreateNestedManyWithoutCursoInput = {
    create?: XOR<usuario_cursoCreateWithoutCursoInput, usuario_cursoUncheckedCreateWithoutCursoInput> | usuario_cursoCreateWithoutCursoInput[] | usuario_cursoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: usuario_cursoCreateOrConnectWithoutCursoInput | usuario_cursoCreateOrConnectWithoutCursoInput[]
    createMany?: usuario_cursoCreateManyCursoInputEnvelope
    connect?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
  }

  export type calificacionUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<calificacionCreateWithoutCursoInput, calificacionUncheckedCreateWithoutCursoInput> | calificacionCreateWithoutCursoInput[] | calificacionUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: calificacionCreateOrConnectWithoutCursoInput | calificacionCreateOrConnectWithoutCursoInput[]
    createMany?: calificacionCreateManyCursoInputEnvelope
    connect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
  }

  export type unidadUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<unidadCreateWithoutCursoInput, unidadUncheckedCreateWithoutCursoInput> | unidadCreateWithoutCursoInput[] | unidadUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: unidadCreateOrConnectWithoutCursoInput | unidadCreateOrConnectWithoutCursoInput[]
    createMany?: unidadCreateManyCursoInputEnvelope
    connect?: unidadWhereUniqueInput | unidadWhereUniqueInput[]
  }

  export type usuario_cursoUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<usuario_cursoCreateWithoutCursoInput, usuario_cursoUncheckedCreateWithoutCursoInput> | usuario_cursoCreateWithoutCursoInput[] | usuario_cursoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: usuario_cursoCreateOrConnectWithoutCursoInput | usuario_cursoCreateOrConnectWithoutCursoInput[]
    createMany?: usuario_cursoCreateManyCursoInputEnvelope
    connect?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type calificacionUpdateManyWithoutCursoNestedInput = {
    create?: XOR<calificacionCreateWithoutCursoInput, calificacionUncheckedCreateWithoutCursoInput> | calificacionCreateWithoutCursoInput[] | calificacionUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: calificacionCreateOrConnectWithoutCursoInput | calificacionCreateOrConnectWithoutCursoInput[]
    upsert?: calificacionUpsertWithWhereUniqueWithoutCursoInput | calificacionUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: calificacionCreateManyCursoInputEnvelope
    set?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    disconnect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    delete?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    connect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    update?: calificacionUpdateWithWhereUniqueWithoutCursoInput | calificacionUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: calificacionUpdateManyWithWhereWithoutCursoInput | calificacionUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: calificacionScalarWhereInput | calificacionScalarWhereInput[]
  }

  export type unidadUpdateManyWithoutCursoNestedInput = {
    create?: XOR<unidadCreateWithoutCursoInput, unidadUncheckedCreateWithoutCursoInput> | unidadCreateWithoutCursoInput[] | unidadUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: unidadCreateOrConnectWithoutCursoInput | unidadCreateOrConnectWithoutCursoInput[]
    upsert?: unidadUpsertWithWhereUniqueWithoutCursoInput | unidadUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: unidadCreateManyCursoInputEnvelope
    set?: unidadWhereUniqueInput | unidadWhereUniqueInput[]
    disconnect?: unidadWhereUniqueInput | unidadWhereUniqueInput[]
    delete?: unidadWhereUniqueInput | unidadWhereUniqueInput[]
    connect?: unidadWhereUniqueInput | unidadWhereUniqueInput[]
    update?: unidadUpdateWithWhereUniqueWithoutCursoInput | unidadUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: unidadUpdateManyWithWhereWithoutCursoInput | unidadUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: unidadScalarWhereInput | unidadScalarWhereInput[]
  }

  export type usuario_cursoUpdateManyWithoutCursoNestedInput = {
    create?: XOR<usuario_cursoCreateWithoutCursoInput, usuario_cursoUncheckedCreateWithoutCursoInput> | usuario_cursoCreateWithoutCursoInput[] | usuario_cursoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: usuario_cursoCreateOrConnectWithoutCursoInput | usuario_cursoCreateOrConnectWithoutCursoInput[]
    upsert?: usuario_cursoUpsertWithWhereUniqueWithoutCursoInput | usuario_cursoUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: usuario_cursoCreateManyCursoInputEnvelope
    set?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    disconnect?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    delete?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    connect?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    update?: usuario_cursoUpdateWithWhereUniqueWithoutCursoInput | usuario_cursoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: usuario_cursoUpdateManyWithWhereWithoutCursoInput | usuario_cursoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: usuario_cursoScalarWhereInput | usuario_cursoScalarWhereInput[]
  }

  export type calificacionUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<calificacionCreateWithoutCursoInput, calificacionUncheckedCreateWithoutCursoInput> | calificacionCreateWithoutCursoInput[] | calificacionUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: calificacionCreateOrConnectWithoutCursoInput | calificacionCreateOrConnectWithoutCursoInput[]
    upsert?: calificacionUpsertWithWhereUniqueWithoutCursoInput | calificacionUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: calificacionCreateManyCursoInputEnvelope
    set?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    disconnect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    delete?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    connect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    update?: calificacionUpdateWithWhereUniqueWithoutCursoInput | calificacionUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: calificacionUpdateManyWithWhereWithoutCursoInput | calificacionUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: calificacionScalarWhereInput | calificacionScalarWhereInput[]
  }

  export type unidadUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<unidadCreateWithoutCursoInput, unidadUncheckedCreateWithoutCursoInput> | unidadCreateWithoutCursoInput[] | unidadUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: unidadCreateOrConnectWithoutCursoInput | unidadCreateOrConnectWithoutCursoInput[]
    upsert?: unidadUpsertWithWhereUniqueWithoutCursoInput | unidadUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: unidadCreateManyCursoInputEnvelope
    set?: unidadWhereUniqueInput | unidadWhereUniqueInput[]
    disconnect?: unidadWhereUniqueInput | unidadWhereUniqueInput[]
    delete?: unidadWhereUniqueInput | unidadWhereUniqueInput[]
    connect?: unidadWhereUniqueInput | unidadWhereUniqueInput[]
    update?: unidadUpdateWithWhereUniqueWithoutCursoInput | unidadUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: unidadUpdateManyWithWhereWithoutCursoInput | unidadUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: unidadScalarWhereInput | unidadScalarWhereInput[]
  }

  export type usuario_cursoUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<usuario_cursoCreateWithoutCursoInput, usuario_cursoUncheckedCreateWithoutCursoInput> | usuario_cursoCreateWithoutCursoInput[] | usuario_cursoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: usuario_cursoCreateOrConnectWithoutCursoInput | usuario_cursoCreateOrConnectWithoutCursoInput[]
    upsert?: usuario_cursoUpsertWithWhereUniqueWithoutCursoInput | usuario_cursoUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: usuario_cursoCreateManyCursoInputEnvelope
    set?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    disconnect?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    delete?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    connect?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    update?: usuario_cursoUpdateWithWhereUniqueWithoutCursoInput | usuario_cursoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: usuario_cursoUpdateManyWithWhereWithoutCursoInput | usuario_cursoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: usuario_cursoScalarWhereInput | usuario_cursoScalarWhereInput[]
  }

  export type unidadCreateNestedOneWithoutLeccionInput = {
    create?: XOR<unidadCreateWithoutLeccionInput, unidadUncheckedCreateWithoutLeccionInput>
    connectOrCreate?: unidadCreateOrConnectWithoutLeccionInput
    connect?: unidadWhereUniqueInput
  }

  export type progresoCreateNestedManyWithoutLeccionInput = {
    create?: XOR<progresoCreateWithoutLeccionInput, progresoUncheckedCreateWithoutLeccionInput> | progresoCreateWithoutLeccionInput[] | progresoUncheckedCreateWithoutLeccionInput[]
    connectOrCreate?: progresoCreateOrConnectWithoutLeccionInput | progresoCreateOrConnectWithoutLeccionInput[]
    createMany?: progresoCreateManyLeccionInputEnvelope
    connect?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
  }

  export type progresoUncheckedCreateNestedManyWithoutLeccionInput = {
    create?: XOR<progresoCreateWithoutLeccionInput, progresoUncheckedCreateWithoutLeccionInput> | progresoCreateWithoutLeccionInput[] | progresoUncheckedCreateWithoutLeccionInput[]
    connectOrCreate?: progresoCreateOrConnectWithoutLeccionInput | progresoCreateOrConnectWithoutLeccionInput[]
    createMany?: progresoCreateManyLeccionInputEnvelope
    connect?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
  }

  export type unidadUpdateOneWithoutLeccionNestedInput = {
    create?: XOR<unidadCreateWithoutLeccionInput, unidadUncheckedCreateWithoutLeccionInput>
    connectOrCreate?: unidadCreateOrConnectWithoutLeccionInput
    upsert?: unidadUpsertWithoutLeccionInput
    disconnect?: unidadWhereInput | boolean
    delete?: unidadWhereInput | boolean
    connect?: unidadWhereUniqueInput
    update?: XOR<XOR<unidadUpdateToOneWithWhereWithoutLeccionInput, unidadUpdateWithoutLeccionInput>, unidadUncheckedUpdateWithoutLeccionInput>
  }

  export type progresoUpdateManyWithoutLeccionNestedInput = {
    create?: XOR<progresoCreateWithoutLeccionInput, progresoUncheckedCreateWithoutLeccionInput> | progresoCreateWithoutLeccionInput[] | progresoUncheckedCreateWithoutLeccionInput[]
    connectOrCreate?: progresoCreateOrConnectWithoutLeccionInput | progresoCreateOrConnectWithoutLeccionInput[]
    upsert?: progresoUpsertWithWhereUniqueWithoutLeccionInput | progresoUpsertWithWhereUniqueWithoutLeccionInput[]
    createMany?: progresoCreateManyLeccionInputEnvelope
    set?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    disconnect?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    delete?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    connect?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    update?: progresoUpdateWithWhereUniqueWithoutLeccionInput | progresoUpdateWithWhereUniqueWithoutLeccionInput[]
    updateMany?: progresoUpdateManyWithWhereWithoutLeccionInput | progresoUpdateManyWithWhereWithoutLeccionInput[]
    deleteMany?: progresoScalarWhereInput | progresoScalarWhereInput[]
  }

  export type progresoUncheckedUpdateManyWithoutLeccionNestedInput = {
    create?: XOR<progresoCreateWithoutLeccionInput, progresoUncheckedCreateWithoutLeccionInput> | progresoCreateWithoutLeccionInput[] | progresoUncheckedCreateWithoutLeccionInput[]
    connectOrCreate?: progresoCreateOrConnectWithoutLeccionInput | progresoCreateOrConnectWithoutLeccionInput[]
    upsert?: progresoUpsertWithWhereUniqueWithoutLeccionInput | progresoUpsertWithWhereUniqueWithoutLeccionInput[]
    createMany?: progresoCreateManyLeccionInputEnvelope
    set?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    disconnect?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    delete?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    connect?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    update?: progresoUpdateWithWhereUniqueWithoutLeccionInput | progresoUpdateWithWhereUniqueWithoutLeccionInput[]
    updateMany?: progresoUpdateManyWithWhereWithoutLeccionInput | progresoUpdateManyWithWhereWithoutLeccionInput[]
    deleteMany?: progresoScalarWhereInput | progresoScalarWhereInput[]
  }

  export type leccionCreateNestedOneWithoutProgresoInput = {
    create?: XOR<leccionCreateWithoutProgresoInput, leccionUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: leccionCreateOrConnectWithoutProgresoInput
    connect?: leccionWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutProgresoInput = {
    create?: XOR<usuarioCreateWithoutProgresoInput, usuarioUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutProgresoInput
    connect?: usuarioWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type leccionUpdateOneWithoutProgresoNestedInput = {
    create?: XOR<leccionCreateWithoutProgresoInput, leccionUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: leccionCreateOrConnectWithoutProgresoInput
    upsert?: leccionUpsertWithoutProgresoInput
    disconnect?: leccionWhereInput | boolean
    delete?: leccionWhereInput | boolean
    connect?: leccionWhereUniqueInput
    update?: XOR<XOR<leccionUpdateToOneWithWhereWithoutProgresoInput, leccionUpdateWithoutProgresoInput>, leccionUncheckedUpdateWithoutProgresoInput>
  }

  export type usuarioUpdateOneWithoutProgresoNestedInput = {
    create?: XOR<usuarioCreateWithoutProgresoInput, usuarioUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutProgresoInput
    upsert?: usuarioUpsertWithoutProgresoInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutProgresoInput, usuarioUpdateWithoutProgresoInput>, usuarioUncheckedUpdateWithoutProgresoInput>
  }

  export type leccionCreateNestedManyWithoutUnidadInput = {
    create?: XOR<leccionCreateWithoutUnidadInput, leccionUncheckedCreateWithoutUnidadInput> | leccionCreateWithoutUnidadInput[] | leccionUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: leccionCreateOrConnectWithoutUnidadInput | leccionCreateOrConnectWithoutUnidadInput[]
    createMany?: leccionCreateManyUnidadInputEnvelope
    connect?: leccionWhereUniqueInput | leccionWhereUniqueInput[]
  }

  export type cursoCreateNestedOneWithoutUnidadInput = {
    create?: XOR<cursoCreateWithoutUnidadInput, cursoUncheckedCreateWithoutUnidadInput>
    connectOrCreate?: cursoCreateOrConnectWithoutUnidadInput
    connect?: cursoWhereUniqueInput
  }

  export type leccionUncheckedCreateNestedManyWithoutUnidadInput = {
    create?: XOR<leccionCreateWithoutUnidadInput, leccionUncheckedCreateWithoutUnidadInput> | leccionCreateWithoutUnidadInput[] | leccionUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: leccionCreateOrConnectWithoutUnidadInput | leccionCreateOrConnectWithoutUnidadInput[]
    createMany?: leccionCreateManyUnidadInputEnvelope
    connect?: leccionWhereUniqueInput | leccionWhereUniqueInput[]
  }

  export type leccionUpdateManyWithoutUnidadNestedInput = {
    create?: XOR<leccionCreateWithoutUnidadInput, leccionUncheckedCreateWithoutUnidadInput> | leccionCreateWithoutUnidadInput[] | leccionUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: leccionCreateOrConnectWithoutUnidadInput | leccionCreateOrConnectWithoutUnidadInput[]
    upsert?: leccionUpsertWithWhereUniqueWithoutUnidadInput | leccionUpsertWithWhereUniqueWithoutUnidadInput[]
    createMany?: leccionCreateManyUnidadInputEnvelope
    set?: leccionWhereUniqueInput | leccionWhereUniqueInput[]
    disconnect?: leccionWhereUniqueInput | leccionWhereUniqueInput[]
    delete?: leccionWhereUniqueInput | leccionWhereUniqueInput[]
    connect?: leccionWhereUniqueInput | leccionWhereUniqueInput[]
    update?: leccionUpdateWithWhereUniqueWithoutUnidadInput | leccionUpdateWithWhereUniqueWithoutUnidadInput[]
    updateMany?: leccionUpdateManyWithWhereWithoutUnidadInput | leccionUpdateManyWithWhereWithoutUnidadInput[]
    deleteMany?: leccionScalarWhereInput | leccionScalarWhereInput[]
  }

  export type cursoUpdateOneWithoutUnidadNestedInput = {
    create?: XOR<cursoCreateWithoutUnidadInput, cursoUncheckedCreateWithoutUnidadInput>
    connectOrCreate?: cursoCreateOrConnectWithoutUnidadInput
    upsert?: cursoUpsertWithoutUnidadInput
    disconnect?: cursoWhereInput | boolean
    delete?: cursoWhereInput | boolean
    connect?: cursoWhereUniqueInput
    update?: XOR<XOR<cursoUpdateToOneWithWhereWithoutUnidadInput, cursoUpdateWithoutUnidadInput>, cursoUncheckedUpdateWithoutUnidadInput>
  }

  export type leccionUncheckedUpdateManyWithoutUnidadNestedInput = {
    create?: XOR<leccionCreateWithoutUnidadInput, leccionUncheckedCreateWithoutUnidadInput> | leccionCreateWithoutUnidadInput[] | leccionUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: leccionCreateOrConnectWithoutUnidadInput | leccionCreateOrConnectWithoutUnidadInput[]
    upsert?: leccionUpsertWithWhereUniqueWithoutUnidadInput | leccionUpsertWithWhereUniqueWithoutUnidadInput[]
    createMany?: leccionCreateManyUnidadInputEnvelope
    set?: leccionWhereUniqueInput | leccionWhereUniqueInput[]
    disconnect?: leccionWhereUniqueInput | leccionWhereUniqueInput[]
    delete?: leccionWhereUniqueInput | leccionWhereUniqueInput[]
    connect?: leccionWhereUniqueInput | leccionWhereUniqueInput[]
    update?: leccionUpdateWithWhereUniqueWithoutUnidadInput | leccionUpdateWithWhereUniqueWithoutUnidadInput[]
    updateMany?: leccionUpdateManyWithWhereWithoutUnidadInput | leccionUpdateManyWithWhereWithoutUnidadInput[]
    deleteMany?: leccionScalarWhereInput | leccionScalarWhereInput[]
  }

  export type calificacionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<calificacionCreateWithoutUsuarioInput, calificacionUncheckedCreateWithoutUsuarioInput> | calificacionCreateWithoutUsuarioInput[] | calificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: calificacionCreateOrConnectWithoutUsuarioInput | calificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: calificacionCreateManyUsuarioInputEnvelope
    connect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
  }

  export type progresoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<progresoCreateWithoutUsuarioInput, progresoUncheckedCreateWithoutUsuarioInput> | progresoCreateWithoutUsuarioInput[] | progresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progresoCreateOrConnectWithoutUsuarioInput | progresoCreateOrConnectWithoutUsuarioInput[]
    createMany?: progresoCreateManyUsuarioInputEnvelope
    connect?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
  }

  export type usuario_cursoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<usuario_cursoCreateWithoutUsuarioInput, usuario_cursoUncheckedCreateWithoutUsuarioInput> | usuario_cursoCreateWithoutUsuarioInput[] | usuario_cursoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_cursoCreateOrConnectWithoutUsuarioInput | usuario_cursoCreateOrConnectWithoutUsuarioInput[]
    createMany?: usuario_cursoCreateManyUsuarioInputEnvelope
    connect?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
  }

  export type calificacionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<calificacionCreateWithoutUsuarioInput, calificacionUncheckedCreateWithoutUsuarioInput> | calificacionCreateWithoutUsuarioInput[] | calificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: calificacionCreateOrConnectWithoutUsuarioInput | calificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: calificacionCreateManyUsuarioInputEnvelope
    connect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
  }

  export type progresoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<progresoCreateWithoutUsuarioInput, progresoUncheckedCreateWithoutUsuarioInput> | progresoCreateWithoutUsuarioInput[] | progresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progresoCreateOrConnectWithoutUsuarioInput | progresoCreateOrConnectWithoutUsuarioInput[]
    createMany?: progresoCreateManyUsuarioInputEnvelope
    connect?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
  }

  export type usuario_cursoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<usuario_cursoCreateWithoutUsuarioInput, usuario_cursoUncheckedCreateWithoutUsuarioInput> | usuario_cursoCreateWithoutUsuarioInput[] | usuario_cursoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_cursoCreateOrConnectWithoutUsuarioInput | usuario_cursoCreateOrConnectWithoutUsuarioInput[]
    createMany?: usuario_cursoCreateManyUsuarioInputEnvelope
    connect?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
  }

  export type calificacionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<calificacionCreateWithoutUsuarioInput, calificacionUncheckedCreateWithoutUsuarioInput> | calificacionCreateWithoutUsuarioInput[] | calificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: calificacionCreateOrConnectWithoutUsuarioInput | calificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: calificacionUpsertWithWhereUniqueWithoutUsuarioInput | calificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: calificacionCreateManyUsuarioInputEnvelope
    set?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    disconnect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    delete?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    connect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    update?: calificacionUpdateWithWhereUniqueWithoutUsuarioInput | calificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: calificacionUpdateManyWithWhereWithoutUsuarioInput | calificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: calificacionScalarWhereInput | calificacionScalarWhereInput[]
  }

  export type progresoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<progresoCreateWithoutUsuarioInput, progresoUncheckedCreateWithoutUsuarioInput> | progresoCreateWithoutUsuarioInput[] | progresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progresoCreateOrConnectWithoutUsuarioInput | progresoCreateOrConnectWithoutUsuarioInput[]
    upsert?: progresoUpsertWithWhereUniqueWithoutUsuarioInput | progresoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: progresoCreateManyUsuarioInputEnvelope
    set?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    disconnect?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    delete?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    connect?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    update?: progresoUpdateWithWhereUniqueWithoutUsuarioInput | progresoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: progresoUpdateManyWithWhereWithoutUsuarioInput | progresoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: progresoScalarWhereInput | progresoScalarWhereInput[]
  }

  export type usuario_cursoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<usuario_cursoCreateWithoutUsuarioInput, usuario_cursoUncheckedCreateWithoutUsuarioInput> | usuario_cursoCreateWithoutUsuarioInput[] | usuario_cursoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_cursoCreateOrConnectWithoutUsuarioInput | usuario_cursoCreateOrConnectWithoutUsuarioInput[]
    upsert?: usuario_cursoUpsertWithWhereUniqueWithoutUsuarioInput | usuario_cursoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: usuario_cursoCreateManyUsuarioInputEnvelope
    set?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    disconnect?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    delete?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    connect?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    update?: usuario_cursoUpdateWithWhereUniqueWithoutUsuarioInput | usuario_cursoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: usuario_cursoUpdateManyWithWhereWithoutUsuarioInput | usuario_cursoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: usuario_cursoScalarWhereInput | usuario_cursoScalarWhereInput[]
  }

  export type calificacionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<calificacionCreateWithoutUsuarioInput, calificacionUncheckedCreateWithoutUsuarioInput> | calificacionCreateWithoutUsuarioInput[] | calificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: calificacionCreateOrConnectWithoutUsuarioInput | calificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: calificacionUpsertWithWhereUniqueWithoutUsuarioInput | calificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: calificacionCreateManyUsuarioInputEnvelope
    set?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    disconnect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    delete?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    connect?: calificacionWhereUniqueInput | calificacionWhereUniqueInput[]
    update?: calificacionUpdateWithWhereUniqueWithoutUsuarioInput | calificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: calificacionUpdateManyWithWhereWithoutUsuarioInput | calificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: calificacionScalarWhereInput | calificacionScalarWhereInput[]
  }

  export type progresoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<progresoCreateWithoutUsuarioInput, progresoUncheckedCreateWithoutUsuarioInput> | progresoCreateWithoutUsuarioInput[] | progresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: progresoCreateOrConnectWithoutUsuarioInput | progresoCreateOrConnectWithoutUsuarioInput[]
    upsert?: progresoUpsertWithWhereUniqueWithoutUsuarioInput | progresoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: progresoCreateManyUsuarioInputEnvelope
    set?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    disconnect?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    delete?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    connect?: progresoWhereUniqueInput | progresoWhereUniqueInput[]
    update?: progresoUpdateWithWhereUniqueWithoutUsuarioInput | progresoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: progresoUpdateManyWithWhereWithoutUsuarioInput | progresoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: progresoScalarWhereInput | progresoScalarWhereInput[]
  }

  export type usuario_cursoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<usuario_cursoCreateWithoutUsuarioInput, usuario_cursoUncheckedCreateWithoutUsuarioInput> | usuario_cursoCreateWithoutUsuarioInput[] | usuario_cursoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_cursoCreateOrConnectWithoutUsuarioInput | usuario_cursoCreateOrConnectWithoutUsuarioInput[]
    upsert?: usuario_cursoUpsertWithWhereUniqueWithoutUsuarioInput | usuario_cursoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: usuario_cursoCreateManyUsuarioInputEnvelope
    set?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    disconnect?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    delete?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    connect?: usuario_cursoWhereUniqueInput | usuario_cursoWhereUniqueInput[]
    update?: usuario_cursoUpdateWithWhereUniqueWithoutUsuarioInput | usuario_cursoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: usuario_cursoUpdateManyWithWhereWithoutUsuarioInput | usuario_cursoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: usuario_cursoScalarWhereInput | usuario_cursoScalarWhereInput[]
  }

  export type cursoCreateNestedOneWithoutUsuario_cursoInput = {
    create?: XOR<cursoCreateWithoutUsuario_cursoInput, cursoUncheckedCreateWithoutUsuario_cursoInput>
    connectOrCreate?: cursoCreateOrConnectWithoutUsuario_cursoInput
    connect?: cursoWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutUsuario_cursoInput = {
    create?: XOR<usuarioCreateWithoutUsuario_cursoInput, usuarioUncheckedCreateWithoutUsuario_cursoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutUsuario_cursoInput
    connect?: usuarioWhereUniqueInput
  }

  export type cursoUpdateOneRequiredWithoutUsuario_cursoNestedInput = {
    create?: XOR<cursoCreateWithoutUsuario_cursoInput, cursoUncheckedCreateWithoutUsuario_cursoInput>
    connectOrCreate?: cursoCreateOrConnectWithoutUsuario_cursoInput
    upsert?: cursoUpsertWithoutUsuario_cursoInput
    connect?: cursoWhereUniqueInput
    update?: XOR<XOR<cursoUpdateToOneWithWhereWithoutUsuario_cursoInput, cursoUpdateWithoutUsuario_cursoInput>, cursoUncheckedUpdateWithoutUsuario_cursoInput>
  }

  export type usuarioUpdateOneRequiredWithoutUsuario_cursoNestedInput = {
    create?: XOR<usuarioCreateWithoutUsuario_cursoInput, usuarioUncheckedCreateWithoutUsuario_cursoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutUsuario_cursoInput
    upsert?: usuarioUpsertWithoutUsuario_cursoInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutUsuario_cursoInput, usuarioUpdateWithoutUsuario_cursoInput>, usuarioUncheckedUpdateWithoutUsuario_cursoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type cursoCreateWithoutCalificacionInput = {
    curso_id: string
    nombre: string
    descripcion?: string | null
    calificacion_promedio?: Decimal | DecimalJsLike | number | string | null
    materiales?: string | null
    imagen?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    video_intro?: string | null
    duracion?: number | null
    unidad?: unidadCreateNestedManyWithoutCursoInput
    usuario_curso?: usuario_cursoCreateNestedManyWithoutCursoInput
  }

  export type cursoUncheckedCreateWithoutCalificacionInput = {
    curso_id: string
    nombre: string
    descripcion?: string | null
    calificacion_promedio?: Decimal | DecimalJsLike | number | string | null
    materiales?: string | null
    imagen?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    video_intro?: string | null
    duracion?: number | null
    unidad?: unidadUncheckedCreateNestedManyWithoutCursoInput
    usuario_curso?: usuario_cursoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type cursoCreateOrConnectWithoutCalificacionInput = {
    where: cursoWhereUniqueInput
    create: XOR<cursoCreateWithoutCalificacionInput, cursoUncheckedCreateWithoutCalificacionInput>
  }

  export type usuarioCreateWithoutCalificacionInput = {
    nombres?: string | null
    apellidos?: string | null
    dni?: string | null
    celular?: string | null
    correo: string
    usuario?: string | null
    contrasenia?: string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    rol?: string | null
    progreso?: progresoCreateNestedManyWithoutUsuarioInput
    usuario_curso?: usuario_cursoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutCalificacionInput = {
    user_id?: number
    nombres?: string | null
    apellidos?: string | null
    dni?: string | null
    celular?: string | null
    correo: string
    usuario?: string | null
    contrasenia?: string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    rol?: string | null
    progreso?: progresoUncheckedCreateNestedManyWithoutUsuarioInput
    usuario_curso?: usuario_cursoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutCalificacionInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutCalificacionInput, usuarioUncheckedCreateWithoutCalificacionInput>
  }

  export type cursoUpsertWithoutCalificacionInput = {
    update: XOR<cursoUpdateWithoutCalificacionInput, cursoUncheckedUpdateWithoutCalificacionInput>
    create: XOR<cursoCreateWithoutCalificacionInput, cursoUncheckedCreateWithoutCalificacionInput>
    where?: cursoWhereInput
  }

  export type cursoUpdateToOneWithWhereWithoutCalificacionInput = {
    where?: cursoWhereInput
    data: XOR<cursoUpdateWithoutCalificacionInput, cursoUncheckedUpdateWithoutCalificacionInput>
  }

  export type cursoUpdateWithoutCalificacionInput = {
    curso_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion_promedio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    materiales?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    video_intro?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableIntFieldUpdateOperationsInput | number | null
    unidad?: unidadUpdateManyWithoutCursoNestedInput
    usuario_curso?: usuario_cursoUpdateManyWithoutCursoNestedInput
  }

  export type cursoUncheckedUpdateWithoutCalificacionInput = {
    curso_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion_promedio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    materiales?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    video_intro?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableIntFieldUpdateOperationsInput | number | null
    unidad?: unidadUncheckedUpdateManyWithoutCursoNestedInput
    usuario_curso?: usuario_cursoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type usuarioUpsertWithoutCalificacionInput = {
    update: XOR<usuarioUpdateWithoutCalificacionInput, usuarioUncheckedUpdateWithoutCalificacionInput>
    create: XOR<usuarioCreateWithoutCalificacionInput, usuarioUncheckedCreateWithoutCalificacionInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutCalificacionInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutCalificacionInput, usuarioUncheckedUpdateWithoutCalificacionInput>
  }

  export type usuarioUpdateWithoutCalificacionInput = {
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    progreso?: progresoUpdateManyWithoutUsuarioNestedInput
    usuario_curso?: usuario_cursoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutCalificacionInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    progreso?: progresoUncheckedUpdateManyWithoutUsuarioNestedInput
    usuario_curso?: usuario_cursoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type calificacionCreateWithoutCursoInput = {
    calificacion?: Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: Date | string | null
    usuario?: usuarioCreateNestedOneWithoutCalificacionInput
  }

  export type calificacionUncheckedCreateWithoutCursoInput = {
    calificacion_id?: number
    user_id?: number | null
    calificacion?: Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: Date | string | null
  }

  export type calificacionCreateOrConnectWithoutCursoInput = {
    where: calificacionWhereUniqueInput
    create: XOR<calificacionCreateWithoutCursoInput, calificacionUncheckedCreateWithoutCursoInput>
  }

  export type calificacionCreateManyCursoInputEnvelope = {
    data: calificacionCreateManyCursoInput | calificacionCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type unidadCreateWithoutCursoInput = {
    nombre: string
    descripcion?: string | null
    unidad?: string | null
    leccion?: leccionCreateNestedManyWithoutUnidadInput
  }

  export type unidadUncheckedCreateWithoutCursoInput = {
    unidad_id?: number
    nombre: string
    descripcion?: string | null
    unidad?: string | null
    leccion?: leccionUncheckedCreateNestedManyWithoutUnidadInput
  }

  export type unidadCreateOrConnectWithoutCursoInput = {
    where: unidadWhereUniqueInput
    create: XOR<unidadCreateWithoutCursoInput, unidadUncheckedCreateWithoutCursoInput>
  }

  export type unidadCreateManyCursoInputEnvelope = {
    data: unidadCreateManyCursoInput | unidadCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type usuario_cursoCreateWithoutCursoInput = {
    usuario: usuarioCreateNestedOneWithoutUsuario_cursoInput
  }

  export type usuario_cursoUncheckedCreateWithoutCursoInput = {
    user_id: number
  }

  export type usuario_cursoCreateOrConnectWithoutCursoInput = {
    where: usuario_cursoWhereUniqueInput
    create: XOR<usuario_cursoCreateWithoutCursoInput, usuario_cursoUncheckedCreateWithoutCursoInput>
  }

  export type usuario_cursoCreateManyCursoInputEnvelope = {
    data: usuario_cursoCreateManyCursoInput | usuario_cursoCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type calificacionUpsertWithWhereUniqueWithoutCursoInput = {
    where: calificacionWhereUniqueInput
    update: XOR<calificacionUpdateWithoutCursoInput, calificacionUncheckedUpdateWithoutCursoInput>
    create: XOR<calificacionCreateWithoutCursoInput, calificacionUncheckedCreateWithoutCursoInput>
  }

  export type calificacionUpdateWithWhereUniqueWithoutCursoInput = {
    where: calificacionWhereUniqueInput
    data: XOR<calificacionUpdateWithoutCursoInput, calificacionUncheckedUpdateWithoutCursoInput>
  }

  export type calificacionUpdateManyWithWhereWithoutCursoInput = {
    where: calificacionScalarWhereInput
    data: XOR<calificacionUpdateManyMutationInput, calificacionUncheckedUpdateManyWithoutCursoInput>
  }

  export type calificacionScalarWhereInput = {
    AND?: calificacionScalarWhereInput | calificacionScalarWhereInput[]
    OR?: calificacionScalarWhereInput[]
    NOT?: calificacionScalarWhereInput | calificacionScalarWhereInput[]
    calificacion_id?: IntFilter<"calificacion"> | number
    user_id?: IntNullableFilter<"calificacion"> | number | null
    curso_id?: StringNullableFilter<"calificacion"> | string | null
    calificacion?: DecimalNullableFilter<"calificacion"> | Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: DateTimeNullableFilter<"calificacion"> | Date | string | null
  }

  export type unidadUpsertWithWhereUniqueWithoutCursoInput = {
    where: unidadWhereUniqueInput
    update: XOR<unidadUpdateWithoutCursoInput, unidadUncheckedUpdateWithoutCursoInput>
    create: XOR<unidadCreateWithoutCursoInput, unidadUncheckedCreateWithoutCursoInput>
  }

  export type unidadUpdateWithWhereUniqueWithoutCursoInput = {
    where: unidadWhereUniqueInput
    data: XOR<unidadUpdateWithoutCursoInput, unidadUncheckedUpdateWithoutCursoInput>
  }

  export type unidadUpdateManyWithWhereWithoutCursoInput = {
    where: unidadScalarWhereInput
    data: XOR<unidadUpdateManyMutationInput, unidadUncheckedUpdateManyWithoutCursoInput>
  }

  export type unidadScalarWhereInput = {
    AND?: unidadScalarWhereInput | unidadScalarWhereInput[]
    OR?: unidadScalarWhereInput[]
    NOT?: unidadScalarWhereInput | unidadScalarWhereInput[]
    unidad_id?: IntFilter<"unidad"> | number
    curso_id?: StringNullableFilter<"unidad"> | string | null
    nombre?: StringFilter<"unidad"> | string
    descripcion?: StringNullableFilter<"unidad"> | string | null
    unidad?: StringNullableFilter<"unidad"> | string | null
  }

  export type usuario_cursoUpsertWithWhereUniqueWithoutCursoInput = {
    where: usuario_cursoWhereUniqueInput
    update: XOR<usuario_cursoUpdateWithoutCursoInput, usuario_cursoUncheckedUpdateWithoutCursoInput>
    create: XOR<usuario_cursoCreateWithoutCursoInput, usuario_cursoUncheckedCreateWithoutCursoInput>
  }

  export type usuario_cursoUpdateWithWhereUniqueWithoutCursoInput = {
    where: usuario_cursoWhereUniqueInput
    data: XOR<usuario_cursoUpdateWithoutCursoInput, usuario_cursoUncheckedUpdateWithoutCursoInput>
  }

  export type usuario_cursoUpdateManyWithWhereWithoutCursoInput = {
    where: usuario_cursoScalarWhereInput
    data: XOR<usuario_cursoUpdateManyMutationInput, usuario_cursoUncheckedUpdateManyWithoutCursoInput>
  }

  export type usuario_cursoScalarWhereInput = {
    AND?: usuario_cursoScalarWhereInput | usuario_cursoScalarWhereInput[]
    OR?: usuario_cursoScalarWhereInput[]
    NOT?: usuario_cursoScalarWhereInput | usuario_cursoScalarWhereInput[]
    user_id?: IntFilter<"usuario_curso"> | number
    curso_id?: StringFilter<"usuario_curso"> | string
  }

  export type unidadCreateWithoutLeccionInput = {
    nombre: string
    descripcion?: string | null
    unidad?: string | null
    curso?: cursoCreateNestedOneWithoutUnidadInput
  }

  export type unidadUncheckedCreateWithoutLeccionInput = {
    unidad_id?: number
    curso_id?: string | null
    nombre: string
    descripcion?: string | null
    unidad?: string | null
  }

  export type unidadCreateOrConnectWithoutLeccionInput = {
    where: unidadWhereUniqueInput
    create: XOR<unidadCreateWithoutLeccionInput, unidadUncheckedCreateWithoutLeccionInput>
  }

  export type progresoCreateWithoutLeccionInput = {
    completado?: boolean | null
    usuario?: usuarioCreateNestedOneWithoutProgresoInput
  }

  export type progresoUncheckedCreateWithoutLeccionInput = {
    user_id?: number | null
    completado?: boolean | null
    progreso_id?: number
  }

  export type progresoCreateOrConnectWithoutLeccionInput = {
    where: progresoWhereUniqueInput
    create: XOR<progresoCreateWithoutLeccionInput, progresoUncheckedCreateWithoutLeccionInput>
  }

  export type progresoCreateManyLeccionInputEnvelope = {
    data: progresoCreateManyLeccionInput | progresoCreateManyLeccionInput[]
    skipDuplicates?: boolean
  }

  export type unidadUpsertWithoutLeccionInput = {
    update: XOR<unidadUpdateWithoutLeccionInput, unidadUncheckedUpdateWithoutLeccionInput>
    create: XOR<unidadCreateWithoutLeccionInput, unidadUncheckedCreateWithoutLeccionInput>
    where?: unidadWhereInput
  }

  export type unidadUpdateToOneWithWhereWithoutLeccionInput = {
    where?: unidadWhereInput
    data: XOR<unidadUpdateWithoutLeccionInput, unidadUncheckedUpdateWithoutLeccionInput>
  }

  export type unidadUpdateWithoutLeccionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: cursoUpdateOneWithoutUnidadNestedInput
  }

  export type unidadUncheckedUpdateWithoutLeccionInput = {
    unidad_id?: IntFieldUpdateOperationsInput | number
    curso_id?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type progresoUpsertWithWhereUniqueWithoutLeccionInput = {
    where: progresoWhereUniqueInput
    update: XOR<progresoUpdateWithoutLeccionInput, progresoUncheckedUpdateWithoutLeccionInput>
    create: XOR<progresoCreateWithoutLeccionInput, progresoUncheckedCreateWithoutLeccionInput>
  }

  export type progresoUpdateWithWhereUniqueWithoutLeccionInput = {
    where: progresoWhereUniqueInput
    data: XOR<progresoUpdateWithoutLeccionInput, progresoUncheckedUpdateWithoutLeccionInput>
  }

  export type progresoUpdateManyWithWhereWithoutLeccionInput = {
    where: progresoScalarWhereInput
    data: XOR<progresoUpdateManyMutationInput, progresoUncheckedUpdateManyWithoutLeccionInput>
  }

  export type progresoScalarWhereInput = {
    AND?: progresoScalarWhereInput | progresoScalarWhereInput[]
    OR?: progresoScalarWhereInput[]
    NOT?: progresoScalarWhereInput | progresoScalarWhereInput[]
    user_id?: IntNullableFilter<"progreso"> | number | null
    leccion_id?: IntNullableFilter<"progreso"> | number | null
    completado?: BoolNullableFilter<"progreso"> | boolean | null
    progreso_id?: IntFilter<"progreso"> | number
  }

  export type leccionCreateWithoutProgresoInput = {
    nombre: string
    video_url?: string | null
    material_descarga?: string | null
    leccion?: string | null
    unidad?: unidadCreateNestedOneWithoutLeccionInput
  }

  export type leccionUncheckedCreateWithoutProgresoInput = {
    leccion_id?: number
    unidad_id?: number | null
    nombre: string
    video_url?: string | null
    material_descarga?: string | null
    leccion?: string | null
  }

  export type leccionCreateOrConnectWithoutProgresoInput = {
    where: leccionWhereUniqueInput
    create: XOR<leccionCreateWithoutProgresoInput, leccionUncheckedCreateWithoutProgresoInput>
  }

  export type usuarioCreateWithoutProgresoInput = {
    nombres?: string | null
    apellidos?: string | null
    dni?: string | null
    celular?: string | null
    correo: string
    usuario?: string | null
    contrasenia?: string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    rol?: string | null
    calificacion?: calificacionCreateNestedManyWithoutUsuarioInput
    usuario_curso?: usuario_cursoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutProgresoInput = {
    user_id?: number
    nombres?: string | null
    apellidos?: string | null
    dni?: string | null
    celular?: string | null
    correo: string
    usuario?: string | null
    contrasenia?: string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    rol?: string | null
    calificacion?: calificacionUncheckedCreateNestedManyWithoutUsuarioInput
    usuario_curso?: usuario_cursoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutProgresoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutProgresoInput, usuarioUncheckedCreateWithoutProgresoInput>
  }

  export type leccionUpsertWithoutProgresoInput = {
    update: XOR<leccionUpdateWithoutProgresoInput, leccionUncheckedUpdateWithoutProgresoInput>
    create: XOR<leccionCreateWithoutProgresoInput, leccionUncheckedCreateWithoutProgresoInput>
    where?: leccionWhereInput
  }

  export type leccionUpdateToOneWithWhereWithoutProgresoInput = {
    where?: leccionWhereInput
    data: XOR<leccionUpdateWithoutProgresoInput, leccionUncheckedUpdateWithoutProgresoInput>
  }

  export type leccionUpdateWithoutProgresoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    material_descarga?: NullableStringFieldUpdateOperationsInput | string | null
    leccion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: unidadUpdateOneWithoutLeccionNestedInput
  }

  export type leccionUncheckedUpdateWithoutProgresoInput = {
    leccion_id?: IntFieldUpdateOperationsInput | number
    unidad_id?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    material_descarga?: NullableStringFieldUpdateOperationsInput | string | null
    leccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarioUpsertWithoutProgresoInput = {
    update: XOR<usuarioUpdateWithoutProgresoInput, usuarioUncheckedUpdateWithoutProgresoInput>
    create: XOR<usuarioCreateWithoutProgresoInput, usuarioUncheckedCreateWithoutProgresoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutProgresoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutProgresoInput, usuarioUncheckedUpdateWithoutProgresoInput>
  }

  export type usuarioUpdateWithoutProgresoInput = {
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: calificacionUpdateManyWithoutUsuarioNestedInput
    usuario_curso?: usuario_cursoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutProgresoInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: calificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    usuario_curso?: usuario_cursoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type leccionCreateWithoutUnidadInput = {
    nombre: string
    video_url?: string | null
    material_descarga?: string | null
    leccion?: string | null
    progreso?: progresoCreateNestedManyWithoutLeccionInput
  }

  export type leccionUncheckedCreateWithoutUnidadInput = {
    leccion_id?: number
    nombre: string
    video_url?: string | null
    material_descarga?: string | null
    leccion?: string | null
    progreso?: progresoUncheckedCreateNestedManyWithoutLeccionInput
  }

  export type leccionCreateOrConnectWithoutUnidadInput = {
    where: leccionWhereUniqueInput
    create: XOR<leccionCreateWithoutUnidadInput, leccionUncheckedCreateWithoutUnidadInput>
  }

  export type leccionCreateManyUnidadInputEnvelope = {
    data: leccionCreateManyUnidadInput | leccionCreateManyUnidadInput[]
    skipDuplicates?: boolean
  }

  export type cursoCreateWithoutUnidadInput = {
    curso_id: string
    nombre: string
    descripcion?: string | null
    calificacion_promedio?: Decimal | DecimalJsLike | number | string | null
    materiales?: string | null
    imagen?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    video_intro?: string | null
    duracion?: number | null
    calificacion?: calificacionCreateNestedManyWithoutCursoInput
    usuario_curso?: usuario_cursoCreateNestedManyWithoutCursoInput
  }

  export type cursoUncheckedCreateWithoutUnidadInput = {
    curso_id: string
    nombre: string
    descripcion?: string | null
    calificacion_promedio?: Decimal | DecimalJsLike | number | string | null
    materiales?: string | null
    imagen?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    video_intro?: string | null
    duracion?: number | null
    calificacion?: calificacionUncheckedCreateNestedManyWithoutCursoInput
    usuario_curso?: usuario_cursoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type cursoCreateOrConnectWithoutUnidadInput = {
    where: cursoWhereUniqueInput
    create: XOR<cursoCreateWithoutUnidadInput, cursoUncheckedCreateWithoutUnidadInput>
  }

  export type leccionUpsertWithWhereUniqueWithoutUnidadInput = {
    where: leccionWhereUniqueInput
    update: XOR<leccionUpdateWithoutUnidadInput, leccionUncheckedUpdateWithoutUnidadInput>
    create: XOR<leccionCreateWithoutUnidadInput, leccionUncheckedCreateWithoutUnidadInput>
  }

  export type leccionUpdateWithWhereUniqueWithoutUnidadInput = {
    where: leccionWhereUniqueInput
    data: XOR<leccionUpdateWithoutUnidadInput, leccionUncheckedUpdateWithoutUnidadInput>
  }

  export type leccionUpdateManyWithWhereWithoutUnidadInput = {
    where: leccionScalarWhereInput
    data: XOR<leccionUpdateManyMutationInput, leccionUncheckedUpdateManyWithoutUnidadInput>
  }

  export type leccionScalarWhereInput = {
    AND?: leccionScalarWhereInput | leccionScalarWhereInput[]
    OR?: leccionScalarWhereInput[]
    NOT?: leccionScalarWhereInput | leccionScalarWhereInput[]
    leccion_id?: IntFilter<"leccion"> | number
    unidad_id?: IntNullableFilter<"leccion"> | number | null
    nombre?: StringFilter<"leccion"> | string
    video_url?: StringNullableFilter<"leccion"> | string | null
    material_descarga?: StringNullableFilter<"leccion"> | string | null
    leccion?: StringNullableFilter<"leccion"> | string | null
  }

  export type cursoUpsertWithoutUnidadInput = {
    update: XOR<cursoUpdateWithoutUnidadInput, cursoUncheckedUpdateWithoutUnidadInput>
    create: XOR<cursoCreateWithoutUnidadInput, cursoUncheckedCreateWithoutUnidadInput>
    where?: cursoWhereInput
  }

  export type cursoUpdateToOneWithWhereWithoutUnidadInput = {
    where?: cursoWhereInput
    data: XOR<cursoUpdateWithoutUnidadInput, cursoUncheckedUpdateWithoutUnidadInput>
  }

  export type cursoUpdateWithoutUnidadInput = {
    curso_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion_promedio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    materiales?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    video_intro?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableIntFieldUpdateOperationsInput | number | null
    calificacion?: calificacionUpdateManyWithoutCursoNestedInput
    usuario_curso?: usuario_cursoUpdateManyWithoutCursoNestedInput
  }

  export type cursoUncheckedUpdateWithoutUnidadInput = {
    curso_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion_promedio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    materiales?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    video_intro?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableIntFieldUpdateOperationsInput | number | null
    calificacion?: calificacionUncheckedUpdateManyWithoutCursoNestedInput
    usuario_curso?: usuario_cursoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type calificacionCreateWithoutUsuarioInput = {
    calificacion?: Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: Date | string | null
    curso?: cursoCreateNestedOneWithoutCalificacionInput
  }

  export type calificacionUncheckedCreateWithoutUsuarioInput = {
    calificacion_id?: number
    curso_id?: string | null
    calificacion?: Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: Date | string | null
  }

  export type calificacionCreateOrConnectWithoutUsuarioInput = {
    where: calificacionWhereUniqueInput
    create: XOR<calificacionCreateWithoutUsuarioInput, calificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type calificacionCreateManyUsuarioInputEnvelope = {
    data: calificacionCreateManyUsuarioInput | calificacionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type progresoCreateWithoutUsuarioInput = {
    completado?: boolean | null
    leccion?: leccionCreateNestedOneWithoutProgresoInput
  }

  export type progresoUncheckedCreateWithoutUsuarioInput = {
    leccion_id?: number | null
    completado?: boolean | null
    progreso_id?: number
  }

  export type progresoCreateOrConnectWithoutUsuarioInput = {
    where: progresoWhereUniqueInput
    create: XOR<progresoCreateWithoutUsuarioInput, progresoUncheckedCreateWithoutUsuarioInput>
  }

  export type progresoCreateManyUsuarioInputEnvelope = {
    data: progresoCreateManyUsuarioInput | progresoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type usuario_cursoCreateWithoutUsuarioInput = {
    curso: cursoCreateNestedOneWithoutUsuario_cursoInput
  }

  export type usuario_cursoUncheckedCreateWithoutUsuarioInput = {
    curso_id: string
  }

  export type usuario_cursoCreateOrConnectWithoutUsuarioInput = {
    where: usuario_cursoWhereUniqueInput
    create: XOR<usuario_cursoCreateWithoutUsuarioInput, usuario_cursoUncheckedCreateWithoutUsuarioInput>
  }

  export type usuario_cursoCreateManyUsuarioInputEnvelope = {
    data: usuario_cursoCreateManyUsuarioInput | usuario_cursoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type calificacionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: calificacionWhereUniqueInput
    update: XOR<calificacionUpdateWithoutUsuarioInput, calificacionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<calificacionCreateWithoutUsuarioInput, calificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type calificacionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: calificacionWhereUniqueInput
    data: XOR<calificacionUpdateWithoutUsuarioInput, calificacionUncheckedUpdateWithoutUsuarioInput>
  }

  export type calificacionUpdateManyWithWhereWithoutUsuarioInput = {
    where: calificacionScalarWhereInput
    data: XOR<calificacionUpdateManyMutationInput, calificacionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type progresoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: progresoWhereUniqueInput
    update: XOR<progresoUpdateWithoutUsuarioInput, progresoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<progresoCreateWithoutUsuarioInput, progresoUncheckedCreateWithoutUsuarioInput>
  }

  export type progresoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: progresoWhereUniqueInput
    data: XOR<progresoUpdateWithoutUsuarioInput, progresoUncheckedUpdateWithoutUsuarioInput>
  }

  export type progresoUpdateManyWithWhereWithoutUsuarioInput = {
    where: progresoScalarWhereInput
    data: XOR<progresoUpdateManyMutationInput, progresoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type usuario_cursoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: usuario_cursoWhereUniqueInput
    update: XOR<usuario_cursoUpdateWithoutUsuarioInput, usuario_cursoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<usuario_cursoCreateWithoutUsuarioInput, usuario_cursoUncheckedCreateWithoutUsuarioInput>
  }

  export type usuario_cursoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: usuario_cursoWhereUniqueInput
    data: XOR<usuario_cursoUpdateWithoutUsuarioInput, usuario_cursoUncheckedUpdateWithoutUsuarioInput>
  }

  export type usuario_cursoUpdateManyWithWhereWithoutUsuarioInput = {
    where: usuario_cursoScalarWhereInput
    data: XOR<usuario_cursoUpdateManyMutationInput, usuario_cursoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type cursoCreateWithoutUsuario_cursoInput = {
    curso_id: string
    nombre: string
    descripcion?: string | null
    calificacion_promedio?: Decimal | DecimalJsLike | number | string | null
    materiales?: string | null
    imagen?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    video_intro?: string | null
    duracion?: number | null
    calificacion?: calificacionCreateNestedManyWithoutCursoInput
    unidad?: unidadCreateNestedManyWithoutCursoInput
  }

  export type cursoUncheckedCreateWithoutUsuario_cursoInput = {
    curso_id: string
    nombre: string
    descripcion?: string | null
    calificacion_promedio?: Decimal | DecimalJsLike | number | string | null
    materiales?: string | null
    imagen?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    video_intro?: string | null
    duracion?: number | null
    calificacion?: calificacionUncheckedCreateNestedManyWithoutCursoInput
    unidad?: unidadUncheckedCreateNestedManyWithoutCursoInput
  }

  export type cursoCreateOrConnectWithoutUsuario_cursoInput = {
    where: cursoWhereUniqueInput
    create: XOR<cursoCreateWithoutUsuario_cursoInput, cursoUncheckedCreateWithoutUsuario_cursoInput>
  }

  export type usuarioCreateWithoutUsuario_cursoInput = {
    nombres?: string | null
    apellidos?: string | null
    dni?: string | null
    celular?: string | null
    correo: string
    usuario?: string | null
    contrasenia?: string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    rol?: string | null
    calificacion?: calificacionCreateNestedManyWithoutUsuarioInput
    progreso?: progresoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutUsuario_cursoInput = {
    user_id?: number
    nombres?: string | null
    apellidos?: string | null
    dni?: string | null
    celular?: string | null
    correo: string
    usuario?: string | null
    contrasenia?: string | null
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    rol?: string | null
    calificacion?: calificacionUncheckedCreateNestedManyWithoutUsuarioInput
    progreso?: progresoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutUsuario_cursoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutUsuario_cursoInput, usuarioUncheckedCreateWithoutUsuario_cursoInput>
  }

  export type cursoUpsertWithoutUsuario_cursoInput = {
    update: XOR<cursoUpdateWithoutUsuario_cursoInput, cursoUncheckedUpdateWithoutUsuario_cursoInput>
    create: XOR<cursoCreateWithoutUsuario_cursoInput, cursoUncheckedCreateWithoutUsuario_cursoInput>
    where?: cursoWhereInput
  }

  export type cursoUpdateToOneWithWhereWithoutUsuario_cursoInput = {
    where?: cursoWhereInput
    data: XOR<cursoUpdateWithoutUsuario_cursoInput, cursoUncheckedUpdateWithoutUsuario_cursoInput>
  }

  export type cursoUpdateWithoutUsuario_cursoInput = {
    curso_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion_promedio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    materiales?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    video_intro?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableIntFieldUpdateOperationsInput | number | null
    calificacion?: calificacionUpdateManyWithoutCursoNestedInput
    unidad?: unidadUpdateManyWithoutCursoNestedInput
  }

  export type cursoUncheckedUpdateWithoutUsuario_cursoInput = {
    curso_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion_promedio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    materiales?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    video_intro?: NullableStringFieldUpdateOperationsInput | string | null
    duracion?: NullableIntFieldUpdateOperationsInput | number | null
    calificacion?: calificacionUncheckedUpdateManyWithoutCursoNestedInput
    unidad?: unidadUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type usuarioUpsertWithoutUsuario_cursoInput = {
    update: XOR<usuarioUpdateWithoutUsuario_cursoInput, usuarioUncheckedUpdateWithoutUsuario_cursoInput>
    create: XOR<usuarioCreateWithoutUsuario_cursoInput, usuarioUncheckedCreateWithoutUsuario_cursoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutUsuario_cursoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutUsuario_cursoInput, usuarioUncheckedUpdateWithoutUsuario_cursoInput>
  }

  export type usuarioUpdateWithoutUsuario_cursoInput = {
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: calificacionUpdateManyWithoutUsuarioNestedInput
    progreso?: progresoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutUsuario_cursoInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: calificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    progreso?: progresoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type calificacionCreateManyCursoInput = {
    calificacion_id?: number
    user_id?: number | null
    calificacion?: Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: Date | string | null
  }

  export type unidadCreateManyCursoInput = {
    unidad_id?: number
    nombre: string
    descripcion?: string | null
    unidad?: string | null
  }

  export type usuario_cursoCreateManyCursoInput = {
    user_id: number
  }

  export type calificacionUpdateWithoutCursoInput = {
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: usuarioUpdateOneWithoutCalificacionNestedInput
  }

  export type calificacionUncheckedUpdateWithoutCursoInput = {
    calificacion_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type calificacionUncheckedUpdateManyWithoutCursoInput = {
    calificacion_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type unidadUpdateWithoutCursoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: NullableStringFieldUpdateOperationsInput | string | null
    leccion?: leccionUpdateManyWithoutUnidadNestedInput
  }

  export type unidadUncheckedUpdateWithoutCursoInput = {
    unidad_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: NullableStringFieldUpdateOperationsInput | string | null
    leccion?: leccionUncheckedUpdateManyWithoutUnidadNestedInput
  }

  export type unidadUncheckedUpdateManyWithoutCursoInput = {
    unidad_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuario_cursoUpdateWithoutCursoInput = {
    usuario?: usuarioUpdateOneRequiredWithoutUsuario_cursoNestedInput
  }

  export type usuario_cursoUncheckedUpdateWithoutCursoInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_cursoUncheckedUpdateManyWithoutCursoInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type progresoCreateManyLeccionInput = {
    user_id?: number | null
    completado?: boolean | null
    progreso_id?: number
  }

  export type progresoUpdateWithoutLeccionInput = {
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usuario?: usuarioUpdateOneWithoutProgresoNestedInput
  }

  export type progresoUncheckedUpdateWithoutLeccionInput = {
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    progreso_id?: IntFieldUpdateOperationsInput | number
  }

  export type progresoUncheckedUpdateManyWithoutLeccionInput = {
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    progreso_id?: IntFieldUpdateOperationsInput | number
  }

  export type leccionCreateManyUnidadInput = {
    leccion_id?: number
    nombre: string
    video_url?: string | null
    material_descarga?: string | null
    leccion?: string | null
  }

  export type leccionUpdateWithoutUnidadInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    material_descarga?: NullableStringFieldUpdateOperationsInput | string | null
    leccion?: NullableStringFieldUpdateOperationsInput | string | null
    progreso?: progresoUpdateManyWithoutLeccionNestedInput
  }

  export type leccionUncheckedUpdateWithoutUnidadInput = {
    leccion_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    material_descarga?: NullableStringFieldUpdateOperationsInput | string | null
    leccion?: NullableStringFieldUpdateOperationsInput | string | null
    progreso?: progresoUncheckedUpdateManyWithoutLeccionNestedInput
  }

  export type leccionUncheckedUpdateManyWithoutUnidadInput = {
    leccion_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    material_descarga?: NullableStringFieldUpdateOperationsInput | string | null
    leccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type calificacionCreateManyUsuarioInput = {
    calificacion_id?: number
    curso_id?: string | null
    calificacion?: Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: Date | string | null
  }

  export type progresoCreateManyUsuarioInput = {
    leccion_id?: number | null
    completado?: boolean | null
    progreso_id?: number
  }

  export type usuario_cursoCreateManyUsuarioInput = {
    curso_id: string
  }

  export type calificacionUpdateWithoutUsuarioInput = {
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curso?: cursoUpdateOneWithoutCalificacionNestedInput
  }

  export type calificacionUncheckedUpdateWithoutUsuarioInput = {
    calificacion_id?: IntFieldUpdateOperationsInput | number
    curso_id?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type calificacionUncheckedUpdateManyWithoutUsuarioInput = {
    calificacion_id?: IntFieldUpdateOperationsInput | number
    curso_id?: NullableStringFieldUpdateOperationsInput | string | null
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_calificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type progresoUpdateWithoutUsuarioInput = {
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    leccion?: leccionUpdateOneWithoutProgresoNestedInput
  }

  export type progresoUncheckedUpdateWithoutUsuarioInput = {
    leccion_id?: NullableIntFieldUpdateOperationsInput | number | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    progreso_id?: IntFieldUpdateOperationsInput | number
  }

  export type progresoUncheckedUpdateManyWithoutUsuarioInput = {
    leccion_id?: NullableIntFieldUpdateOperationsInput | number | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    progreso_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_cursoUpdateWithoutUsuarioInput = {
    curso?: cursoUpdateOneRequiredWithoutUsuario_cursoNestedInput
  }

  export type usuario_cursoUncheckedUpdateWithoutUsuarioInput = {
    curso_id?: StringFieldUpdateOperationsInput | string
  }

  export type usuario_cursoUncheckedUpdateManyWithoutUsuarioInput = {
    curso_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}