
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model ServidorUnitario
 * 
 */
export type ServidorUnitario = $Result.DefaultSelection<Prisma.$ServidorUnitarioPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Profesional
 * 
 */
export type Profesional = $Result.DefaultSelection<Prisma.$ProfesionalPayload>
/**
 * Model Caso
 * 
 */
export type Caso = $Result.DefaultSelection<Prisma.$CasoPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Mensaje
 * 
 */
export type Mensaje = $Result.DefaultSelection<Prisma.$MensajePayload>
/**
 * Model NoticiasConfig
 * 
 */
export type NoticiasConfig = $Result.DefaultSelection<Prisma.$NoticiasConfigPayload>
/**
 * Model FuenteAutomatica
 * 
 */
export type FuenteAutomatica = $Result.DefaultSelection<Prisma.$FuenteAutomaticaPayload>
/**
 * Model ManualArticle
 * 
 */
export type ManualArticle = $Result.DefaultSelection<Prisma.$ManualArticlePayload>
/**
 * Model Archivo
 * 
 */
export type Archivo = $Result.DefaultSelection<Prisma.$ArchivoPayload>
/**
 * Model Reporte
 * 
 */
export type Reporte = $Result.DefaultSelection<Prisma.$ReportePayload>
/**
 * Model Constelacion
 * 
 */
export type Constelacion = $Result.DefaultSelection<Prisma.$ConstelacionPayload>
/**
 * Model Seccion
 * 
 */
export type Seccion = $Result.DefaultSelection<Prisma.$SeccionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  cliente: 'cliente',
  profesional: 'profesional',
  admin: 'admin'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const Remitente: {
  cliente: 'cliente',
  profesional: 'profesional'
};

export type Remitente = (typeof Remitente)[keyof typeof Remitente]


export const SeccionTipo: {
  texto: 'texto',
  guiaLegal: 'guiaLegal',
  manual: 'manual',
  noticiasConfig: 'noticiasConfig'
};

export type SeccionTipo = (typeof SeccionTipo)[keyof typeof SeccionTipo]


export const CasoStatus: {
  abierto: 'abierto',
  enProceso: 'enProceso',
  enEspera: 'enEspera',
  cerrado: 'cerrado'
};

export type CasoStatus = (typeof CasoStatus)[keyof typeof CasoStatus]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type Remitente = $Enums.Remitente

export const Remitente: typeof $Enums.Remitente

export type SeccionTipo = $Enums.SeccionTipo

export const SeccionTipo: typeof $Enums.SeccionTipo

export type CasoStatus = $Enums.CasoStatus

export const CasoStatus: typeof $Enums.CasoStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servidorUnitario`: Exposes CRUD operations for the **ServidorUnitario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServidorUnitarios
    * const servidorUnitarios = await prisma.servidorUnitario.findMany()
    * ```
    */
  get servidorUnitario(): Prisma.ServidorUnitarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profesional`: Exposes CRUD operations for the **Profesional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profesionals
    * const profesionals = await prisma.profesional.findMany()
    * ```
    */
  get profesional(): Prisma.ProfesionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caso`: Exposes CRUD operations for the **Caso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Casos
    * const casos = await prisma.caso.findMany()
    * ```
    */
  get caso(): Prisma.CasoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensaje`: Exposes CRUD operations for the **Mensaje** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensajes
    * const mensajes = await prisma.mensaje.findMany()
    * ```
    */
  get mensaje(): Prisma.MensajeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noticiasConfig`: Exposes CRUD operations for the **NoticiasConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NoticiasConfigs
    * const noticiasConfigs = await prisma.noticiasConfig.findMany()
    * ```
    */
  get noticiasConfig(): Prisma.NoticiasConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fuenteAutomatica`: Exposes CRUD operations for the **FuenteAutomatica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FuenteAutomaticas
    * const fuenteAutomaticas = await prisma.fuenteAutomatica.findMany()
    * ```
    */
  get fuenteAutomatica(): Prisma.FuenteAutomaticaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manualArticle`: Exposes CRUD operations for the **ManualArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManualArticles
    * const manualArticles = await prisma.manualArticle.findMany()
    * ```
    */
  get manualArticle(): Prisma.ManualArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.archivo`: Exposes CRUD operations for the **Archivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Archivos
    * const archivos = await prisma.archivo.findMany()
    * ```
    */
  get archivo(): Prisma.ArchivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reporte`: Exposes CRUD operations for the **Reporte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reportes
    * const reportes = await prisma.reporte.findMany()
    * ```
    */
  get reporte(): Prisma.ReporteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.constelacion`: Exposes CRUD operations for the **Constelacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Constelacions
    * const constelacions = await prisma.constelacion.findMany()
    * ```
    */
  get constelacion(): Prisma.ConstelacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seccion`: Exposes CRUD operations for the **Seccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seccions
    * const seccions = await prisma.seccion.findMany()
    * ```
    */
  get seccion(): Prisma.SeccionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Usuario: 'Usuario',
    ServidorUnitario: 'ServidorUnitario',
    Cliente: 'Cliente',
    Profesional: 'Profesional',
    Caso: 'Caso',
    Chat: 'Chat',
    Mensaje: 'Mensaje',
    NoticiasConfig: 'NoticiasConfig',
    FuenteAutomatica: 'FuenteAutomatica',
    ManualArticle: 'ManualArticle',
    Archivo: 'Archivo',
    Reporte: 'Reporte',
    Constelacion: 'Constelacion',
    Seccion: 'Seccion'
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
      modelProps: "usuario" | "servidorUnitario" | "cliente" | "profesional" | "caso" | "chat" | "mensaje" | "noticiasConfig" | "fuenteAutomatica" | "manualArticle" | "archivo" | "reporte" | "constelacion" | "seccion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      ServidorUnitario: {
        payload: Prisma.$ServidorUnitarioPayload<ExtArgs>
        fields: Prisma.ServidorUnitarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServidorUnitarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServidorUnitarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServidorUnitarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServidorUnitarioPayload>
          }
          findFirst: {
            args: Prisma.ServidorUnitarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServidorUnitarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServidorUnitarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServidorUnitarioPayload>
          }
          findMany: {
            args: Prisma.ServidorUnitarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServidorUnitarioPayload>[]
          }
          create: {
            args: Prisma.ServidorUnitarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServidorUnitarioPayload>
          }
          createMany: {
            args: Prisma.ServidorUnitarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServidorUnitarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServidorUnitarioPayload>[]
          }
          delete: {
            args: Prisma.ServidorUnitarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServidorUnitarioPayload>
          }
          update: {
            args: Prisma.ServidorUnitarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServidorUnitarioPayload>
          }
          deleteMany: {
            args: Prisma.ServidorUnitarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServidorUnitarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServidorUnitarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServidorUnitarioPayload>[]
          }
          upsert: {
            args: Prisma.ServidorUnitarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServidorUnitarioPayload>
          }
          aggregate: {
            args: Prisma.ServidorUnitarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServidorUnitario>
          }
          groupBy: {
            args: Prisma.ServidorUnitarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServidorUnitarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServidorUnitarioCountArgs<ExtArgs>
            result: $Utils.Optional<ServidorUnitarioCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Profesional: {
        payload: Prisma.$ProfesionalPayload<ExtArgs>
        fields: Prisma.ProfesionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfesionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfesionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          findFirst: {
            args: Prisma.ProfesionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfesionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          findMany: {
            args: Prisma.ProfesionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>[]
          }
          create: {
            args: Prisma.ProfesionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          createMany: {
            args: Prisma.ProfesionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfesionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>[]
          }
          delete: {
            args: Prisma.ProfesionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          update: {
            args: Prisma.ProfesionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          deleteMany: {
            args: Prisma.ProfesionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfesionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfesionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>[]
          }
          upsert: {
            args: Prisma.ProfesionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          aggregate: {
            args: Prisma.ProfesionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfesional>
          }
          groupBy: {
            args: Prisma.ProfesionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfesionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfesionalCountArgs<ExtArgs>
            result: $Utils.Optional<ProfesionalCountAggregateOutputType> | number
          }
        }
      }
      Caso: {
        payload: Prisma.$CasoPayload<ExtArgs>
        fields: Prisma.CasoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>
          }
          findFirst: {
            args: Prisma.CasoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>
          }
          findMany: {
            args: Prisma.CasoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>[]
          }
          create: {
            args: Prisma.CasoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>
          }
          createMany: {
            args: Prisma.CasoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>[]
          }
          delete: {
            args: Prisma.CasoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>
          }
          update: {
            args: Prisma.CasoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>
          }
          deleteMany: {
            args: Prisma.CasoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CasoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>[]
          }
          upsert: {
            args: Prisma.CasoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>
          }
          aggregate: {
            args: Prisma.CasoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaso>
          }
          groupBy: {
            args: Prisma.CasoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasoCountArgs<ExtArgs>
            result: $Utils.Optional<CasoCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Mensaje: {
        payload: Prisma.$MensajePayload<ExtArgs>
        fields: Prisma.MensajeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensajeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensajeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          findFirst: {
            args: Prisma.MensajeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensajeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          findMany: {
            args: Prisma.MensajeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          create: {
            args: Prisma.MensajeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          createMany: {
            args: Prisma.MensajeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensajeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          delete: {
            args: Prisma.MensajeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          update: {
            args: Prisma.MensajeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          deleteMany: {
            args: Prisma.MensajeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensajeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MensajeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          upsert: {
            args: Prisma.MensajeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          aggregate: {
            args: Prisma.MensajeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensaje>
          }
          groupBy: {
            args: Prisma.MensajeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensajeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensajeCountArgs<ExtArgs>
            result: $Utils.Optional<MensajeCountAggregateOutputType> | number
          }
        }
      }
      NoticiasConfig: {
        payload: Prisma.$NoticiasConfigPayload<ExtArgs>
        fields: Prisma.NoticiasConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticiasConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticiasConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasConfigPayload>
          }
          findFirst: {
            args: Prisma.NoticiasConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticiasConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasConfigPayload>
          }
          findMany: {
            args: Prisma.NoticiasConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasConfigPayload>[]
          }
          create: {
            args: Prisma.NoticiasConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasConfigPayload>
          }
          createMany: {
            args: Prisma.NoticiasConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoticiasConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasConfigPayload>[]
          }
          delete: {
            args: Prisma.NoticiasConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasConfigPayload>
          }
          update: {
            args: Prisma.NoticiasConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasConfigPayload>
          }
          deleteMany: {
            args: Prisma.NoticiasConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticiasConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoticiasConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasConfigPayload>[]
          }
          upsert: {
            args: Prisma.NoticiasConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasConfigPayload>
          }
          aggregate: {
            args: Prisma.NoticiasConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoticiasConfig>
          }
          groupBy: {
            args: Prisma.NoticiasConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticiasConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticiasConfigCountArgs<ExtArgs>
            result: $Utils.Optional<NoticiasConfigCountAggregateOutputType> | number
          }
        }
      }
      FuenteAutomatica: {
        payload: Prisma.$FuenteAutomaticaPayload<ExtArgs>
        fields: Prisma.FuenteAutomaticaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuenteAutomaticaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuenteAutomaticaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuenteAutomaticaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuenteAutomaticaPayload>
          }
          findFirst: {
            args: Prisma.FuenteAutomaticaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuenteAutomaticaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuenteAutomaticaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuenteAutomaticaPayload>
          }
          findMany: {
            args: Prisma.FuenteAutomaticaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuenteAutomaticaPayload>[]
          }
          create: {
            args: Prisma.FuenteAutomaticaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuenteAutomaticaPayload>
          }
          createMany: {
            args: Prisma.FuenteAutomaticaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuenteAutomaticaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuenteAutomaticaPayload>[]
          }
          delete: {
            args: Prisma.FuenteAutomaticaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuenteAutomaticaPayload>
          }
          update: {
            args: Prisma.FuenteAutomaticaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuenteAutomaticaPayload>
          }
          deleteMany: {
            args: Prisma.FuenteAutomaticaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuenteAutomaticaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuenteAutomaticaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuenteAutomaticaPayload>[]
          }
          upsert: {
            args: Prisma.FuenteAutomaticaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuenteAutomaticaPayload>
          }
          aggregate: {
            args: Prisma.FuenteAutomaticaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuenteAutomatica>
          }
          groupBy: {
            args: Prisma.FuenteAutomaticaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuenteAutomaticaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuenteAutomaticaCountArgs<ExtArgs>
            result: $Utils.Optional<FuenteAutomaticaCountAggregateOutputType> | number
          }
        }
      }
      ManualArticle: {
        payload: Prisma.$ManualArticlePayload<ExtArgs>
        fields: Prisma.ManualArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManualArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManualArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualArticlePayload>
          }
          findFirst: {
            args: Prisma.ManualArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManualArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualArticlePayload>
          }
          findMany: {
            args: Prisma.ManualArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualArticlePayload>[]
          }
          create: {
            args: Prisma.ManualArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualArticlePayload>
          }
          createMany: {
            args: Prisma.ManualArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManualArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualArticlePayload>[]
          }
          delete: {
            args: Prisma.ManualArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualArticlePayload>
          }
          update: {
            args: Prisma.ManualArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualArticlePayload>
          }
          deleteMany: {
            args: Prisma.ManualArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManualArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManualArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualArticlePayload>[]
          }
          upsert: {
            args: Prisma.ManualArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualArticlePayload>
          }
          aggregate: {
            args: Prisma.ManualArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManualArticle>
          }
          groupBy: {
            args: Prisma.ManualArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManualArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManualArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ManualArticleCountAggregateOutputType> | number
          }
        }
      }
      Archivo: {
        payload: Prisma.$ArchivoPayload<ExtArgs>
        fields: Prisma.ArchivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArchivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArchivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>
          }
          findFirst: {
            args: Prisma.ArchivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArchivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>
          }
          findMany: {
            args: Prisma.ArchivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>[]
          }
          create: {
            args: Prisma.ArchivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>
          }
          createMany: {
            args: Prisma.ArchivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArchivoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>[]
          }
          delete: {
            args: Prisma.ArchivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>
          }
          update: {
            args: Prisma.ArchivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>
          }
          deleteMany: {
            args: Prisma.ArchivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArchivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArchivoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>[]
          }
          upsert: {
            args: Prisma.ArchivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>
          }
          aggregate: {
            args: Prisma.ArchivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchivo>
          }
          groupBy: {
            args: Prisma.ArchivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArchivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArchivoCountArgs<ExtArgs>
            result: $Utils.Optional<ArchivoCountAggregateOutputType> | number
          }
        }
      }
      Reporte: {
        payload: Prisma.$ReportePayload<ExtArgs>
        fields: Prisma.ReporteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReporteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReporteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          findFirst: {
            args: Prisma.ReporteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReporteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          findMany: {
            args: Prisma.ReporteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>[]
          }
          create: {
            args: Prisma.ReporteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          createMany: {
            args: Prisma.ReporteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReporteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>[]
          }
          delete: {
            args: Prisma.ReporteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          update: {
            args: Prisma.ReporteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          deleteMany: {
            args: Prisma.ReporteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReporteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReporteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>[]
          }
          upsert: {
            args: Prisma.ReporteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          aggregate: {
            args: Prisma.ReporteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReporte>
          }
          groupBy: {
            args: Prisma.ReporteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReporteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReporteCountArgs<ExtArgs>
            result: $Utils.Optional<ReporteCountAggregateOutputType> | number
          }
        }
      }
      Constelacion: {
        payload: Prisma.$ConstelacionPayload<ExtArgs>
        fields: Prisma.ConstelacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConstelacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstelacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConstelacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstelacionPayload>
          }
          findFirst: {
            args: Prisma.ConstelacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstelacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConstelacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstelacionPayload>
          }
          findMany: {
            args: Prisma.ConstelacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstelacionPayload>[]
          }
          create: {
            args: Prisma.ConstelacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstelacionPayload>
          }
          createMany: {
            args: Prisma.ConstelacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConstelacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstelacionPayload>[]
          }
          delete: {
            args: Prisma.ConstelacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstelacionPayload>
          }
          update: {
            args: Prisma.ConstelacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstelacionPayload>
          }
          deleteMany: {
            args: Prisma.ConstelacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConstelacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConstelacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstelacionPayload>[]
          }
          upsert: {
            args: Prisma.ConstelacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstelacionPayload>
          }
          aggregate: {
            args: Prisma.ConstelacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConstelacion>
          }
          groupBy: {
            args: Prisma.ConstelacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConstelacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConstelacionCountArgs<ExtArgs>
            result: $Utils.Optional<ConstelacionCountAggregateOutputType> | number
          }
        }
      }
      Seccion: {
        payload: Prisma.$SeccionPayload<ExtArgs>
        fields: Prisma.SeccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          findFirst: {
            args: Prisma.SeccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          findMany: {
            args: Prisma.SeccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>[]
          }
          create: {
            args: Prisma.SeccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          createMany: {
            args: Prisma.SeccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeccionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>[]
          }
          delete: {
            args: Prisma.SeccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          update: {
            args: Prisma.SeccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          deleteMany: {
            args: Prisma.SeccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeccionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>[]
          }
          upsert: {
            args: Prisma.SeccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          aggregate: {
            args: Prisma.SeccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeccion>
          }
          groupBy: {
            args: Prisma.SeccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeccionCountArgs<ExtArgs>
            result: $Utils.Optional<SeccionCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    servidorUnitario?: ServidorUnitarioOmit
    cliente?: ClienteOmit
    profesional?: ProfesionalOmit
    caso?: CasoOmit
    chat?: ChatOmit
    mensaje?: MensajeOmit
    noticiasConfig?: NoticiasConfigOmit
    fuenteAutomatica?: FuenteAutomaticaOmit
    manualArticle?: ManualArticleOmit
    archivo?: ArchivoOmit
    reporte?: ReporteOmit
    constelacion?: ConstelacionOmit
    seccion?: SeccionOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    Clientes: number
    Profesionales: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clientes?: boolean | UsuarioCountOutputTypeCountClientesArgs
    Profesionales?: boolean | UsuarioCountOutputTypeCountProfesionalesArgs
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
  export type UsuarioCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProfesionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfesionalWhereInput
  }


  /**
   * Count Type ServidorUnitarioCountOutputType
   */

  export type ServidorUnitarioCountOutputType = {
    secciones: number
    fuentesAutomaticas: number
    manualArticles: number
    clientes: number
    profesionales: number
    casos: number
  }

  export type ServidorUnitarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secciones?: boolean | ServidorUnitarioCountOutputTypeCountSeccionesArgs
    fuentesAutomaticas?: boolean | ServidorUnitarioCountOutputTypeCountFuentesAutomaticasArgs
    manualArticles?: boolean | ServidorUnitarioCountOutputTypeCountManualArticlesArgs
    clientes?: boolean | ServidorUnitarioCountOutputTypeCountClientesArgs
    profesionales?: boolean | ServidorUnitarioCountOutputTypeCountProfesionalesArgs
    casos?: boolean | ServidorUnitarioCountOutputTypeCountCasosArgs
  }

  // Custom InputTypes
  /**
   * ServidorUnitarioCountOutputType without action
   */
  export type ServidorUnitarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServidorUnitarioCountOutputType
     */
    select?: ServidorUnitarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServidorUnitarioCountOutputType without action
   */
  export type ServidorUnitarioCountOutputTypeCountSeccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeccionWhereInput
  }

  /**
   * ServidorUnitarioCountOutputType without action
   */
  export type ServidorUnitarioCountOutputTypeCountFuentesAutomaticasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuenteAutomaticaWhereInput
  }

  /**
   * ServidorUnitarioCountOutputType without action
   */
  export type ServidorUnitarioCountOutputTypeCountManualArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManualArticleWhereInput
  }

  /**
   * ServidorUnitarioCountOutputType without action
   */
  export type ServidorUnitarioCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }

  /**
   * ServidorUnitarioCountOutputType without action
   */
  export type ServidorUnitarioCountOutputTypeCountProfesionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfesionalWhereInput
  }

  /**
   * ServidorUnitarioCountOutputType without action
   */
  export type ServidorUnitarioCountOutputTypeCountCasosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    casos: number
    archivos: number
    reportes: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casos?: boolean | ClienteCountOutputTypeCountCasosArgs
    archivos?: boolean | ClienteCountOutputTypeCountArchivosArgs
    reportes?: boolean | ClienteCountOutputTypeCountReportesArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountCasosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountArchivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchivoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountReportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReporteWhereInput
  }


  /**
   * Count Type ProfesionalCountOutputType
   */

  export type ProfesionalCountOutputType = {
    casos: number
    archivos: number
  }

  export type ProfesionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casos?: boolean | ProfesionalCountOutputTypeCountCasosArgs
    archivos?: boolean | ProfesionalCountOutputTypeCountArchivosArgs
  }

  // Custom InputTypes
  /**
   * ProfesionalCountOutputType without action
   */
  export type ProfesionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfesionalCountOutputType
     */
    select?: ProfesionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfesionalCountOutputType without action
   */
  export type ProfesionalCountOutputTypeCountCasosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasoWhereInput
  }

  /**
   * ProfesionalCountOutputType without action
   */
  export type ProfesionalCountOutputTypeCountArchivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchivoWhereInput
  }


  /**
   * Count Type CasoCountOutputType
   */

  export type CasoCountOutputType = {
    archivos: number
    reportes: number
  }

  export type CasoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archivos?: boolean | CasoCountOutputTypeCountArchivosArgs
    reportes?: boolean | CasoCountOutputTypeCountReportesArgs
  }

  // Custom InputTypes
  /**
   * CasoCountOutputType without action
   */
  export type CasoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoCountOutputType
     */
    select?: CasoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CasoCountOutputType without action
   */
  export type CasoCountOutputTypeCountArchivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchivoWhereInput
  }

  /**
   * CasoCountOutputType without action
   */
  export type CasoCountOutputTypeCountReportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReporteWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    mensajes: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensajes?: boolean | ChatCountOutputTypeCountMensajesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
  }


  /**
   * Count Type ConstelacionCountOutputType
   */

  export type ConstelacionCountOutputType = {
    servidores: number
  }

  export type ConstelacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidores?: boolean | ConstelacionCountOutputTypeCountServidoresArgs
  }

  // Custom InputTypes
  /**
   * ConstelacionCountOutputType without action
   */
  export type ConstelacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstelacionCountOutputType
     */
    select?: ConstelacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConstelacionCountOutputType without action
   */
  export type ConstelacionCountOutputTypeCountServidoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServidorUnitarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    rol: $Enums.Rol | null
    firstName: string | null
    lastName: string | null
    telefono: string | null
    direccion: string | null
    avatarUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    rol: $Enums.Rol | null
    firstName: string | null
    lastName: string | null
    telefono: string | null
    direccion: string | null
    avatarUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    rol: number
    firstName: number
    lastName: number
    telefono: number
    direccion: number
    avatarUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    lastLoginAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    rol?: true
    firstName?: true
    lastName?: true
    telefono?: true
    direccion?: true
    avatarUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    rol?: true
    firstName?: true
    lastName?: true
    telefono?: true
    direccion?: true
    avatarUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    rol?: true
    firstName?: true
    lastName?: true
    telefono?: true
    direccion?: true
    avatarUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
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




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    rol: $Enums.Rol
    firstName: string
    lastName: string
    telefono: string | null
    direccion: string | null
    avatarUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    lastLoginAt: Date | null
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
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


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    rol?: boolean
    firstName?: boolean
    lastName?: boolean
    telefono?: boolean
    direccion?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    Clientes?: boolean | Usuario$ClientesArgs<ExtArgs>
    Profesionales?: boolean | Usuario$ProfesionalesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    rol?: boolean
    firstName?: boolean
    lastName?: boolean
    telefono?: boolean
    direccion?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    rol?: boolean
    firstName?: boolean
    lastName?: boolean
    telefono?: boolean
    direccion?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    rol?: boolean
    firstName?: boolean
    lastName?: boolean
    telefono?: boolean
    direccion?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "rol" | "firstName" | "lastName" | "telefono" | "direccion" | "avatarUrl" | "isActive" | "createdAt" | "updatedAt" | "lastLoginAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clientes?: boolean | Usuario$ClientesArgs<ExtArgs>
    Profesionales?: boolean | Usuario$ProfesionalesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      Clientes: Prisma.$ClientePayload<ExtArgs>[]
      Profesionales: Prisma.$ProfesionalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      rol: $Enums.Rol
      firstName: string
      lastName: string
      telefono: string | null
      direccion: string | null
      avatarUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      lastLoginAt: Date | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
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
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
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
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
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
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
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
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Clientes<T extends Usuario$ClientesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ClientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Profesionales<T extends Usuario$ProfesionalesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ProfesionalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly firstName: FieldRef<"Usuario", 'String'>
    readonly lastName: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly direccion: FieldRef<"Usuario", 'String'>
    readonly avatarUrl: FieldRef<"Usuario", 'String'>
    readonly isActive: FieldRef<"Usuario", 'Boolean'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
    readonly lastLoginAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.Clientes
   */
  export type Usuario$ClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Usuario.Profesionales
   */
  export type Usuario$ProfesionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    where?: ProfesionalWhereInput
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    cursor?: ProfesionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfesionalScalarFieldEnum | ProfesionalScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model ServidorUnitario
   */

  export type AggregateServidorUnitario = {
    _count: ServidorUnitarioCountAggregateOutputType | null
    _min: ServidorUnitarioMinAggregateOutputType | null
    _max: ServidorUnitarioMaxAggregateOutputType | null
  }

  export type ServidorUnitarioMinAggregateOutputType = {
    id: string | null
    dominio: string | null
    nombre: string | null
    apiToken: string | null
    requiereActualizacion: boolean | null
    constelacionId: string | null
  }

  export type ServidorUnitarioMaxAggregateOutputType = {
    id: string | null
    dominio: string | null
    nombre: string | null
    apiToken: string | null
    requiereActualizacion: boolean | null
    constelacionId: string | null
  }

  export type ServidorUnitarioCountAggregateOutputType = {
    id: number
    dominio: number
    nombre: number
    apiToken: number
    requiereActualizacion: number
    constelacionId: number
    _all: number
  }


  export type ServidorUnitarioMinAggregateInputType = {
    id?: true
    dominio?: true
    nombre?: true
    apiToken?: true
    requiereActualizacion?: true
    constelacionId?: true
  }

  export type ServidorUnitarioMaxAggregateInputType = {
    id?: true
    dominio?: true
    nombre?: true
    apiToken?: true
    requiereActualizacion?: true
    constelacionId?: true
  }

  export type ServidorUnitarioCountAggregateInputType = {
    id?: true
    dominio?: true
    nombre?: true
    apiToken?: true
    requiereActualizacion?: true
    constelacionId?: true
    _all?: true
  }

  export type ServidorUnitarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServidorUnitario to aggregate.
     */
    where?: ServidorUnitarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServidorUnitarios to fetch.
     */
    orderBy?: ServidorUnitarioOrderByWithRelationInput | ServidorUnitarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServidorUnitarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServidorUnitarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServidorUnitarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServidorUnitarios
    **/
    _count?: true | ServidorUnitarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServidorUnitarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServidorUnitarioMaxAggregateInputType
  }

  export type GetServidorUnitarioAggregateType<T extends ServidorUnitarioAggregateArgs> = {
        [P in keyof T & keyof AggregateServidorUnitario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServidorUnitario[P]>
      : GetScalarType<T[P], AggregateServidorUnitario[P]>
  }




  export type ServidorUnitarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServidorUnitarioWhereInput
    orderBy?: ServidorUnitarioOrderByWithAggregationInput | ServidorUnitarioOrderByWithAggregationInput[]
    by: ServidorUnitarioScalarFieldEnum[] | ServidorUnitarioScalarFieldEnum
    having?: ServidorUnitarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServidorUnitarioCountAggregateInputType | true
    _min?: ServidorUnitarioMinAggregateInputType
    _max?: ServidorUnitarioMaxAggregateInputType
  }

  export type ServidorUnitarioGroupByOutputType = {
    id: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion: boolean
    constelacionId: string
    _count: ServidorUnitarioCountAggregateOutputType | null
    _min: ServidorUnitarioMinAggregateOutputType | null
    _max: ServidorUnitarioMaxAggregateOutputType | null
  }

  type GetServidorUnitarioGroupByPayload<T extends ServidorUnitarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServidorUnitarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServidorUnitarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServidorUnitarioGroupByOutputType[P]>
            : GetScalarType<T[P], ServidorUnitarioGroupByOutputType[P]>
        }
      >
    >


  export type ServidorUnitarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dominio?: boolean
    nombre?: boolean
    apiToken?: boolean
    requiereActualizacion?: boolean
    constelacionId?: boolean
    constelacion?: boolean | ConstelacionDefaultArgs<ExtArgs>
    secciones?: boolean | ServidorUnitario$seccionesArgs<ExtArgs>
    noticiasConfig?: boolean | ServidorUnitario$noticiasConfigArgs<ExtArgs>
    fuentesAutomaticas?: boolean | ServidorUnitario$fuentesAutomaticasArgs<ExtArgs>
    manualArticles?: boolean | ServidorUnitario$manualArticlesArgs<ExtArgs>
    clientes?: boolean | ServidorUnitario$clientesArgs<ExtArgs>
    profesionales?: boolean | ServidorUnitario$profesionalesArgs<ExtArgs>
    casos?: boolean | ServidorUnitario$casosArgs<ExtArgs>
    _count?: boolean | ServidorUnitarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servidorUnitario"]>

  export type ServidorUnitarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dominio?: boolean
    nombre?: boolean
    apiToken?: boolean
    requiereActualizacion?: boolean
    constelacionId?: boolean
    constelacion?: boolean | ConstelacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servidorUnitario"]>

  export type ServidorUnitarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dominio?: boolean
    nombre?: boolean
    apiToken?: boolean
    requiereActualizacion?: boolean
    constelacionId?: boolean
    constelacion?: boolean | ConstelacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servidorUnitario"]>

  export type ServidorUnitarioSelectScalar = {
    id?: boolean
    dominio?: boolean
    nombre?: boolean
    apiToken?: boolean
    requiereActualizacion?: boolean
    constelacionId?: boolean
  }

  export type ServidorUnitarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dominio" | "nombre" | "apiToken" | "requiereActualizacion" | "constelacionId", ExtArgs["result"]["servidorUnitario"]>
  export type ServidorUnitarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constelacion?: boolean | ConstelacionDefaultArgs<ExtArgs>
    secciones?: boolean | ServidorUnitario$seccionesArgs<ExtArgs>
    noticiasConfig?: boolean | ServidorUnitario$noticiasConfigArgs<ExtArgs>
    fuentesAutomaticas?: boolean | ServidorUnitario$fuentesAutomaticasArgs<ExtArgs>
    manualArticles?: boolean | ServidorUnitario$manualArticlesArgs<ExtArgs>
    clientes?: boolean | ServidorUnitario$clientesArgs<ExtArgs>
    profesionales?: boolean | ServidorUnitario$profesionalesArgs<ExtArgs>
    casos?: boolean | ServidorUnitario$casosArgs<ExtArgs>
    _count?: boolean | ServidorUnitarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServidorUnitarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constelacion?: boolean | ConstelacionDefaultArgs<ExtArgs>
  }
  export type ServidorUnitarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constelacion?: boolean | ConstelacionDefaultArgs<ExtArgs>
  }

  export type $ServidorUnitarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServidorUnitario"
    objects: {
      constelacion: Prisma.$ConstelacionPayload<ExtArgs>
      secciones: Prisma.$SeccionPayload<ExtArgs>[]
      noticiasConfig: Prisma.$NoticiasConfigPayload<ExtArgs> | null
      fuentesAutomaticas: Prisma.$FuenteAutomaticaPayload<ExtArgs>[]
      manualArticles: Prisma.$ManualArticlePayload<ExtArgs>[]
      clientes: Prisma.$ClientePayload<ExtArgs>[]
      profesionales: Prisma.$ProfesionalPayload<ExtArgs>[]
      casos: Prisma.$CasoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dominio: string
      nombre: string
      apiToken: string
      requiereActualizacion: boolean
      constelacionId: string
    }, ExtArgs["result"]["servidorUnitario"]>
    composites: {}
  }

  type ServidorUnitarioGetPayload<S extends boolean | null | undefined | ServidorUnitarioDefaultArgs> = $Result.GetResult<Prisma.$ServidorUnitarioPayload, S>

  type ServidorUnitarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServidorUnitarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServidorUnitarioCountAggregateInputType | true
    }

  export interface ServidorUnitarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServidorUnitario'], meta: { name: 'ServidorUnitario' } }
    /**
     * Find zero or one ServidorUnitario that matches the filter.
     * @param {ServidorUnitarioFindUniqueArgs} args - Arguments to find a ServidorUnitario
     * @example
     * // Get one ServidorUnitario
     * const servidorUnitario = await prisma.servidorUnitario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServidorUnitarioFindUniqueArgs>(args: SelectSubset<T, ServidorUnitarioFindUniqueArgs<ExtArgs>>): Prisma__ServidorUnitarioClient<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServidorUnitario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServidorUnitarioFindUniqueOrThrowArgs} args - Arguments to find a ServidorUnitario
     * @example
     * // Get one ServidorUnitario
     * const servidorUnitario = await prisma.servidorUnitario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServidorUnitarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ServidorUnitarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServidorUnitarioClient<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServidorUnitario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServidorUnitarioFindFirstArgs} args - Arguments to find a ServidorUnitario
     * @example
     * // Get one ServidorUnitario
     * const servidorUnitario = await prisma.servidorUnitario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServidorUnitarioFindFirstArgs>(args?: SelectSubset<T, ServidorUnitarioFindFirstArgs<ExtArgs>>): Prisma__ServidorUnitarioClient<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServidorUnitario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServidorUnitarioFindFirstOrThrowArgs} args - Arguments to find a ServidorUnitario
     * @example
     * // Get one ServidorUnitario
     * const servidorUnitario = await prisma.servidorUnitario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServidorUnitarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ServidorUnitarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServidorUnitarioClient<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServidorUnitarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServidorUnitarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServidorUnitarios
     * const servidorUnitarios = await prisma.servidorUnitario.findMany()
     * 
     * // Get first 10 ServidorUnitarios
     * const servidorUnitarios = await prisma.servidorUnitario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servidorUnitarioWithIdOnly = await prisma.servidorUnitario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServidorUnitarioFindManyArgs>(args?: SelectSubset<T, ServidorUnitarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServidorUnitario.
     * @param {ServidorUnitarioCreateArgs} args - Arguments to create a ServidorUnitario.
     * @example
     * // Create one ServidorUnitario
     * const ServidorUnitario = await prisma.servidorUnitario.create({
     *   data: {
     *     // ... data to create a ServidorUnitario
     *   }
     * })
     * 
     */
    create<T extends ServidorUnitarioCreateArgs>(args: SelectSubset<T, ServidorUnitarioCreateArgs<ExtArgs>>): Prisma__ServidorUnitarioClient<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServidorUnitarios.
     * @param {ServidorUnitarioCreateManyArgs} args - Arguments to create many ServidorUnitarios.
     * @example
     * // Create many ServidorUnitarios
     * const servidorUnitario = await prisma.servidorUnitario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServidorUnitarioCreateManyArgs>(args?: SelectSubset<T, ServidorUnitarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServidorUnitarios and returns the data saved in the database.
     * @param {ServidorUnitarioCreateManyAndReturnArgs} args - Arguments to create many ServidorUnitarios.
     * @example
     * // Create many ServidorUnitarios
     * const servidorUnitario = await prisma.servidorUnitario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServidorUnitarios and only return the `id`
     * const servidorUnitarioWithIdOnly = await prisma.servidorUnitario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServidorUnitarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ServidorUnitarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServidorUnitario.
     * @param {ServidorUnitarioDeleteArgs} args - Arguments to delete one ServidorUnitario.
     * @example
     * // Delete one ServidorUnitario
     * const ServidorUnitario = await prisma.servidorUnitario.delete({
     *   where: {
     *     // ... filter to delete one ServidorUnitario
     *   }
     * })
     * 
     */
    delete<T extends ServidorUnitarioDeleteArgs>(args: SelectSubset<T, ServidorUnitarioDeleteArgs<ExtArgs>>): Prisma__ServidorUnitarioClient<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServidorUnitario.
     * @param {ServidorUnitarioUpdateArgs} args - Arguments to update one ServidorUnitario.
     * @example
     * // Update one ServidorUnitario
     * const servidorUnitario = await prisma.servidorUnitario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServidorUnitarioUpdateArgs>(args: SelectSubset<T, ServidorUnitarioUpdateArgs<ExtArgs>>): Prisma__ServidorUnitarioClient<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServidorUnitarios.
     * @param {ServidorUnitarioDeleteManyArgs} args - Arguments to filter ServidorUnitarios to delete.
     * @example
     * // Delete a few ServidorUnitarios
     * const { count } = await prisma.servidorUnitario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServidorUnitarioDeleteManyArgs>(args?: SelectSubset<T, ServidorUnitarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServidorUnitarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServidorUnitarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServidorUnitarios
     * const servidorUnitario = await prisma.servidorUnitario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServidorUnitarioUpdateManyArgs>(args: SelectSubset<T, ServidorUnitarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServidorUnitarios and returns the data updated in the database.
     * @param {ServidorUnitarioUpdateManyAndReturnArgs} args - Arguments to update many ServidorUnitarios.
     * @example
     * // Update many ServidorUnitarios
     * const servidorUnitario = await prisma.servidorUnitario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServidorUnitarios and only return the `id`
     * const servidorUnitarioWithIdOnly = await prisma.servidorUnitario.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ServidorUnitarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ServidorUnitarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServidorUnitario.
     * @param {ServidorUnitarioUpsertArgs} args - Arguments to update or create a ServidorUnitario.
     * @example
     * // Update or create a ServidorUnitario
     * const servidorUnitario = await prisma.servidorUnitario.upsert({
     *   create: {
     *     // ... data to create a ServidorUnitario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServidorUnitario we want to update
     *   }
     * })
     */
    upsert<T extends ServidorUnitarioUpsertArgs>(args: SelectSubset<T, ServidorUnitarioUpsertArgs<ExtArgs>>): Prisma__ServidorUnitarioClient<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServidorUnitarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServidorUnitarioCountArgs} args - Arguments to filter ServidorUnitarios to count.
     * @example
     * // Count the number of ServidorUnitarios
     * const count = await prisma.servidorUnitario.count({
     *   where: {
     *     // ... the filter for the ServidorUnitarios we want to count
     *   }
     * })
    **/
    count<T extends ServidorUnitarioCountArgs>(
      args?: Subset<T, ServidorUnitarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServidorUnitarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServidorUnitario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServidorUnitarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServidorUnitarioAggregateArgs>(args: Subset<T, ServidorUnitarioAggregateArgs>): Prisma.PrismaPromise<GetServidorUnitarioAggregateType<T>>

    /**
     * Group by ServidorUnitario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServidorUnitarioGroupByArgs} args - Group by arguments.
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
      T extends ServidorUnitarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServidorUnitarioGroupByArgs['orderBy'] }
        : { orderBy?: ServidorUnitarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServidorUnitarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServidorUnitarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServidorUnitario model
   */
  readonly fields: ServidorUnitarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServidorUnitario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServidorUnitarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    constelacion<T extends ConstelacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConstelacionDefaultArgs<ExtArgs>>): Prisma__ConstelacionClient<$Result.GetResult<Prisma.$ConstelacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    secciones<T extends ServidorUnitario$seccionesArgs<ExtArgs> = {}>(args?: Subset<T, ServidorUnitario$seccionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    noticiasConfig<T extends ServidorUnitario$noticiasConfigArgs<ExtArgs> = {}>(args?: Subset<T, ServidorUnitario$noticiasConfigArgs<ExtArgs>>): Prisma__NoticiasConfigClient<$Result.GetResult<Prisma.$NoticiasConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    fuentesAutomaticas<T extends ServidorUnitario$fuentesAutomaticasArgs<ExtArgs> = {}>(args?: Subset<T, ServidorUnitario$fuentesAutomaticasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuenteAutomaticaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    manualArticles<T extends ServidorUnitario$manualArticlesArgs<ExtArgs> = {}>(args?: Subset<T, ServidorUnitario$manualArticlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManualArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clientes<T extends ServidorUnitario$clientesArgs<ExtArgs> = {}>(args?: Subset<T, ServidorUnitario$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profesionales<T extends ServidorUnitario$profesionalesArgs<ExtArgs> = {}>(args?: Subset<T, ServidorUnitario$profesionalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    casos<T extends ServidorUnitario$casosArgs<ExtArgs> = {}>(args?: Subset<T, ServidorUnitario$casosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ServidorUnitario model
   */
  interface ServidorUnitarioFieldRefs {
    readonly id: FieldRef<"ServidorUnitario", 'String'>
    readonly dominio: FieldRef<"ServidorUnitario", 'String'>
    readonly nombre: FieldRef<"ServidorUnitario", 'String'>
    readonly apiToken: FieldRef<"ServidorUnitario", 'String'>
    readonly requiereActualizacion: FieldRef<"ServidorUnitario", 'Boolean'>
    readonly constelacionId: FieldRef<"ServidorUnitario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServidorUnitario findUnique
   */
  export type ServidorUnitarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServidorUnitario
     */
    select?: ServidorUnitarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServidorUnitario
     */
    omit?: ServidorUnitarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServidorUnitarioInclude<ExtArgs> | null
    /**
     * Filter, which ServidorUnitario to fetch.
     */
    where: ServidorUnitarioWhereUniqueInput
  }

  /**
   * ServidorUnitario findUniqueOrThrow
   */
  export type ServidorUnitarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServidorUnitario
     */
    select?: ServidorUnitarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServidorUnitario
     */
    omit?: ServidorUnitarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServidorUnitarioInclude<ExtArgs> | null
    /**
     * Filter, which ServidorUnitario to fetch.
     */
    where: ServidorUnitarioWhereUniqueInput
  }

  /**
   * ServidorUnitario findFirst
   */
  export type ServidorUnitarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServidorUnitario
     */
    select?: ServidorUnitarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServidorUnitario
     */
    omit?: ServidorUnitarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServidorUnitarioInclude<ExtArgs> | null
    /**
     * Filter, which ServidorUnitario to fetch.
     */
    where?: ServidorUnitarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServidorUnitarios to fetch.
     */
    orderBy?: ServidorUnitarioOrderByWithRelationInput | ServidorUnitarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServidorUnitarios.
     */
    cursor?: ServidorUnitarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServidorUnitarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServidorUnitarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServidorUnitarios.
     */
    distinct?: ServidorUnitarioScalarFieldEnum | ServidorUnitarioScalarFieldEnum[]
  }

  /**
   * ServidorUnitario findFirstOrThrow
   */
  export type ServidorUnitarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServidorUnitario
     */
    select?: ServidorUnitarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServidorUnitario
     */
    omit?: ServidorUnitarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServidorUnitarioInclude<ExtArgs> | null
    /**
     * Filter, which ServidorUnitario to fetch.
     */
    where?: ServidorUnitarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServidorUnitarios to fetch.
     */
    orderBy?: ServidorUnitarioOrderByWithRelationInput | ServidorUnitarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServidorUnitarios.
     */
    cursor?: ServidorUnitarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServidorUnitarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServidorUnitarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServidorUnitarios.
     */
    distinct?: ServidorUnitarioScalarFieldEnum | ServidorUnitarioScalarFieldEnum[]
  }

  /**
   * ServidorUnitario findMany
   */
  export type ServidorUnitarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServidorUnitario
     */
    select?: ServidorUnitarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServidorUnitario
     */
    omit?: ServidorUnitarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServidorUnitarioInclude<ExtArgs> | null
    /**
     * Filter, which ServidorUnitarios to fetch.
     */
    where?: ServidorUnitarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServidorUnitarios to fetch.
     */
    orderBy?: ServidorUnitarioOrderByWithRelationInput | ServidorUnitarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServidorUnitarios.
     */
    cursor?: ServidorUnitarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServidorUnitarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServidorUnitarios.
     */
    skip?: number
    distinct?: ServidorUnitarioScalarFieldEnum | ServidorUnitarioScalarFieldEnum[]
  }

  /**
   * ServidorUnitario create
   */
  export type ServidorUnitarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServidorUnitario
     */
    select?: ServidorUnitarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServidorUnitario
     */
    omit?: ServidorUnitarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServidorUnitarioInclude<ExtArgs> | null
    /**
     * The data needed to create a ServidorUnitario.
     */
    data: XOR<ServidorUnitarioCreateInput, ServidorUnitarioUncheckedCreateInput>
  }

  /**
   * ServidorUnitario createMany
   */
  export type ServidorUnitarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServidorUnitarios.
     */
    data: ServidorUnitarioCreateManyInput | ServidorUnitarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServidorUnitario createManyAndReturn
   */
  export type ServidorUnitarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServidorUnitario
     */
    select?: ServidorUnitarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServidorUnitario
     */
    omit?: ServidorUnitarioOmit<ExtArgs> | null
    /**
     * The data used to create many ServidorUnitarios.
     */
    data: ServidorUnitarioCreateManyInput | ServidorUnitarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServidorUnitarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServidorUnitario update
   */
  export type ServidorUnitarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServidorUnitario
     */
    select?: ServidorUnitarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServidorUnitario
     */
    omit?: ServidorUnitarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServidorUnitarioInclude<ExtArgs> | null
    /**
     * The data needed to update a ServidorUnitario.
     */
    data: XOR<ServidorUnitarioUpdateInput, ServidorUnitarioUncheckedUpdateInput>
    /**
     * Choose, which ServidorUnitario to update.
     */
    where: ServidorUnitarioWhereUniqueInput
  }

  /**
   * ServidorUnitario updateMany
   */
  export type ServidorUnitarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServidorUnitarios.
     */
    data: XOR<ServidorUnitarioUpdateManyMutationInput, ServidorUnitarioUncheckedUpdateManyInput>
    /**
     * Filter which ServidorUnitarios to update
     */
    where?: ServidorUnitarioWhereInput
    /**
     * Limit how many ServidorUnitarios to update.
     */
    limit?: number
  }

  /**
   * ServidorUnitario updateManyAndReturn
   */
  export type ServidorUnitarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServidorUnitario
     */
    select?: ServidorUnitarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServidorUnitario
     */
    omit?: ServidorUnitarioOmit<ExtArgs> | null
    /**
     * The data used to update ServidorUnitarios.
     */
    data: XOR<ServidorUnitarioUpdateManyMutationInput, ServidorUnitarioUncheckedUpdateManyInput>
    /**
     * Filter which ServidorUnitarios to update
     */
    where?: ServidorUnitarioWhereInput
    /**
     * Limit how many ServidorUnitarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServidorUnitarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServidorUnitario upsert
   */
  export type ServidorUnitarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServidorUnitario
     */
    select?: ServidorUnitarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServidorUnitario
     */
    omit?: ServidorUnitarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServidorUnitarioInclude<ExtArgs> | null
    /**
     * The filter to search for the ServidorUnitario to update in case it exists.
     */
    where: ServidorUnitarioWhereUniqueInput
    /**
     * In case the ServidorUnitario found by the `where` argument doesn't exist, create a new ServidorUnitario with this data.
     */
    create: XOR<ServidorUnitarioCreateInput, ServidorUnitarioUncheckedCreateInput>
    /**
     * In case the ServidorUnitario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServidorUnitarioUpdateInput, ServidorUnitarioUncheckedUpdateInput>
  }

  /**
   * ServidorUnitario delete
   */
  export type ServidorUnitarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServidorUnitario
     */
    select?: ServidorUnitarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServidorUnitario
     */
    omit?: ServidorUnitarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServidorUnitarioInclude<ExtArgs> | null
    /**
     * Filter which ServidorUnitario to delete.
     */
    where: ServidorUnitarioWhereUniqueInput
  }

  /**
   * ServidorUnitario deleteMany
   */
  export type ServidorUnitarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServidorUnitarios to delete
     */
    where?: ServidorUnitarioWhereInput
    /**
     * Limit how many ServidorUnitarios to delete.
     */
    limit?: number
  }

  /**
   * ServidorUnitario.secciones
   */
  export type ServidorUnitario$seccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    where?: SeccionWhereInput
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    cursor?: SeccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeccionScalarFieldEnum | SeccionScalarFieldEnum[]
  }

  /**
   * ServidorUnitario.noticiasConfig
   */
  export type ServidorUnitario$noticiasConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticiasConfig
     */
    select?: NoticiasConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticiasConfig
     */
    omit?: NoticiasConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiasConfigInclude<ExtArgs> | null
    where?: NoticiasConfigWhereInput
  }

  /**
   * ServidorUnitario.fuentesAutomaticas
   */
  export type ServidorUnitario$fuentesAutomaticasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuenteAutomatica
     */
    select?: FuenteAutomaticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuenteAutomatica
     */
    omit?: FuenteAutomaticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuenteAutomaticaInclude<ExtArgs> | null
    where?: FuenteAutomaticaWhereInput
    orderBy?: FuenteAutomaticaOrderByWithRelationInput | FuenteAutomaticaOrderByWithRelationInput[]
    cursor?: FuenteAutomaticaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuenteAutomaticaScalarFieldEnum | FuenteAutomaticaScalarFieldEnum[]
  }

  /**
   * ServidorUnitario.manualArticles
   */
  export type ServidorUnitario$manualArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualArticle
     */
    select?: ManualArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualArticle
     */
    omit?: ManualArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManualArticleInclude<ExtArgs> | null
    where?: ManualArticleWhereInput
    orderBy?: ManualArticleOrderByWithRelationInput | ManualArticleOrderByWithRelationInput[]
    cursor?: ManualArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManualArticleScalarFieldEnum | ManualArticleScalarFieldEnum[]
  }

  /**
   * ServidorUnitario.clientes
   */
  export type ServidorUnitario$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * ServidorUnitario.profesionales
   */
  export type ServidorUnitario$profesionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    where?: ProfesionalWhereInput
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    cursor?: ProfesionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfesionalScalarFieldEnum | ProfesionalScalarFieldEnum[]
  }

  /**
   * ServidorUnitario.casos
   */
  export type ServidorUnitario$casosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    where?: CasoWhereInput
    orderBy?: CasoOrderByWithRelationInput | CasoOrderByWithRelationInput[]
    cursor?: CasoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasoScalarFieldEnum | CasoScalarFieldEnum[]
  }

  /**
   * ServidorUnitario without action
   */
  export type ServidorUnitarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServidorUnitario
     */
    select?: ServidorUnitarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServidorUnitario
     */
    omit?: ServidorUnitarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServidorUnitarioInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    servidorId: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    servidorId: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    usuarioId: number
    servidorId: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    usuarioId?: true
    servidorId?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    servidorId?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    usuarioId?: true
    servidorId?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    usuarioId: string
    servidorId: string
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    servidorId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
    casos?: boolean | Cliente$casosArgs<ExtArgs>
    archivos?: boolean | Cliente$archivosArgs<ExtArgs>
    reportes?: boolean | Cliente$reportesArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    servidorId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    servidorId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    servidorId?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "servidorId", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
    casos?: boolean | Cliente$casosArgs<ExtArgs>
    archivos?: boolean | Cliente$archivosArgs<ExtArgs>
    reportes?: boolean | Cliente$reportesArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      servidor: Prisma.$ServidorUnitarioPayload<ExtArgs>
      casos: Prisma.$CasoPayload<ExtArgs>[]
      archivos: Prisma.$ArchivoPayload<ExtArgs>[]
      reportes: Prisma.$ReportePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      servidorId: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servidor<T extends ServidorUnitarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServidorUnitarioDefaultArgs<ExtArgs>>): Prisma__ServidorUnitarioClient<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    casos<T extends Cliente$casosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$casosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    archivos<T extends Cliente$archivosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$archivosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportes<T extends Cliente$reportesArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$reportesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly usuarioId: FieldRef<"Cliente", 'String'>
    readonly servidorId: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.casos
   */
  export type Cliente$casosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    where?: CasoWhereInput
    orderBy?: CasoOrderByWithRelationInput | CasoOrderByWithRelationInput[]
    cursor?: CasoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasoScalarFieldEnum | CasoScalarFieldEnum[]
  }

  /**
   * Cliente.archivos
   */
  export type Cliente$archivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    where?: ArchivoWhereInput
    orderBy?: ArchivoOrderByWithRelationInput | ArchivoOrderByWithRelationInput[]
    cursor?: ArchivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArchivoScalarFieldEnum | ArchivoScalarFieldEnum[]
  }

  /**
   * Cliente.reportes
   */
  export type Cliente$reportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    where?: ReporteWhereInput
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    cursor?: ReporteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Profesional
   */

  export type AggregateProfesional = {
    _count: ProfesionalCountAggregateOutputType | null
    _min: ProfesionalMinAggregateOutputType | null
    _max: ProfesionalMaxAggregateOutputType | null
  }

  export type ProfesionalMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    servidorId: string | null
  }

  export type ProfesionalMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    servidorId: string | null
  }

  export type ProfesionalCountAggregateOutputType = {
    id: number
    usuarioId: number
    servidorId: number
    _all: number
  }


  export type ProfesionalMinAggregateInputType = {
    id?: true
    usuarioId?: true
    servidorId?: true
  }

  export type ProfesionalMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    servidorId?: true
  }

  export type ProfesionalCountAggregateInputType = {
    id?: true
    usuarioId?: true
    servidorId?: true
    _all?: true
  }

  export type ProfesionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profesional to aggregate.
     */
    where?: ProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesionals to fetch.
     */
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profesionals
    **/
    _count?: true | ProfesionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfesionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfesionalMaxAggregateInputType
  }

  export type GetProfesionalAggregateType<T extends ProfesionalAggregateArgs> = {
        [P in keyof T & keyof AggregateProfesional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfesional[P]>
      : GetScalarType<T[P], AggregateProfesional[P]>
  }




  export type ProfesionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfesionalWhereInput
    orderBy?: ProfesionalOrderByWithAggregationInput | ProfesionalOrderByWithAggregationInput[]
    by: ProfesionalScalarFieldEnum[] | ProfesionalScalarFieldEnum
    having?: ProfesionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfesionalCountAggregateInputType | true
    _min?: ProfesionalMinAggregateInputType
    _max?: ProfesionalMaxAggregateInputType
  }

  export type ProfesionalGroupByOutputType = {
    id: string
    usuarioId: string
    servidorId: string
    _count: ProfesionalCountAggregateOutputType | null
    _min: ProfesionalMinAggregateOutputType | null
    _max: ProfesionalMaxAggregateOutputType | null
  }

  type GetProfesionalGroupByPayload<T extends ProfesionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfesionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfesionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfesionalGroupByOutputType[P]>
            : GetScalarType<T[P], ProfesionalGroupByOutputType[P]>
        }
      >
    >


  export type ProfesionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    servidorId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
    casos?: boolean | Profesional$casosArgs<ExtArgs>
    archivos?: boolean | Profesional$archivosArgs<ExtArgs>
    _count?: boolean | ProfesionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profesional"]>

  export type ProfesionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    servidorId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profesional"]>

  export type ProfesionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    servidorId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profesional"]>

  export type ProfesionalSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    servidorId?: boolean
  }

  export type ProfesionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "servidorId", ExtArgs["result"]["profesional"]>
  export type ProfesionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
    casos?: boolean | Profesional$casosArgs<ExtArgs>
    archivos?: boolean | Profesional$archivosArgs<ExtArgs>
    _count?: boolean | ProfesionalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfesionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }
  export type ProfesionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }

  export type $ProfesionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profesional"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      servidor: Prisma.$ServidorUnitarioPayload<ExtArgs>
      casos: Prisma.$CasoPayload<ExtArgs>[]
      archivos: Prisma.$ArchivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      servidorId: string
    }, ExtArgs["result"]["profesional"]>
    composites: {}
  }

  type ProfesionalGetPayload<S extends boolean | null | undefined | ProfesionalDefaultArgs> = $Result.GetResult<Prisma.$ProfesionalPayload, S>

  type ProfesionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfesionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfesionalCountAggregateInputType | true
    }

  export interface ProfesionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profesional'], meta: { name: 'Profesional' } }
    /**
     * Find zero or one Profesional that matches the filter.
     * @param {ProfesionalFindUniqueArgs} args - Arguments to find a Profesional
     * @example
     * // Get one Profesional
     * const profesional = await prisma.profesional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfesionalFindUniqueArgs>(args: SelectSubset<T, ProfesionalFindUniqueArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profesional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfesionalFindUniqueOrThrowArgs} args - Arguments to find a Profesional
     * @example
     * // Get one Profesional
     * const profesional = await prisma.profesional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfesionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfesionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profesional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalFindFirstArgs} args - Arguments to find a Profesional
     * @example
     * // Get one Profesional
     * const profesional = await prisma.profesional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfesionalFindFirstArgs>(args?: SelectSubset<T, ProfesionalFindFirstArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profesional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalFindFirstOrThrowArgs} args - Arguments to find a Profesional
     * @example
     * // Get one Profesional
     * const profesional = await prisma.profesional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfesionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfesionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profesionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profesionals
     * const profesionals = await prisma.profesional.findMany()
     * 
     * // Get first 10 Profesionals
     * const profesionals = await prisma.profesional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profesionalWithIdOnly = await prisma.profesional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfesionalFindManyArgs>(args?: SelectSubset<T, ProfesionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profesional.
     * @param {ProfesionalCreateArgs} args - Arguments to create a Profesional.
     * @example
     * // Create one Profesional
     * const Profesional = await prisma.profesional.create({
     *   data: {
     *     // ... data to create a Profesional
     *   }
     * })
     * 
     */
    create<T extends ProfesionalCreateArgs>(args: SelectSubset<T, ProfesionalCreateArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profesionals.
     * @param {ProfesionalCreateManyArgs} args - Arguments to create many Profesionals.
     * @example
     * // Create many Profesionals
     * const profesional = await prisma.profesional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfesionalCreateManyArgs>(args?: SelectSubset<T, ProfesionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profesionals and returns the data saved in the database.
     * @param {ProfesionalCreateManyAndReturnArgs} args - Arguments to create many Profesionals.
     * @example
     * // Create many Profesionals
     * const profesional = await prisma.profesional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profesionals and only return the `id`
     * const profesionalWithIdOnly = await prisma.profesional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfesionalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfesionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profesional.
     * @param {ProfesionalDeleteArgs} args - Arguments to delete one Profesional.
     * @example
     * // Delete one Profesional
     * const Profesional = await prisma.profesional.delete({
     *   where: {
     *     // ... filter to delete one Profesional
     *   }
     * })
     * 
     */
    delete<T extends ProfesionalDeleteArgs>(args: SelectSubset<T, ProfesionalDeleteArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profesional.
     * @param {ProfesionalUpdateArgs} args - Arguments to update one Profesional.
     * @example
     * // Update one Profesional
     * const profesional = await prisma.profesional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfesionalUpdateArgs>(args: SelectSubset<T, ProfesionalUpdateArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profesionals.
     * @param {ProfesionalDeleteManyArgs} args - Arguments to filter Profesionals to delete.
     * @example
     * // Delete a few Profesionals
     * const { count } = await prisma.profesional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfesionalDeleteManyArgs>(args?: SelectSubset<T, ProfesionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profesionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profesionals
     * const profesional = await prisma.profesional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfesionalUpdateManyArgs>(args: SelectSubset<T, ProfesionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profesionals and returns the data updated in the database.
     * @param {ProfesionalUpdateManyAndReturnArgs} args - Arguments to update many Profesionals.
     * @example
     * // Update many Profesionals
     * const profesional = await prisma.profesional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profesionals and only return the `id`
     * const profesionalWithIdOnly = await prisma.profesional.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ProfesionalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfesionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profesional.
     * @param {ProfesionalUpsertArgs} args - Arguments to update or create a Profesional.
     * @example
     * // Update or create a Profesional
     * const profesional = await prisma.profesional.upsert({
     *   create: {
     *     // ... data to create a Profesional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profesional we want to update
     *   }
     * })
     */
    upsert<T extends ProfesionalUpsertArgs>(args: SelectSubset<T, ProfesionalUpsertArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profesionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalCountArgs} args - Arguments to filter Profesionals to count.
     * @example
     * // Count the number of Profesionals
     * const count = await prisma.profesional.count({
     *   where: {
     *     // ... the filter for the Profesionals we want to count
     *   }
     * })
    **/
    count<T extends ProfesionalCountArgs>(
      args?: Subset<T, ProfesionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfesionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profesional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfesionalAggregateArgs>(args: Subset<T, ProfesionalAggregateArgs>): Prisma.PrismaPromise<GetProfesionalAggregateType<T>>

    /**
     * Group by Profesional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalGroupByArgs} args - Group by arguments.
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
      T extends ProfesionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfesionalGroupByArgs['orderBy'] }
        : { orderBy?: ProfesionalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfesionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfesionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profesional model
   */
  readonly fields: ProfesionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profesional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfesionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servidor<T extends ServidorUnitarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServidorUnitarioDefaultArgs<ExtArgs>>): Prisma__ServidorUnitarioClient<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    casos<T extends Profesional$casosArgs<ExtArgs> = {}>(args?: Subset<T, Profesional$casosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    archivos<T extends Profesional$archivosArgs<ExtArgs> = {}>(args?: Subset<T, Profesional$archivosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profesional model
   */
  interface ProfesionalFieldRefs {
    readonly id: FieldRef<"Profesional", 'String'>
    readonly usuarioId: FieldRef<"Profesional", 'String'>
    readonly servidorId: FieldRef<"Profesional", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profesional findUnique
   */
  export type ProfesionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which Profesional to fetch.
     */
    where: ProfesionalWhereUniqueInput
  }

  /**
   * Profesional findUniqueOrThrow
   */
  export type ProfesionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which Profesional to fetch.
     */
    where: ProfesionalWhereUniqueInput
  }

  /**
   * Profesional findFirst
   */
  export type ProfesionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which Profesional to fetch.
     */
    where?: ProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesionals to fetch.
     */
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profesionals.
     */
    cursor?: ProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profesionals.
     */
    distinct?: ProfesionalScalarFieldEnum | ProfesionalScalarFieldEnum[]
  }

  /**
   * Profesional findFirstOrThrow
   */
  export type ProfesionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which Profesional to fetch.
     */
    where?: ProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesionals to fetch.
     */
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profesionals.
     */
    cursor?: ProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profesionals.
     */
    distinct?: ProfesionalScalarFieldEnum | ProfesionalScalarFieldEnum[]
  }

  /**
   * Profesional findMany
   */
  export type ProfesionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which Profesionals to fetch.
     */
    where?: ProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesionals to fetch.
     */
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profesionals.
     */
    cursor?: ProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesionals.
     */
    skip?: number
    distinct?: ProfesionalScalarFieldEnum | ProfesionalScalarFieldEnum[]
  }

  /**
   * Profesional create
   */
  export type ProfesionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Profesional.
     */
    data: XOR<ProfesionalCreateInput, ProfesionalUncheckedCreateInput>
  }

  /**
   * Profesional createMany
   */
  export type ProfesionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profesionals.
     */
    data: ProfesionalCreateManyInput | ProfesionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profesional createManyAndReturn
   */
  export type ProfesionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * The data used to create many Profesionals.
     */
    data: ProfesionalCreateManyInput | ProfesionalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profesional update
   */
  export type ProfesionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Profesional.
     */
    data: XOR<ProfesionalUpdateInput, ProfesionalUncheckedUpdateInput>
    /**
     * Choose, which Profesional to update.
     */
    where: ProfesionalWhereUniqueInput
  }

  /**
   * Profesional updateMany
   */
  export type ProfesionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profesionals.
     */
    data: XOR<ProfesionalUpdateManyMutationInput, ProfesionalUncheckedUpdateManyInput>
    /**
     * Filter which Profesionals to update
     */
    where?: ProfesionalWhereInput
    /**
     * Limit how many Profesionals to update.
     */
    limit?: number
  }

  /**
   * Profesional updateManyAndReturn
   */
  export type ProfesionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * The data used to update Profesionals.
     */
    data: XOR<ProfesionalUpdateManyMutationInput, ProfesionalUncheckedUpdateManyInput>
    /**
     * Filter which Profesionals to update
     */
    where?: ProfesionalWhereInput
    /**
     * Limit how many Profesionals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profesional upsert
   */
  export type ProfesionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Profesional to update in case it exists.
     */
    where: ProfesionalWhereUniqueInput
    /**
     * In case the Profesional found by the `where` argument doesn't exist, create a new Profesional with this data.
     */
    create: XOR<ProfesionalCreateInput, ProfesionalUncheckedCreateInput>
    /**
     * In case the Profesional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfesionalUpdateInput, ProfesionalUncheckedUpdateInput>
  }

  /**
   * Profesional delete
   */
  export type ProfesionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter which Profesional to delete.
     */
    where: ProfesionalWhereUniqueInput
  }

  /**
   * Profesional deleteMany
   */
  export type ProfesionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profesionals to delete
     */
    where?: ProfesionalWhereInput
    /**
     * Limit how many Profesionals to delete.
     */
    limit?: number
  }

  /**
   * Profesional.casos
   */
  export type Profesional$casosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    where?: CasoWhereInput
    orderBy?: CasoOrderByWithRelationInput | CasoOrderByWithRelationInput[]
    cursor?: CasoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasoScalarFieldEnum | CasoScalarFieldEnum[]
  }

  /**
   * Profesional.archivos
   */
  export type Profesional$archivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    where?: ArchivoWhereInput
    orderBy?: ArchivoOrderByWithRelationInput | ArchivoOrderByWithRelationInput[]
    cursor?: ArchivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArchivoScalarFieldEnum | ArchivoScalarFieldEnum[]
  }

  /**
   * Profesional without action
   */
  export type ProfesionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
  }


  /**
   * Model Caso
   */

  export type AggregateCaso = {
    _count: CasoCountAggregateOutputType | null
    _min: CasoMinAggregateOutputType | null
    _max: CasoMaxAggregateOutputType | null
  }

  export type CasoMinAggregateOutputType = {
    id: string | null
    clienteId: string | null
    profesionalId: string | null
    servidorId: string | null
    status: $Enums.CasoStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CasoMaxAggregateOutputType = {
    id: string | null
    clienteId: string | null
    profesionalId: string | null
    servidorId: string | null
    status: $Enums.CasoStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CasoCountAggregateOutputType = {
    id: number
    clienteId: number
    profesionalId: number
    servidorId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CasoMinAggregateInputType = {
    id?: true
    clienteId?: true
    profesionalId?: true
    servidorId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CasoMaxAggregateInputType = {
    id?: true
    clienteId?: true
    profesionalId?: true
    servidorId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CasoCountAggregateInputType = {
    id?: true
    clienteId?: true
    profesionalId?: true
    servidorId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CasoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caso to aggregate.
     */
    where?: CasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casos to fetch.
     */
    orderBy?: CasoOrderByWithRelationInput | CasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Casos
    **/
    _count?: true | CasoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasoMaxAggregateInputType
  }

  export type GetCasoAggregateType<T extends CasoAggregateArgs> = {
        [P in keyof T & keyof AggregateCaso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaso[P]>
      : GetScalarType<T[P], AggregateCaso[P]>
  }




  export type CasoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasoWhereInput
    orderBy?: CasoOrderByWithAggregationInput | CasoOrderByWithAggregationInput[]
    by: CasoScalarFieldEnum[] | CasoScalarFieldEnum
    having?: CasoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasoCountAggregateInputType | true
    _min?: CasoMinAggregateInputType
    _max?: CasoMaxAggregateInputType
  }

  export type CasoGroupByOutputType = {
    id: string
    clienteId: string
    profesionalId: string
    servidorId: string
    status: $Enums.CasoStatus
    createdAt: Date
    updatedAt: Date
    _count: CasoCountAggregateOutputType | null
    _min: CasoMinAggregateOutputType | null
    _max: CasoMaxAggregateOutputType | null
  }

  type GetCasoGroupByPayload<T extends CasoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasoGroupByOutputType[P]>
            : GetScalarType<T[P], CasoGroupByOutputType[P]>
        }
      >
    >


  export type CasoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    profesionalId?: boolean
    servidorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
    chat?: boolean | Caso$chatArgs<ExtArgs>
    archivos?: boolean | Caso$archivosArgs<ExtArgs>
    reportes?: boolean | Caso$reportesArgs<ExtArgs>
    _count?: boolean | CasoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caso"]>

  export type CasoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    profesionalId?: boolean
    servidorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caso"]>

  export type CasoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    profesionalId?: boolean
    servidorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caso"]>

  export type CasoSelectScalar = {
    id?: boolean
    clienteId?: boolean
    profesionalId?: boolean
    servidorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CasoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clienteId" | "profesionalId" | "servidorId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["caso"]>
  export type CasoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
    chat?: boolean | Caso$chatArgs<ExtArgs>
    archivos?: boolean | Caso$archivosArgs<ExtArgs>
    reportes?: boolean | Caso$reportesArgs<ExtArgs>
    _count?: boolean | CasoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CasoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }
  export type CasoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }

  export type $CasoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Caso"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      profesional: Prisma.$ProfesionalPayload<ExtArgs>
      servidor: Prisma.$ServidorUnitarioPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs> | null
      archivos: Prisma.$ArchivoPayload<ExtArgs>[]
      reportes: Prisma.$ReportePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clienteId: string
      profesionalId: string
      servidorId: string
      status: $Enums.CasoStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["caso"]>
    composites: {}
  }

  type CasoGetPayload<S extends boolean | null | undefined | CasoDefaultArgs> = $Result.GetResult<Prisma.$CasoPayload, S>

  type CasoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CasoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CasoCountAggregateInputType | true
    }

  export interface CasoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Caso'], meta: { name: 'Caso' } }
    /**
     * Find zero or one Caso that matches the filter.
     * @param {CasoFindUniqueArgs} args - Arguments to find a Caso
     * @example
     * // Get one Caso
     * const caso = await prisma.caso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasoFindUniqueArgs>(args: SelectSubset<T, CasoFindUniqueArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Caso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CasoFindUniqueOrThrowArgs} args - Arguments to find a Caso
     * @example
     * // Get one Caso
     * const caso = await prisma.caso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasoFindUniqueOrThrowArgs>(args: SelectSubset<T, CasoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoFindFirstArgs} args - Arguments to find a Caso
     * @example
     * // Get one Caso
     * const caso = await prisma.caso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasoFindFirstArgs>(args?: SelectSubset<T, CasoFindFirstArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoFindFirstOrThrowArgs} args - Arguments to find a Caso
     * @example
     * // Get one Caso
     * const caso = await prisma.caso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasoFindFirstOrThrowArgs>(args?: SelectSubset<T, CasoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Casos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Casos
     * const casos = await prisma.caso.findMany()
     * 
     * // Get first 10 Casos
     * const casos = await prisma.caso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casoWithIdOnly = await prisma.caso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasoFindManyArgs>(args?: SelectSubset<T, CasoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Caso.
     * @param {CasoCreateArgs} args - Arguments to create a Caso.
     * @example
     * // Create one Caso
     * const Caso = await prisma.caso.create({
     *   data: {
     *     // ... data to create a Caso
     *   }
     * })
     * 
     */
    create<T extends CasoCreateArgs>(args: SelectSubset<T, CasoCreateArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Casos.
     * @param {CasoCreateManyArgs} args - Arguments to create many Casos.
     * @example
     * // Create many Casos
     * const caso = await prisma.caso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasoCreateManyArgs>(args?: SelectSubset<T, CasoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Casos and returns the data saved in the database.
     * @param {CasoCreateManyAndReturnArgs} args - Arguments to create many Casos.
     * @example
     * // Create many Casos
     * const caso = await prisma.caso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Casos and only return the `id`
     * const casoWithIdOnly = await prisma.caso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasoCreateManyAndReturnArgs>(args?: SelectSubset<T, CasoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Caso.
     * @param {CasoDeleteArgs} args - Arguments to delete one Caso.
     * @example
     * // Delete one Caso
     * const Caso = await prisma.caso.delete({
     *   where: {
     *     // ... filter to delete one Caso
     *   }
     * })
     * 
     */
    delete<T extends CasoDeleteArgs>(args: SelectSubset<T, CasoDeleteArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Caso.
     * @param {CasoUpdateArgs} args - Arguments to update one Caso.
     * @example
     * // Update one Caso
     * const caso = await prisma.caso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasoUpdateArgs>(args: SelectSubset<T, CasoUpdateArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Casos.
     * @param {CasoDeleteManyArgs} args - Arguments to filter Casos to delete.
     * @example
     * // Delete a few Casos
     * const { count } = await prisma.caso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasoDeleteManyArgs>(args?: SelectSubset<T, CasoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Casos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Casos
     * const caso = await prisma.caso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasoUpdateManyArgs>(args: SelectSubset<T, CasoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Casos and returns the data updated in the database.
     * @param {CasoUpdateManyAndReturnArgs} args - Arguments to update many Casos.
     * @example
     * // Update many Casos
     * const caso = await prisma.caso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Casos and only return the `id`
     * const casoWithIdOnly = await prisma.caso.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CasoUpdateManyAndReturnArgs>(args: SelectSubset<T, CasoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Caso.
     * @param {CasoUpsertArgs} args - Arguments to update or create a Caso.
     * @example
     * // Update or create a Caso
     * const caso = await prisma.caso.upsert({
     *   create: {
     *     // ... data to create a Caso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caso we want to update
     *   }
     * })
     */
    upsert<T extends CasoUpsertArgs>(args: SelectSubset<T, CasoUpsertArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Casos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoCountArgs} args - Arguments to filter Casos to count.
     * @example
     * // Count the number of Casos
     * const count = await prisma.caso.count({
     *   where: {
     *     // ... the filter for the Casos we want to count
     *   }
     * })
    **/
    count<T extends CasoCountArgs>(
      args?: Subset<T, CasoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CasoAggregateArgs>(args: Subset<T, CasoAggregateArgs>): Prisma.PrismaPromise<GetCasoAggregateType<T>>

    /**
     * Group by Caso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoGroupByArgs} args - Group by arguments.
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
      T extends CasoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasoGroupByArgs['orderBy'] }
        : { orderBy?: CasoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CasoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Caso model
   */
  readonly fields: CasoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Caso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profesional<T extends ProfesionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfesionalDefaultArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servidor<T extends ServidorUnitarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServidorUnitarioDefaultArgs<ExtArgs>>): Prisma__ServidorUnitarioClient<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chat<T extends Caso$chatArgs<ExtArgs> = {}>(args?: Subset<T, Caso$chatArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    archivos<T extends Caso$archivosArgs<ExtArgs> = {}>(args?: Subset<T, Caso$archivosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportes<T extends Caso$reportesArgs<ExtArgs> = {}>(args?: Subset<T, Caso$reportesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Caso model
   */
  interface CasoFieldRefs {
    readonly id: FieldRef<"Caso", 'String'>
    readonly clienteId: FieldRef<"Caso", 'String'>
    readonly profesionalId: FieldRef<"Caso", 'String'>
    readonly servidorId: FieldRef<"Caso", 'String'>
    readonly status: FieldRef<"Caso", 'CasoStatus'>
    readonly createdAt: FieldRef<"Caso", 'DateTime'>
    readonly updatedAt: FieldRef<"Caso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Caso findUnique
   */
  export type CasoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * Filter, which Caso to fetch.
     */
    where: CasoWhereUniqueInput
  }

  /**
   * Caso findUniqueOrThrow
   */
  export type CasoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * Filter, which Caso to fetch.
     */
    where: CasoWhereUniqueInput
  }

  /**
   * Caso findFirst
   */
  export type CasoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * Filter, which Caso to fetch.
     */
    where?: CasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casos to fetch.
     */
    orderBy?: CasoOrderByWithRelationInput | CasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Casos.
     */
    cursor?: CasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Casos.
     */
    distinct?: CasoScalarFieldEnum | CasoScalarFieldEnum[]
  }

  /**
   * Caso findFirstOrThrow
   */
  export type CasoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * Filter, which Caso to fetch.
     */
    where?: CasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casos to fetch.
     */
    orderBy?: CasoOrderByWithRelationInput | CasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Casos.
     */
    cursor?: CasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Casos.
     */
    distinct?: CasoScalarFieldEnum | CasoScalarFieldEnum[]
  }

  /**
   * Caso findMany
   */
  export type CasoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * Filter, which Casos to fetch.
     */
    where?: CasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casos to fetch.
     */
    orderBy?: CasoOrderByWithRelationInput | CasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Casos.
     */
    cursor?: CasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casos.
     */
    skip?: number
    distinct?: CasoScalarFieldEnum | CasoScalarFieldEnum[]
  }

  /**
   * Caso create
   */
  export type CasoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * The data needed to create a Caso.
     */
    data: XOR<CasoCreateInput, CasoUncheckedCreateInput>
  }

  /**
   * Caso createMany
   */
  export type CasoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Casos.
     */
    data: CasoCreateManyInput | CasoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Caso createManyAndReturn
   */
  export type CasoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * The data used to create many Casos.
     */
    data: CasoCreateManyInput | CasoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Caso update
   */
  export type CasoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * The data needed to update a Caso.
     */
    data: XOR<CasoUpdateInput, CasoUncheckedUpdateInput>
    /**
     * Choose, which Caso to update.
     */
    where: CasoWhereUniqueInput
  }

  /**
   * Caso updateMany
   */
  export type CasoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Casos.
     */
    data: XOR<CasoUpdateManyMutationInput, CasoUncheckedUpdateManyInput>
    /**
     * Filter which Casos to update
     */
    where?: CasoWhereInput
    /**
     * Limit how many Casos to update.
     */
    limit?: number
  }

  /**
   * Caso updateManyAndReturn
   */
  export type CasoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * The data used to update Casos.
     */
    data: XOR<CasoUpdateManyMutationInput, CasoUncheckedUpdateManyInput>
    /**
     * Filter which Casos to update
     */
    where?: CasoWhereInput
    /**
     * Limit how many Casos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Caso upsert
   */
  export type CasoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * The filter to search for the Caso to update in case it exists.
     */
    where: CasoWhereUniqueInput
    /**
     * In case the Caso found by the `where` argument doesn't exist, create a new Caso with this data.
     */
    create: XOR<CasoCreateInput, CasoUncheckedCreateInput>
    /**
     * In case the Caso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasoUpdateInput, CasoUncheckedUpdateInput>
  }

  /**
   * Caso delete
   */
  export type CasoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * Filter which Caso to delete.
     */
    where: CasoWhereUniqueInput
  }

  /**
   * Caso deleteMany
   */
  export type CasoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Casos to delete
     */
    where?: CasoWhereInput
    /**
     * Limit how many Casos to delete.
     */
    limit?: number
  }

  /**
   * Caso.chat
   */
  export type Caso$chatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
  }

  /**
   * Caso.archivos
   */
  export type Caso$archivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    where?: ArchivoWhereInput
    orderBy?: ArchivoOrderByWithRelationInput | ArchivoOrderByWithRelationInput[]
    cursor?: ArchivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArchivoScalarFieldEnum | ArchivoScalarFieldEnum[]
  }

  /**
   * Caso.reportes
   */
  export type Caso$reportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    where?: ReporteWhereInput
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    cursor?: ReporteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Caso without action
   */
  export type CasoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    casoId: string | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    casoId: string | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    casoId: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    casoId?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    casoId?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    casoId?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    casoId: string
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casoId?: boolean
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    mensajes?: boolean | Chat$mensajesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casoId?: boolean
    caso?: boolean | CasoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casoId?: boolean
    caso?: boolean | CasoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    casoId?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "casoId", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    mensajes?: boolean | Chat$mensajesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | CasoDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | CasoDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      caso: Prisma.$CasoPayload<ExtArgs>
      mensajes: Prisma.$MensajePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      casoId: string
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caso<T extends CasoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasoDefaultArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mensajes<T extends Chat$mensajesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly casoId: FieldRef<"Chat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.mensajes
   */
  export type Chat$mensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    cursor?: MensajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Mensaje
   */

  export type AggregateMensaje = {
    _count: MensajeCountAggregateOutputType | null
    _min: MensajeMinAggregateOutputType | null
    _max: MensajeMaxAggregateOutputType | null
  }

  export type MensajeMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    remitente: $Enums.Remitente | null
    contenido: string | null
    fecha: Date | null
  }

  export type MensajeMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    remitente: $Enums.Remitente | null
    contenido: string | null
    fecha: Date | null
  }

  export type MensajeCountAggregateOutputType = {
    id: number
    chatId: number
    remitente: number
    contenido: number
    fecha: number
    _all: number
  }


  export type MensajeMinAggregateInputType = {
    id?: true
    chatId?: true
    remitente?: true
    contenido?: true
    fecha?: true
  }

  export type MensajeMaxAggregateInputType = {
    id?: true
    chatId?: true
    remitente?: true
    contenido?: true
    fecha?: true
  }

  export type MensajeCountAggregateInputType = {
    id?: true
    chatId?: true
    remitente?: true
    contenido?: true
    fecha?: true
    _all?: true
  }

  export type MensajeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensaje to aggregate.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensajes
    **/
    _count?: true | MensajeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensajeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensajeMaxAggregateInputType
  }

  export type GetMensajeAggregateType<T extends MensajeAggregateArgs> = {
        [P in keyof T & keyof AggregateMensaje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensaje[P]>
      : GetScalarType<T[P], AggregateMensaje[P]>
  }




  export type MensajeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithAggregationInput | MensajeOrderByWithAggregationInput[]
    by: MensajeScalarFieldEnum[] | MensajeScalarFieldEnum
    having?: MensajeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensajeCountAggregateInputType | true
    _min?: MensajeMinAggregateInputType
    _max?: MensajeMaxAggregateInputType
  }

  export type MensajeGroupByOutputType = {
    id: string
    chatId: string
    remitente: $Enums.Remitente
    contenido: string
    fecha: Date
    _count: MensajeCountAggregateOutputType | null
    _min: MensajeMinAggregateOutputType | null
    _max: MensajeMaxAggregateOutputType | null
  }

  type GetMensajeGroupByPayload<T extends MensajeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensajeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensajeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensajeGroupByOutputType[P]>
            : GetScalarType<T[P], MensajeGroupByOutputType[P]>
        }
      >
    >


  export type MensajeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    remitente?: boolean
    contenido?: boolean
    fecha?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    remitente?: boolean
    contenido?: boolean
    fecha?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    remitente?: boolean
    contenido?: boolean
    fecha?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensaje"]>

  export type MensajeSelectScalar = {
    id?: boolean
    chatId?: boolean
    remitente?: boolean
    contenido?: boolean
    fecha?: boolean
  }

  export type MensajeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "remitente" | "contenido" | "fecha", ExtArgs["result"]["mensaje"]>
  export type MensajeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MensajeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MensajeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $MensajePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensaje"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatId: string
      remitente: $Enums.Remitente
      contenido: string
      fecha: Date
    }, ExtArgs["result"]["mensaje"]>
    composites: {}
  }

  type MensajeGetPayload<S extends boolean | null | undefined | MensajeDefaultArgs> = $Result.GetResult<Prisma.$MensajePayload, S>

  type MensajeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensajeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensajeCountAggregateInputType | true
    }

  export interface MensajeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensaje'], meta: { name: 'Mensaje' } }
    /**
     * Find zero or one Mensaje that matches the filter.
     * @param {MensajeFindUniqueArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensajeFindUniqueArgs>(args: SelectSubset<T, MensajeFindUniqueArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensaje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensajeFindUniqueOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensajeFindUniqueOrThrowArgs>(args: SelectSubset<T, MensajeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensaje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensajeFindFirstArgs>(args?: SelectSubset<T, MensajeFindFirstArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensaje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensajeFindFirstOrThrowArgs>(args?: SelectSubset<T, MensajeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensajes
     * const mensajes = await prisma.mensaje.findMany()
     * 
     * // Get first 10 Mensajes
     * const mensajes = await prisma.mensaje.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensajeFindManyArgs>(args?: SelectSubset<T, MensajeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensaje.
     * @param {MensajeCreateArgs} args - Arguments to create a Mensaje.
     * @example
     * // Create one Mensaje
     * const Mensaje = await prisma.mensaje.create({
     *   data: {
     *     // ... data to create a Mensaje
     *   }
     * })
     * 
     */
    create<T extends MensajeCreateArgs>(args: SelectSubset<T, MensajeCreateArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensajes.
     * @param {MensajeCreateManyArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensaje = await prisma.mensaje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensajeCreateManyArgs>(args?: SelectSubset<T, MensajeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensajes and returns the data saved in the database.
     * @param {MensajeCreateManyAndReturnArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensaje = await prisma.mensaje.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensajes and only return the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensajeCreateManyAndReturnArgs>(args?: SelectSubset<T, MensajeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mensaje.
     * @param {MensajeDeleteArgs} args - Arguments to delete one Mensaje.
     * @example
     * // Delete one Mensaje
     * const Mensaje = await prisma.mensaje.delete({
     *   where: {
     *     // ... filter to delete one Mensaje
     *   }
     * })
     * 
     */
    delete<T extends MensajeDeleteArgs>(args: SelectSubset<T, MensajeDeleteArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensaje.
     * @param {MensajeUpdateArgs} args - Arguments to update one Mensaje.
     * @example
     * // Update one Mensaje
     * const mensaje = await prisma.mensaje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensajeUpdateArgs>(args: SelectSubset<T, MensajeUpdateArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensajes.
     * @param {MensajeDeleteManyArgs} args - Arguments to filter Mensajes to delete.
     * @example
     * // Delete a few Mensajes
     * const { count } = await prisma.mensaje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensajeDeleteManyArgs>(args?: SelectSubset<T, MensajeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensajes
     * const mensaje = await prisma.mensaje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensajeUpdateManyArgs>(args: SelectSubset<T, MensajeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes and returns the data updated in the database.
     * @param {MensajeUpdateManyAndReturnArgs} args - Arguments to update many Mensajes.
     * @example
     * // Update many Mensajes
     * const mensaje = await prisma.mensaje.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensajes and only return the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MensajeUpdateManyAndReturnArgs>(args: SelectSubset<T, MensajeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mensaje.
     * @param {MensajeUpsertArgs} args - Arguments to update or create a Mensaje.
     * @example
     * // Update or create a Mensaje
     * const mensaje = await prisma.mensaje.upsert({
     *   create: {
     *     // ... data to create a Mensaje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensaje we want to update
     *   }
     * })
     */
    upsert<T extends MensajeUpsertArgs>(args: SelectSubset<T, MensajeUpsertArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeCountArgs} args - Arguments to filter Mensajes to count.
     * @example
     * // Count the number of Mensajes
     * const count = await prisma.mensaje.count({
     *   where: {
     *     // ... the filter for the Mensajes we want to count
     *   }
     * })
    **/
    count<T extends MensajeCountArgs>(
      args?: Subset<T, MensajeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensajeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MensajeAggregateArgs>(args: Subset<T, MensajeAggregateArgs>): Prisma.PrismaPromise<GetMensajeAggregateType<T>>

    /**
     * Group by Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeGroupByArgs} args - Group by arguments.
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
      T extends MensajeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensajeGroupByArgs['orderBy'] }
        : { orderBy?: MensajeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MensajeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensajeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensaje model
   */
  readonly fields: MensajeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensaje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensajeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Mensaje model
   */
  interface MensajeFieldRefs {
    readonly id: FieldRef<"Mensaje", 'String'>
    readonly chatId: FieldRef<"Mensaje", 'String'>
    readonly remitente: FieldRef<"Mensaje", 'Remitente'>
    readonly contenido: FieldRef<"Mensaje", 'String'>
    readonly fecha: FieldRef<"Mensaje", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mensaje findUnique
   */
  export type MensajeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje findUniqueOrThrow
   */
  export type MensajeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje findFirst
   */
  export type MensajeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje findFirstOrThrow
   */
  export type MensajeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje findMany
   */
  export type MensajeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensajes to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje create
   */
  export type MensajeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The data needed to create a Mensaje.
     */
    data: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>
  }

  /**
   * Mensaje createMany
   */
  export type MensajeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensajes.
     */
    data: MensajeCreateManyInput | MensajeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mensaje createManyAndReturn
   */
  export type MensajeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * The data used to create many Mensajes.
     */
    data: MensajeCreateManyInput | MensajeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensaje update
   */
  export type MensajeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The data needed to update a Mensaje.
     */
    data: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>
    /**
     * Choose, which Mensaje to update.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje updateMany
   */
  export type MensajeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensajes.
     */
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyInput>
    /**
     * Filter which Mensajes to update
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to update.
     */
    limit?: number
  }

  /**
   * Mensaje updateManyAndReturn
   */
  export type MensajeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * The data used to update Mensajes.
     */
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyInput>
    /**
     * Filter which Mensajes to update
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensaje upsert
   */
  export type MensajeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The filter to search for the Mensaje to update in case it exists.
     */
    where: MensajeWhereUniqueInput
    /**
     * In case the Mensaje found by the `where` argument doesn't exist, create a new Mensaje with this data.
     */
    create: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>
    /**
     * In case the Mensaje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>
  }

  /**
   * Mensaje delete
   */
  export type MensajeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter which Mensaje to delete.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje deleteMany
   */
  export type MensajeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensajes to delete
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to delete.
     */
    limit?: number
  }

  /**
   * Mensaje without action
   */
  export type MensajeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
  }


  /**
   * Model NoticiasConfig
   */

  export type AggregateNoticiasConfig = {
    _count: NoticiasConfigCountAggregateOutputType | null
    _avg: NoticiasConfigAvgAggregateOutputType | null
    _sum: NoticiasConfigSumAggregateOutputType | null
    _min: NoticiasConfigMinAggregateOutputType | null
    _max: NoticiasConfigMaxAggregateOutputType | null
  }

  export type NoticiasConfigAvgAggregateOutputType = {
    limite: number | null
  }

  export type NoticiasConfigSumAggregateOutputType = {
    limite: number | null
  }

  export type NoticiasConfigMinAggregateOutputType = {
    id: string | null
    servidorId: string | null
    palabraClave: string | null
    limite: number | null
  }

  export type NoticiasConfigMaxAggregateOutputType = {
    id: string | null
    servidorId: string | null
    palabraClave: string | null
    limite: number | null
  }

  export type NoticiasConfigCountAggregateOutputType = {
    id: number
    servidorId: number
    palabraClave: number
    limite: number
    _all: number
  }


  export type NoticiasConfigAvgAggregateInputType = {
    limite?: true
  }

  export type NoticiasConfigSumAggregateInputType = {
    limite?: true
  }

  export type NoticiasConfigMinAggregateInputType = {
    id?: true
    servidorId?: true
    palabraClave?: true
    limite?: true
  }

  export type NoticiasConfigMaxAggregateInputType = {
    id?: true
    servidorId?: true
    palabraClave?: true
    limite?: true
  }

  export type NoticiasConfigCountAggregateInputType = {
    id?: true
    servidorId?: true
    palabraClave?: true
    limite?: true
    _all?: true
  }

  export type NoticiasConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoticiasConfig to aggregate.
     */
    where?: NoticiasConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoticiasConfigs to fetch.
     */
    orderBy?: NoticiasConfigOrderByWithRelationInput | NoticiasConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticiasConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoticiasConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoticiasConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NoticiasConfigs
    **/
    _count?: true | NoticiasConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticiasConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticiasConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticiasConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticiasConfigMaxAggregateInputType
  }

  export type GetNoticiasConfigAggregateType<T extends NoticiasConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateNoticiasConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoticiasConfig[P]>
      : GetScalarType<T[P], AggregateNoticiasConfig[P]>
  }




  export type NoticiasConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticiasConfigWhereInput
    orderBy?: NoticiasConfigOrderByWithAggregationInput | NoticiasConfigOrderByWithAggregationInput[]
    by: NoticiasConfigScalarFieldEnum[] | NoticiasConfigScalarFieldEnum
    having?: NoticiasConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticiasConfigCountAggregateInputType | true
    _avg?: NoticiasConfigAvgAggregateInputType
    _sum?: NoticiasConfigSumAggregateInputType
    _min?: NoticiasConfigMinAggregateInputType
    _max?: NoticiasConfigMaxAggregateInputType
  }

  export type NoticiasConfigGroupByOutputType = {
    id: string
    servidorId: string
    palabraClave: string
    limite: number
    _count: NoticiasConfigCountAggregateOutputType | null
    _avg: NoticiasConfigAvgAggregateOutputType | null
    _sum: NoticiasConfigSumAggregateOutputType | null
    _min: NoticiasConfigMinAggregateOutputType | null
    _max: NoticiasConfigMaxAggregateOutputType | null
  }

  type GetNoticiasConfigGroupByPayload<T extends NoticiasConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticiasConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticiasConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticiasConfigGroupByOutputType[P]>
            : GetScalarType<T[P], NoticiasConfigGroupByOutputType[P]>
        }
      >
    >


  export type NoticiasConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servidorId?: boolean
    palabraClave?: boolean
    limite?: boolean
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noticiasConfig"]>

  export type NoticiasConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servidorId?: boolean
    palabraClave?: boolean
    limite?: boolean
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noticiasConfig"]>

  export type NoticiasConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servidorId?: boolean
    palabraClave?: boolean
    limite?: boolean
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noticiasConfig"]>

  export type NoticiasConfigSelectScalar = {
    id?: boolean
    servidorId?: boolean
    palabraClave?: boolean
    limite?: boolean
  }

  export type NoticiasConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "servidorId" | "palabraClave" | "limite", ExtArgs["result"]["noticiasConfig"]>
  export type NoticiasConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }
  export type NoticiasConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }
  export type NoticiasConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }

  export type $NoticiasConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NoticiasConfig"
    objects: {
      servidor: Prisma.$ServidorUnitarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      servidorId: string
      palabraClave: string
      limite: number
    }, ExtArgs["result"]["noticiasConfig"]>
    composites: {}
  }

  type NoticiasConfigGetPayload<S extends boolean | null | undefined | NoticiasConfigDefaultArgs> = $Result.GetResult<Prisma.$NoticiasConfigPayload, S>

  type NoticiasConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoticiasConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoticiasConfigCountAggregateInputType | true
    }

  export interface NoticiasConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NoticiasConfig'], meta: { name: 'NoticiasConfig' } }
    /**
     * Find zero or one NoticiasConfig that matches the filter.
     * @param {NoticiasConfigFindUniqueArgs} args - Arguments to find a NoticiasConfig
     * @example
     * // Get one NoticiasConfig
     * const noticiasConfig = await prisma.noticiasConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticiasConfigFindUniqueArgs>(args: SelectSubset<T, NoticiasConfigFindUniqueArgs<ExtArgs>>): Prisma__NoticiasConfigClient<$Result.GetResult<Prisma.$NoticiasConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NoticiasConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoticiasConfigFindUniqueOrThrowArgs} args - Arguments to find a NoticiasConfig
     * @example
     * // Get one NoticiasConfig
     * const noticiasConfig = await prisma.noticiasConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticiasConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticiasConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticiasConfigClient<$Result.GetResult<Prisma.$NoticiasConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoticiasConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasConfigFindFirstArgs} args - Arguments to find a NoticiasConfig
     * @example
     * // Get one NoticiasConfig
     * const noticiasConfig = await prisma.noticiasConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticiasConfigFindFirstArgs>(args?: SelectSubset<T, NoticiasConfigFindFirstArgs<ExtArgs>>): Prisma__NoticiasConfigClient<$Result.GetResult<Prisma.$NoticiasConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoticiasConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasConfigFindFirstOrThrowArgs} args - Arguments to find a NoticiasConfig
     * @example
     * // Get one NoticiasConfig
     * const noticiasConfig = await prisma.noticiasConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticiasConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticiasConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticiasConfigClient<$Result.GetResult<Prisma.$NoticiasConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NoticiasConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoticiasConfigs
     * const noticiasConfigs = await prisma.noticiasConfig.findMany()
     * 
     * // Get first 10 NoticiasConfigs
     * const noticiasConfigs = await prisma.noticiasConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticiasConfigWithIdOnly = await prisma.noticiasConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticiasConfigFindManyArgs>(args?: SelectSubset<T, NoticiasConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiasConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NoticiasConfig.
     * @param {NoticiasConfigCreateArgs} args - Arguments to create a NoticiasConfig.
     * @example
     * // Create one NoticiasConfig
     * const NoticiasConfig = await prisma.noticiasConfig.create({
     *   data: {
     *     // ... data to create a NoticiasConfig
     *   }
     * })
     * 
     */
    create<T extends NoticiasConfigCreateArgs>(args: SelectSubset<T, NoticiasConfigCreateArgs<ExtArgs>>): Prisma__NoticiasConfigClient<$Result.GetResult<Prisma.$NoticiasConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NoticiasConfigs.
     * @param {NoticiasConfigCreateManyArgs} args - Arguments to create many NoticiasConfigs.
     * @example
     * // Create many NoticiasConfigs
     * const noticiasConfig = await prisma.noticiasConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticiasConfigCreateManyArgs>(args?: SelectSubset<T, NoticiasConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NoticiasConfigs and returns the data saved in the database.
     * @param {NoticiasConfigCreateManyAndReturnArgs} args - Arguments to create many NoticiasConfigs.
     * @example
     * // Create many NoticiasConfigs
     * const noticiasConfig = await prisma.noticiasConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NoticiasConfigs and only return the `id`
     * const noticiasConfigWithIdOnly = await prisma.noticiasConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoticiasConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, NoticiasConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiasConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NoticiasConfig.
     * @param {NoticiasConfigDeleteArgs} args - Arguments to delete one NoticiasConfig.
     * @example
     * // Delete one NoticiasConfig
     * const NoticiasConfig = await prisma.noticiasConfig.delete({
     *   where: {
     *     // ... filter to delete one NoticiasConfig
     *   }
     * })
     * 
     */
    delete<T extends NoticiasConfigDeleteArgs>(args: SelectSubset<T, NoticiasConfigDeleteArgs<ExtArgs>>): Prisma__NoticiasConfigClient<$Result.GetResult<Prisma.$NoticiasConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NoticiasConfig.
     * @param {NoticiasConfigUpdateArgs} args - Arguments to update one NoticiasConfig.
     * @example
     * // Update one NoticiasConfig
     * const noticiasConfig = await prisma.noticiasConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticiasConfigUpdateArgs>(args: SelectSubset<T, NoticiasConfigUpdateArgs<ExtArgs>>): Prisma__NoticiasConfigClient<$Result.GetResult<Prisma.$NoticiasConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NoticiasConfigs.
     * @param {NoticiasConfigDeleteManyArgs} args - Arguments to filter NoticiasConfigs to delete.
     * @example
     * // Delete a few NoticiasConfigs
     * const { count } = await prisma.noticiasConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticiasConfigDeleteManyArgs>(args?: SelectSubset<T, NoticiasConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoticiasConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoticiasConfigs
     * const noticiasConfig = await prisma.noticiasConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticiasConfigUpdateManyArgs>(args: SelectSubset<T, NoticiasConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoticiasConfigs and returns the data updated in the database.
     * @param {NoticiasConfigUpdateManyAndReturnArgs} args - Arguments to update many NoticiasConfigs.
     * @example
     * // Update many NoticiasConfigs
     * const noticiasConfig = await prisma.noticiasConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NoticiasConfigs and only return the `id`
     * const noticiasConfigWithIdOnly = await prisma.noticiasConfig.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends NoticiasConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, NoticiasConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiasConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NoticiasConfig.
     * @param {NoticiasConfigUpsertArgs} args - Arguments to update or create a NoticiasConfig.
     * @example
     * // Update or create a NoticiasConfig
     * const noticiasConfig = await prisma.noticiasConfig.upsert({
     *   create: {
     *     // ... data to create a NoticiasConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoticiasConfig we want to update
     *   }
     * })
     */
    upsert<T extends NoticiasConfigUpsertArgs>(args: SelectSubset<T, NoticiasConfigUpsertArgs<ExtArgs>>): Prisma__NoticiasConfigClient<$Result.GetResult<Prisma.$NoticiasConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NoticiasConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasConfigCountArgs} args - Arguments to filter NoticiasConfigs to count.
     * @example
     * // Count the number of NoticiasConfigs
     * const count = await prisma.noticiasConfig.count({
     *   where: {
     *     // ... the filter for the NoticiasConfigs we want to count
     *   }
     * })
    **/
    count<T extends NoticiasConfigCountArgs>(
      args?: Subset<T, NoticiasConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticiasConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NoticiasConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticiasConfigAggregateArgs>(args: Subset<T, NoticiasConfigAggregateArgs>): Prisma.PrismaPromise<GetNoticiasConfigAggregateType<T>>

    /**
     * Group by NoticiasConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasConfigGroupByArgs} args - Group by arguments.
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
      T extends NoticiasConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticiasConfigGroupByArgs['orderBy'] }
        : { orderBy?: NoticiasConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoticiasConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticiasConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NoticiasConfig model
   */
  readonly fields: NoticiasConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoticiasConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticiasConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servidor<T extends ServidorUnitarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServidorUnitarioDefaultArgs<ExtArgs>>): Prisma__ServidorUnitarioClient<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NoticiasConfig model
   */
  interface NoticiasConfigFieldRefs {
    readonly id: FieldRef<"NoticiasConfig", 'String'>
    readonly servidorId: FieldRef<"NoticiasConfig", 'String'>
    readonly palabraClave: FieldRef<"NoticiasConfig", 'String'>
    readonly limite: FieldRef<"NoticiasConfig", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NoticiasConfig findUnique
   */
  export type NoticiasConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticiasConfig
     */
    select?: NoticiasConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticiasConfig
     */
    omit?: NoticiasConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiasConfigInclude<ExtArgs> | null
    /**
     * Filter, which NoticiasConfig to fetch.
     */
    where: NoticiasConfigWhereUniqueInput
  }

  /**
   * NoticiasConfig findUniqueOrThrow
   */
  export type NoticiasConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticiasConfig
     */
    select?: NoticiasConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticiasConfig
     */
    omit?: NoticiasConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiasConfigInclude<ExtArgs> | null
    /**
     * Filter, which NoticiasConfig to fetch.
     */
    where: NoticiasConfigWhereUniqueInput
  }

  /**
   * NoticiasConfig findFirst
   */
  export type NoticiasConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticiasConfig
     */
    select?: NoticiasConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticiasConfig
     */
    omit?: NoticiasConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiasConfigInclude<ExtArgs> | null
    /**
     * Filter, which NoticiasConfig to fetch.
     */
    where?: NoticiasConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoticiasConfigs to fetch.
     */
    orderBy?: NoticiasConfigOrderByWithRelationInput | NoticiasConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoticiasConfigs.
     */
    cursor?: NoticiasConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoticiasConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoticiasConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoticiasConfigs.
     */
    distinct?: NoticiasConfigScalarFieldEnum | NoticiasConfigScalarFieldEnum[]
  }

  /**
   * NoticiasConfig findFirstOrThrow
   */
  export type NoticiasConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticiasConfig
     */
    select?: NoticiasConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticiasConfig
     */
    omit?: NoticiasConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiasConfigInclude<ExtArgs> | null
    /**
     * Filter, which NoticiasConfig to fetch.
     */
    where?: NoticiasConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoticiasConfigs to fetch.
     */
    orderBy?: NoticiasConfigOrderByWithRelationInput | NoticiasConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoticiasConfigs.
     */
    cursor?: NoticiasConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoticiasConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoticiasConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoticiasConfigs.
     */
    distinct?: NoticiasConfigScalarFieldEnum | NoticiasConfigScalarFieldEnum[]
  }

  /**
   * NoticiasConfig findMany
   */
  export type NoticiasConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticiasConfig
     */
    select?: NoticiasConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticiasConfig
     */
    omit?: NoticiasConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiasConfigInclude<ExtArgs> | null
    /**
     * Filter, which NoticiasConfigs to fetch.
     */
    where?: NoticiasConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoticiasConfigs to fetch.
     */
    orderBy?: NoticiasConfigOrderByWithRelationInput | NoticiasConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NoticiasConfigs.
     */
    cursor?: NoticiasConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoticiasConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoticiasConfigs.
     */
    skip?: number
    distinct?: NoticiasConfigScalarFieldEnum | NoticiasConfigScalarFieldEnum[]
  }

  /**
   * NoticiasConfig create
   */
  export type NoticiasConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticiasConfig
     */
    select?: NoticiasConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticiasConfig
     */
    omit?: NoticiasConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiasConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a NoticiasConfig.
     */
    data: XOR<NoticiasConfigCreateInput, NoticiasConfigUncheckedCreateInput>
  }

  /**
   * NoticiasConfig createMany
   */
  export type NoticiasConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NoticiasConfigs.
     */
    data: NoticiasConfigCreateManyInput | NoticiasConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoticiasConfig createManyAndReturn
   */
  export type NoticiasConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticiasConfig
     */
    select?: NoticiasConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoticiasConfig
     */
    omit?: NoticiasConfigOmit<ExtArgs> | null
    /**
     * The data used to create many NoticiasConfigs.
     */
    data: NoticiasConfigCreateManyInput | NoticiasConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiasConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoticiasConfig update
   */
  export type NoticiasConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticiasConfig
     */
    select?: NoticiasConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticiasConfig
     */
    omit?: NoticiasConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiasConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a NoticiasConfig.
     */
    data: XOR<NoticiasConfigUpdateInput, NoticiasConfigUncheckedUpdateInput>
    /**
     * Choose, which NoticiasConfig to update.
     */
    where: NoticiasConfigWhereUniqueInput
  }

  /**
   * NoticiasConfig updateMany
   */
  export type NoticiasConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NoticiasConfigs.
     */
    data: XOR<NoticiasConfigUpdateManyMutationInput, NoticiasConfigUncheckedUpdateManyInput>
    /**
     * Filter which NoticiasConfigs to update
     */
    where?: NoticiasConfigWhereInput
    /**
     * Limit how many NoticiasConfigs to update.
     */
    limit?: number
  }

  /**
   * NoticiasConfig updateManyAndReturn
   */
  export type NoticiasConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticiasConfig
     */
    select?: NoticiasConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoticiasConfig
     */
    omit?: NoticiasConfigOmit<ExtArgs> | null
    /**
     * The data used to update NoticiasConfigs.
     */
    data: XOR<NoticiasConfigUpdateManyMutationInput, NoticiasConfigUncheckedUpdateManyInput>
    /**
     * Filter which NoticiasConfigs to update
     */
    where?: NoticiasConfigWhereInput
    /**
     * Limit how many NoticiasConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiasConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoticiasConfig upsert
   */
  export type NoticiasConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticiasConfig
     */
    select?: NoticiasConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticiasConfig
     */
    omit?: NoticiasConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiasConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the NoticiasConfig to update in case it exists.
     */
    where: NoticiasConfigWhereUniqueInput
    /**
     * In case the NoticiasConfig found by the `where` argument doesn't exist, create a new NoticiasConfig with this data.
     */
    create: XOR<NoticiasConfigCreateInput, NoticiasConfigUncheckedCreateInput>
    /**
     * In case the NoticiasConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticiasConfigUpdateInput, NoticiasConfigUncheckedUpdateInput>
  }

  /**
   * NoticiasConfig delete
   */
  export type NoticiasConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticiasConfig
     */
    select?: NoticiasConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticiasConfig
     */
    omit?: NoticiasConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiasConfigInclude<ExtArgs> | null
    /**
     * Filter which NoticiasConfig to delete.
     */
    where: NoticiasConfigWhereUniqueInput
  }

  /**
   * NoticiasConfig deleteMany
   */
  export type NoticiasConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoticiasConfigs to delete
     */
    where?: NoticiasConfigWhereInput
    /**
     * Limit how many NoticiasConfigs to delete.
     */
    limit?: number
  }

  /**
   * NoticiasConfig without action
   */
  export type NoticiasConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticiasConfig
     */
    select?: NoticiasConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoticiasConfig
     */
    omit?: NoticiasConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiasConfigInclude<ExtArgs> | null
  }


  /**
   * Model FuenteAutomatica
   */

  export type AggregateFuenteAutomatica = {
    _count: FuenteAutomaticaCountAggregateOutputType | null
    _min: FuenteAutomaticaMinAggregateOutputType | null
    _max: FuenteAutomaticaMaxAggregateOutputType | null
  }

  export type FuenteAutomaticaMinAggregateOutputType = {
    id: string | null
    servidorId: string | null
    nombre: string | null
    url: string | null
    tipo: string | null
  }

  export type FuenteAutomaticaMaxAggregateOutputType = {
    id: string | null
    servidorId: string | null
    nombre: string | null
    url: string | null
    tipo: string | null
  }

  export type FuenteAutomaticaCountAggregateOutputType = {
    id: number
    servidorId: number
    nombre: number
    url: number
    tipo: number
    _all: number
  }


  export type FuenteAutomaticaMinAggregateInputType = {
    id?: true
    servidorId?: true
    nombre?: true
    url?: true
    tipo?: true
  }

  export type FuenteAutomaticaMaxAggregateInputType = {
    id?: true
    servidorId?: true
    nombre?: true
    url?: true
    tipo?: true
  }

  export type FuenteAutomaticaCountAggregateInputType = {
    id?: true
    servidorId?: true
    nombre?: true
    url?: true
    tipo?: true
    _all?: true
  }

  export type FuenteAutomaticaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FuenteAutomatica to aggregate.
     */
    where?: FuenteAutomaticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuenteAutomaticas to fetch.
     */
    orderBy?: FuenteAutomaticaOrderByWithRelationInput | FuenteAutomaticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuenteAutomaticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuenteAutomaticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuenteAutomaticas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FuenteAutomaticas
    **/
    _count?: true | FuenteAutomaticaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuenteAutomaticaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuenteAutomaticaMaxAggregateInputType
  }

  export type GetFuenteAutomaticaAggregateType<T extends FuenteAutomaticaAggregateArgs> = {
        [P in keyof T & keyof AggregateFuenteAutomatica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuenteAutomatica[P]>
      : GetScalarType<T[P], AggregateFuenteAutomatica[P]>
  }




  export type FuenteAutomaticaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuenteAutomaticaWhereInput
    orderBy?: FuenteAutomaticaOrderByWithAggregationInput | FuenteAutomaticaOrderByWithAggregationInput[]
    by: FuenteAutomaticaScalarFieldEnum[] | FuenteAutomaticaScalarFieldEnum
    having?: FuenteAutomaticaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuenteAutomaticaCountAggregateInputType | true
    _min?: FuenteAutomaticaMinAggregateInputType
    _max?: FuenteAutomaticaMaxAggregateInputType
  }

  export type FuenteAutomaticaGroupByOutputType = {
    id: string
    servidorId: string
    nombre: string
    url: string
    tipo: string
    _count: FuenteAutomaticaCountAggregateOutputType | null
    _min: FuenteAutomaticaMinAggregateOutputType | null
    _max: FuenteAutomaticaMaxAggregateOutputType | null
  }

  type GetFuenteAutomaticaGroupByPayload<T extends FuenteAutomaticaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuenteAutomaticaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuenteAutomaticaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuenteAutomaticaGroupByOutputType[P]>
            : GetScalarType<T[P], FuenteAutomaticaGroupByOutputType[P]>
        }
      >
    >


  export type FuenteAutomaticaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servidorId?: boolean
    nombre?: boolean
    url?: boolean
    tipo?: boolean
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fuenteAutomatica"]>

  export type FuenteAutomaticaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servidorId?: boolean
    nombre?: boolean
    url?: boolean
    tipo?: boolean
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fuenteAutomatica"]>

  export type FuenteAutomaticaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servidorId?: boolean
    nombre?: boolean
    url?: boolean
    tipo?: boolean
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fuenteAutomatica"]>

  export type FuenteAutomaticaSelectScalar = {
    id?: boolean
    servidorId?: boolean
    nombre?: boolean
    url?: boolean
    tipo?: boolean
  }

  export type FuenteAutomaticaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "servidorId" | "nombre" | "url" | "tipo", ExtArgs["result"]["fuenteAutomatica"]>
  export type FuenteAutomaticaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }
  export type FuenteAutomaticaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }
  export type FuenteAutomaticaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }

  export type $FuenteAutomaticaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FuenteAutomatica"
    objects: {
      servidor: Prisma.$ServidorUnitarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      servidorId: string
      nombre: string
      url: string
      tipo: string
    }, ExtArgs["result"]["fuenteAutomatica"]>
    composites: {}
  }

  type FuenteAutomaticaGetPayload<S extends boolean | null | undefined | FuenteAutomaticaDefaultArgs> = $Result.GetResult<Prisma.$FuenteAutomaticaPayload, S>

  type FuenteAutomaticaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuenteAutomaticaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuenteAutomaticaCountAggregateInputType | true
    }

  export interface FuenteAutomaticaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FuenteAutomatica'], meta: { name: 'FuenteAutomatica' } }
    /**
     * Find zero or one FuenteAutomatica that matches the filter.
     * @param {FuenteAutomaticaFindUniqueArgs} args - Arguments to find a FuenteAutomatica
     * @example
     * // Get one FuenteAutomatica
     * const fuenteAutomatica = await prisma.fuenteAutomatica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuenteAutomaticaFindUniqueArgs>(args: SelectSubset<T, FuenteAutomaticaFindUniqueArgs<ExtArgs>>): Prisma__FuenteAutomaticaClient<$Result.GetResult<Prisma.$FuenteAutomaticaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FuenteAutomatica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuenteAutomaticaFindUniqueOrThrowArgs} args - Arguments to find a FuenteAutomatica
     * @example
     * // Get one FuenteAutomatica
     * const fuenteAutomatica = await prisma.fuenteAutomatica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuenteAutomaticaFindUniqueOrThrowArgs>(args: SelectSubset<T, FuenteAutomaticaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuenteAutomaticaClient<$Result.GetResult<Prisma.$FuenteAutomaticaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FuenteAutomatica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuenteAutomaticaFindFirstArgs} args - Arguments to find a FuenteAutomatica
     * @example
     * // Get one FuenteAutomatica
     * const fuenteAutomatica = await prisma.fuenteAutomatica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuenteAutomaticaFindFirstArgs>(args?: SelectSubset<T, FuenteAutomaticaFindFirstArgs<ExtArgs>>): Prisma__FuenteAutomaticaClient<$Result.GetResult<Prisma.$FuenteAutomaticaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FuenteAutomatica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuenteAutomaticaFindFirstOrThrowArgs} args - Arguments to find a FuenteAutomatica
     * @example
     * // Get one FuenteAutomatica
     * const fuenteAutomatica = await prisma.fuenteAutomatica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuenteAutomaticaFindFirstOrThrowArgs>(args?: SelectSubset<T, FuenteAutomaticaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuenteAutomaticaClient<$Result.GetResult<Prisma.$FuenteAutomaticaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FuenteAutomaticas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuenteAutomaticaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FuenteAutomaticas
     * const fuenteAutomaticas = await prisma.fuenteAutomatica.findMany()
     * 
     * // Get first 10 FuenteAutomaticas
     * const fuenteAutomaticas = await prisma.fuenteAutomatica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fuenteAutomaticaWithIdOnly = await prisma.fuenteAutomatica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuenteAutomaticaFindManyArgs>(args?: SelectSubset<T, FuenteAutomaticaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuenteAutomaticaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FuenteAutomatica.
     * @param {FuenteAutomaticaCreateArgs} args - Arguments to create a FuenteAutomatica.
     * @example
     * // Create one FuenteAutomatica
     * const FuenteAutomatica = await prisma.fuenteAutomatica.create({
     *   data: {
     *     // ... data to create a FuenteAutomatica
     *   }
     * })
     * 
     */
    create<T extends FuenteAutomaticaCreateArgs>(args: SelectSubset<T, FuenteAutomaticaCreateArgs<ExtArgs>>): Prisma__FuenteAutomaticaClient<$Result.GetResult<Prisma.$FuenteAutomaticaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FuenteAutomaticas.
     * @param {FuenteAutomaticaCreateManyArgs} args - Arguments to create many FuenteAutomaticas.
     * @example
     * // Create many FuenteAutomaticas
     * const fuenteAutomatica = await prisma.fuenteAutomatica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuenteAutomaticaCreateManyArgs>(args?: SelectSubset<T, FuenteAutomaticaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FuenteAutomaticas and returns the data saved in the database.
     * @param {FuenteAutomaticaCreateManyAndReturnArgs} args - Arguments to create many FuenteAutomaticas.
     * @example
     * // Create many FuenteAutomaticas
     * const fuenteAutomatica = await prisma.fuenteAutomatica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FuenteAutomaticas and only return the `id`
     * const fuenteAutomaticaWithIdOnly = await prisma.fuenteAutomatica.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuenteAutomaticaCreateManyAndReturnArgs>(args?: SelectSubset<T, FuenteAutomaticaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuenteAutomaticaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FuenteAutomatica.
     * @param {FuenteAutomaticaDeleteArgs} args - Arguments to delete one FuenteAutomatica.
     * @example
     * // Delete one FuenteAutomatica
     * const FuenteAutomatica = await prisma.fuenteAutomatica.delete({
     *   where: {
     *     // ... filter to delete one FuenteAutomatica
     *   }
     * })
     * 
     */
    delete<T extends FuenteAutomaticaDeleteArgs>(args: SelectSubset<T, FuenteAutomaticaDeleteArgs<ExtArgs>>): Prisma__FuenteAutomaticaClient<$Result.GetResult<Prisma.$FuenteAutomaticaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FuenteAutomatica.
     * @param {FuenteAutomaticaUpdateArgs} args - Arguments to update one FuenteAutomatica.
     * @example
     * // Update one FuenteAutomatica
     * const fuenteAutomatica = await prisma.fuenteAutomatica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuenteAutomaticaUpdateArgs>(args: SelectSubset<T, FuenteAutomaticaUpdateArgs<ExtArgs>>): Prisma__FuenteAutomaticaClient<$Result.GetResult<Prisma.$FuenteAutomaticaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FuenteAutomaticas.
     * @param {FuenteAutomaticaDeleteManyArgs} args - Arguments to filter FuenteAutomaticas to delete.
     * @example
     * // Delete a few FuenteAutomaticas
     * const { count } = await prisma.fuenteAutomatica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuenteAutomaticaDeleteManyArgs>(args?: SelectSubset<T, FuenteAutomaticaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FuenteAutomaticas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuenteAutomaticaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FuenteAutomaticas
     * const fuenteAutomatica = await prisma.fuenteAutomatica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuenteAutomaticaUpdateManyArgs>(args: SelectSubset<T, FuenteAutomaticaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FuenteAutomaticas and returns the data updated in the database.
     * @param {FuenteAutomaticaUpdateManyAndReturnArgs} args - Arguments to update many FuenteAutomaticas.
     * @example
     * // Update many FuenteAutomaticas
     * const fuenteAutomatica = await prisma.fuenteAutomatica.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FuenteAutomaticas and only return the `id`
     * const fuenteAutomaticaWithIdOnly = await prisma.fuenteAutomatica.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends FuenteAutomaticaUpdateManyAndReturnArgs>(args: SelectSubset<T, FuenteAutomaticaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuenteAutomaticaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FuenteAutomatica.
     * @param {FuenteAutomaticaUpsertArgs} args - Arguments to update or create a FuenteAutomatica.
     * @example
     * // Update or create a FuenteAutomatica
     * const fuenteAutomatica = await prisma.fuenteAutomatica.upsert({
     *   create: {
     *     // ... data to create a FuenteAutomatica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FuenteAutomatica we want to update
     *   }
     * })
     */
    upsert<T extends FuenteAutomaticaUpsertArgs>(args: SelectSubset<T, FuenteAutomaticaUpsertArgs<ExtArgs>>): Prisma__FuenteAutomaticaClient<$Result.GetResult<Prisma.$FuenteAutomaticaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FuenteAutomaticas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuenteAutomaticaCountArgs} args - Arguments to filter FuenteAutomaticas to count.
     * @example
     * // Count the number of FuenteAutomaticas
     * const count = await prisma.fuenteAutomatica.count({
     *   where: {
     *     // ... the filter for the FuenteAutomaticas we want to count
     *   }
     * })
    **/
    count<T extends FuenteAutomaticaCountArgs>(
      args?: Subset<T, FuenteAutomaticaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuenteAutomaticaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FuenteAutomatica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuenteAutomaticaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuenteAutomaticaAggregateArgs>(args: Subset<T, FuenteAutomaticaAggregateArgs>): Prisma.PrismaPromise<GetFuenteAutomaticaAggregateType<T>>

    /**
     * Group by FuenteAutomatica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuenteAutomaticaGroupByArgs} args - Group by arguments.
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
      T extends FuenteAutomaticaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuenteAutomaticaGroupByArgs['orderBy'] }
        : { orderBy?: FuenteAutomaticaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FuenteAutomaticaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuenteAutomaticaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FuenteAutomatica model
   */
  readonly fields: FuenteAutomaticaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FuenteAutomatica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuenteAutomaticaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servidor<T extends ServidorUnitarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServidorUnitarioDefaultArgs<ExtArgs>>): Prisma__ServidorUnitarioClient<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FuenteAutomatica model
   */
  interface FuenteAutomaticaFieldRefs {
    readonly id: FieldRef<"FuenteAutomatica", 'String'>
    readonly servidorId: FieldRef<"FuenteAutomatica", 'String'>
    readonly nombre: FieldRef<"FuenteAutomatica", 'String'>
    readonly url: FieldRef<"FuenteAutomatica", 'String'>
    readonly tipo: FieldRef<"FuenteAutomatica", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FuenteAutomatica findUnique
   */
  export type FuenteAutomaticaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuenteAutomatica
     */
    select?: FuenteAutomaticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuenteAutomatica
     */
    omit?: FuenteAutomaticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuenteAutomaticaInclude<ExtArgs> | null
    /**
     * Filter, which FuenteAutomatica to fetch.
     */
    where: FuenteAutomaticaWhereUniqueInput
  }

  /**
   * FuenteAutomatica findUniqueOrThrow
   */
  export type FuenteAutomaticaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuenteAutomatica
     */
    select?: FuenteAutomaticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuenteAutomatica
     */
    omit?: FuenteAutomaticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuenteAutomaticaInclude<ExtArgs> | null
    /**
     * Filter, which FuenteAutomatica to fetch.
     */
    where: FuenteAutomaticaWhereUniqueInput
  }

  /**
   * FuenteAutomatica findFirst
   */
  export type FuenteAutomaticaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuenteAutomatica
     */
    select?: FuenteAutomaticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuenteAutomatica
     */
    omit?: FuenteAutomaticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuenteAutomaticaInclude<ExtArgs> | null
    /**
     * Filter, which FuenteAutomatica to fetch.
     */
    where?: FuenteAutomaticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuenteAutomaticas to fetch.
     */
    orderBy?: FuenteAutomaticaOrderByWithRelationInput | FuenteAutomaticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FuenteAutomaticas.
     */
    cursor?: FuenteAutomaticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuenteAutomaticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuenteAutomaticas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FuenteAutomaticas.
     */
    distinct?: FuenteAutomaticaScalarFieldEnum | FuenteAutomaticaScalarFieldEnum[]
  }

  /**
   * FuenteAutomatica findFirstOrThrow
   */
  export type FuenteAutomaticaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuenteAutomatica
     */
    select?: FuenteAutomaticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuenteAutomatica
     */
    omit?: FuenteAutomaticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuenteAutomaticaInclude<ExtArgs> | null
    /**
     * Filter, which FuenteAutomatica to fetch.
     */
    where?: FuenteAutomaticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuenteAutomaticas to fetch.
     */
    orderBy?: FuenteAutomaticaOrderByWithRelationInput | FuenteAutomaticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FuenteAutomaticas.
     */
    cursor?: FuenteAutomaticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuenteAutomaticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuenteAutomaticas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FuenteAutomaticas.
     */
    distinct?: FuenteAutomaticaScalarFieldEnum | FuenteAutomaticaScalarFieldEnum[]
  }

  /**
   * FuenteAutomatica findMany
   */
  export type FuenteAutomaticaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuenteAutomatica
     */
    select?: FuenteAutomaticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuenteAutomatica
     */
    omit?: FuenteAutomaticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuenteAutomaticaInclude<ExtArgs> | null
    /**
     * Filter, which FuenteAutomaticas to fetch.
     */
    where?: FuenteAutomaticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuenteAutomaticas to fetch.
     */
    orderBy?: FuenteAutomaticaOrderByWithRelationInput | FuenteAutomaticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FuenteAutomaticas.
     */
    cursor?: FuenteAutomaticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuenteAutomaticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuenteAutomaticas.
     */
    skip?: number
    distinct?: FuenteAutomaticaScalarFieldEnum | FuenteAutomaticaScalarFieldEnum[]
  }

  /**
   * FuenteAutomatica create
   */
  export type FuenteAutomaticaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuenteAutomatica
     */
    select?: FuenteAutomaticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuenteAutomatica
     */
    omit?: FuenteAutomaticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuenteAutomaticaInclude<ExtArgs> | null
    /**
     * The data needed to create a FuenteAutomatica.
     */
    data: XOR<FuenteAutomaticaCreateInput, FuenteAutomaticaUncheckedCreateInput>
  }

  /**
   * FuenteAutomatica createMany
   */
  export type FuenteAutomaticaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FuenteAutomaticas.
     */
    data: FuenteAutomaticaCreateManyInput | FuenteAutomaticaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FuenteAutomatica createManyAndReturn
   */
  export type FuenteAutomaticaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuenteAutomatica
     */
    select?: FuenteAutomaticaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FuenteAutomatica
     */
    omit?: FuenteAutomaticaOmit<ExtArgs> | null
    /**
     * The data used to create many FuenteAutomaticas.
     */
    data: FuenteAutomaticaCreateManyInput | FuenteAutomaticaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuenteAutomaticaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FuenteAutomatica update
   */
  export type FuenteAutomaticaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuenteAutomatica
     */
    select?: FuenteAutomaticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuenteAutomatica
     */
    omit?: FuenteAutomaticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuenteAutomaticaInclude<ExtArgs> | null
    /**
     * The data needed to update a FuenteAutomatica.
     */
    data: XOR<FuenteAutomaticaUpdateInput, FuenteAutomaticaUncheckedUpdateInput>
    /**
     * Choose, which FuenteAutomatica to update.
     */
    where: FuenteAutomaticaWhereUniqueInput
  }

  /**
   * FuenteAutomatica updateMany
   */
  export type FuenteAutomaticaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FuenteAutomaticas.
     */
    data: XOR<FuenteAutomaticaUpdateManyMutationInput, FuenteAutomaticaUncheckedUpdateManyInput>
    /**
     * Filter which FuenteAutomaticas to update
     */
    where?: FuenteAutomaticaWhereInput
    /**
     * Limit how many FuenteAutomaticas to update.
     */
    limit?: number
  }

  /**
   * FuenteAutomatica updateManyAndReturn
   */
  export type FuenteAutomaticaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuenteAutomatica
     */
    select?: FuenteAutomaticaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FuenteAutomatica
     */
    omit?: FuenteAutomaticaOmit<ExtArgs> | null
    /**
     * The data used to update FuenteAutomaticas.
     */
    data: XOR<FuenteAutomaticaUpdateManyMutationInput, FuenteAutomaticaUncheckedUpdateManyInput>
    /**
     * Filter which FuenteAutomaticas to update
     */
    where?: FuenteAutomaticaWhereInput
    /**
     * Limit how many FuenteAutomaticas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuenteAutomaticaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FuenteAutomatica upsert
   */
  export type FuenteAutomaticaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuenteAutomatica
     */
    select?: FuenteAutomaticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuenteAutomatica
     */
    omit?: FuenteAutomaticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuenteAutomaticaInclude<ExtArgs> | null
    /**
     * The filter to search for the FuenteAutomatica to update in case it exists.
     */
    where: FuenteAutomaticaWhereUniqueInput
    /**
     * In case the FuenteAutomatica found by the `where` argument doesn't exist, create a new FuenteAutomatica with this data.
     */
    create: XOR<FuenteAutomaticaCreateInput, FuenteAutomaticaUncheckedCreateInput>
    /**
     * In case the FuenteAutomatica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuenteAutomaticaUpdateInput, FuenteAutomaticaUncheckedUpdateInput>
  }

  /**
   * FuenteAutomatica delete
   */
  export type FuenteAutomaticaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuenteAutomatica
     */
    select?: FuenteAutomaticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuenteAutomatica
     */
    omit?: FuenteAutomaticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuenteAutomaticaInclude<ExtArgs> | null
    /**
     * Filter which FuenteAutomatica to delete.
     */
    where: FuenteAutomaticaWhereUniqueInput
  }

  /**
   * FuenteAutomatica deleteMany
   */
  export type FuenteAutomaticaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FuenteAutomaticas to delete
     */
    where?: FuenteAutomaticaWhereInput
    /**
     * Limit how many FuenteAutomaticas to delete.
     */
    limit?: number
  }

  /**
   * FuenteAutomatica without action
   */
  export type FuenteAutomaticaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuenteAutomatica
     */
    select?: FuenteAutomaticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuenteAutomatica
     */
    omit?: FuenteAutomaticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuenteAutomaticaInclude<ExtArgs> | null
  }


  /**
   * Model ManualArticle
   */

  export type AggregateManualArticle = {
    _count: ManualArticleCountAggregateOutputType | null
    _min: ManualArticleMinAggregateOutputType | null
    _max: ManualArticleMaxAggregateOutputType | null
  }

  export type ManualArticleMinAggregateOutputType = {
    id: string | null
    servidorId: string | null
    titulo: string | null
    contenido: string | null
    publishedAt: Date | null
  }

  export type ManualArticleMaxAggregateOutputType = {
    id: string | null
    servidorId: string | null
    titulo: string | null
    contenido: string | null
    publishedAt: Date | null
  }

  export type ManualArticleCountAggregateOutputType = {
    id: number
    servidorId: number
    titulo: number
    contenido: number
    publishedAt: number
    _all: number
  }


  export type ManualArticleMinAggregateInputType = {
    id?: true
    servidorId?: true
    titulo?: true
    contenido?: true
    publishedAt?: true
  }

  export type ManualArticleMaxAggregateInputType = {
    id?: true
    servidorId?: true
    titulo?: true
    contenido?: true
    publishedAt?: true
  }

  export type ManualArticleCountAggregateInputType = {
    id?: true
    servidorId?: true
    titulo?: true
    contenido?: true
    publishedAt?: true
    _all?: true
  }

  export type ManualArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManualArticle to aggregate.
     */
    where?: ManualArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManualArticles to fetch.
     */
    orderBy?: ManualArticleOrderByWithRelationInput | ManualArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManualArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManualArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManualArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManualArticles
    **/
    _count?: true | ManualArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManualArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManualArticleMaxAggregateInputType
  }

  export type GetManualArticleAggregateType<T extends ManualArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateManualArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManualArticle[P]>
      : GetScalarType<T[P], AggregateManualArticle[P]>
  }




  export type ManualArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManualArticleWhereInput
    orderBy?: ManualArticleOrderByWithAggregationInput | ManualArticleOrderByWithAggregationInput[]
    by: ManualArticleScalarFieldEnum[] | ManualArticleScalarFieldEnum
    having?: ManualArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManualArticleCountAggregateInputType | true
    _min?: ManualArticleMinAggregateInputType
    _max?: ManualArticleMaxAggregateInputType
  }

  export type ManualArticleGroupByOutputType = {
    id: string
    servidorId: string
    titulo: string
    contenido: string
    publishedAt: Date
    _count: ManualArticleCountAggregateOutputType | null
    _min: ManualArticleMinAggregateOutputType | null
    _max: ManualArticleMaxAggregateOutputType | null
  }

  type GetManualArticleGroupByPayload<T extends ManualArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManualArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManualArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManualArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ManualArticleGroupByOutputType[P]>
        }
      >
    >


  export type ManualArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servidorId?: boolean
    titulo?: boolean
    contenido?: boolean
    publishedAt?: boolean
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manualArticle"]>

  export type ManualArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servidorId?: boolean
    titulo?: boolean
    contenido?: boolean
    publishedAt?: boolean
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manualArticle"]>

  export type ManualArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servidorId?: boolean
    titulo?: boolean
    contenido?: boolean
    publishedAt?: boolean
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manualArticle"]>

  export type ManualArticleSelectScalar = {
    id?: boolean
    servidorId?: boolean
    titulo?: boolean
    contenido?: boolean
    publishedAt?: boolean
  }

  export type ManualArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "servidorId" | "titulo" | "contenido" | "publishedAt", ExtArgs["result"]["manualArticle"]>
  export type ManualArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }
  export type ManualArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }
  export type ManualArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }

  export type $ManualArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManualArticle"
    objects: {
      servidor: Prisma.$ServidorUnitarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      servidorId: string
      titulo: string
      contenido: string
      publishedAt: Date
    }, ExtArgs["result"]["manualArticle"]>
    composites: {}
  }

  type ManualArticleGetPayload<S extends boolean | null | undefined | ManualArticleDefaultArgs> = $Result.GetResult<Prisma.$ManualArticlePayload, S>

  type ManualArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManualArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManualArticleCountAggregateInputType | true
    }

  export interface ManualArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManualArticle'], meta: { name: 'ManualArticle' } }
    /**
     * Find zero or one ManualArticle that matches the filter.
     * @param {ManualArticleFindUniqueArgs} args - Arguments to find a ManualArticle
     * @example
     * // Get one ManualArticle
     * const manualArticle = await prisma.manualArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManualArticleFindUniqueArgs>(args: SelectSubset<T, ManualArticleFindUniqueArgs<ExtArgs>>): Prisma__ManualArticleClient<$Result.GetResult<Prisma.$ManualArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ManualArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManualArticleFindUniqueOrThrowArgs} args - Arguments to find a ManualArticle
     * @example
     * // Get one ManualArticle
     * const manualArticle = await prisma.manualArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManualArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ManualArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManualArticleClient<$Result.GetResult<Prisma.$ManualArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManualArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualArticleFindFirstArgs} args - Arguments to find a ManualArticle
     * @example
     * // Get one ManualArticle
     * const manualArticle = await prisma.manualArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManualArticleFindFirstArgs>(args?: SelectSubset<T, ManualArticleFindFirstArgs<ExtArgs>>): Prisma__ManualArticleClient<$Result.GetResult<Prisma.$ManualArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManualArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualArticleFindFirstOrThrowArgs} args - Arguments to find a ManualArticle
     * @example
     * // Get one ManualArticle
     * const manualArticle = await prisma.manualArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManualArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ManualArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManualArticleClient<$Result.GetResult<Prisma.$ManualArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ManualArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManualArticles
     * const manualArticles = await prisma.manualArticle.findMany()
     * 
     * // Get first 10 ManualArticles
     * const manualArticles = await prisma.manualArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manualArticleWithIdOnly = await prisma.manualArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManualArticleFindManyArgs>(args?: SelectSubset<T, ManualArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManualArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ManualArticle.
     * @param {ManualArticleCreateArgs} args - Arguments to create a ManualArticle.
     * @example
     * // Create one ManualArticle
     * const ManualArticle = await prisma.manualArticle.create({
     *   data: {
     *     // ... data to create a ManualArticle
     *   }
     * })
     * 
     */
    create<T extends ManualArticleCreateArgs>(args: SelectSubset<T, ManualArticleCreateArgs<ExtArgs>>): Prisma__ManualArticleClient<$Result.GetResult<Prisma.$ManualArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ManualArticles.
     * @param {ManualArticleCreateManyArgs} args - Arguments to create many ManualArticles.
     * @example
     * // Create many ManualArticles
     * const manualArticle = await prisma.manualArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManualArticleCreateManyArgs>(args?: SelectSubset<T, ManualArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ManualArticles and returns the data saved in the database.
     * @param {ManualArticleCreateManyAndReturnArgs} args - Arguments to create many ManualArticles.
     * @example
     * // Create many ManualArticles
     * const manualArticle = await prisma.manualArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ManualArticles and only return the `id`
     * const manualArticleWithIdOnly = await prisma.manualArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManualArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ManualArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManualArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ManualArticle.
     * @param {ManualArticleDeleteArgs} args - Arguments to delete one ManualArticle.
     * @example
     * // Delete one ManualArticle
     * const ManualArticle = await prisma.manualArticle.delete({
     *   where: {
     *     // ... filter to delete one ManualArticle
     *   }
     * })
     * 
     */
    delete<T extends ManualArticleDeleteArgs>(args: SelectSubset<T, ManualArticleDeleteArgs<ExtArgs>>): Prisma__ManualArticleClient<$Result.GetResult<Prisma.$ManualArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ManualArticle.
     * @param {ManualArticleUpdateArgs} args - Arguments to update one ManualArticle.
     * @example
     * // Update one ManualArticle
     * const manualArticle = await prisma.manualArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManualArticleUpdateArgs>(args: SelectSubset<T, ManualArticleUpdateArgs<ExtArgs>>): Prisma__ManualArticleClient<$Result.GetResult<Prisma.$ManualArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ManualArticles.
     * @param {ManualArticleDeleteManyArgs} args - Arguments to filter ManualArticles to delete.
     * @example
     * // Delete a few ManualArticles
     * const { count } = await prisma.manualArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManualArticleDeleteManyArgs>(args?: SelectSubset<T, ManualArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManualArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManualArticles
     * const manualArticle = await prisma.manualArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManualArticleUpdateManyArgs>(args: SelectSubset<T, ManualArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManualArticles and returns the data updated in the database.
     * @param {ManualArticleUpdateManyAndReturnArgs} args - Arguments to update many ManualArticles.
     * @example
     * // Update many ManualArticles
     * const manualArticle = await prisma.manualArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ManualArticles and only return the `id`
     * const manualArticleWithIdOnly = await prisma.manualArticle.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ManualArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ManualArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManualArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ManualArticle.
     * @param {ManualArticleUpsertArgs} args - Arguments to update or create a ManualArticle.
     * @example
     * // Update or create a ManualArticle
     * const manualArticle = await prisma.manualArticle.upsert({
     *   create: {
     *     // ... data to create a ManualArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManualArticle we want to update
     *   }
     * })
     */
    upsert<T extends ManualArticleUpsertArgs>(args: SelectSubset<T, ManualArticleUpsertArgs<ExtArgs>>): Prisma__ManualArticleClient<$Result.GetResult<Prisma.$ManualArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ManualArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualArticleCountArgs} args - Arguments to filter ManualArticles to count.
     * @example
     * // Count the number of ManualArticles
     * const count = await prisma.manualArticle.count({
     *   where: {
     *     // ... the filter for the ManualArticles we want to count
     *   }
     * })
    **/
    count<T extends ManualArticleCountArgs>(
      args?: Subset<T, ManualArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManualArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManualArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManualArticleAggregateArgs>(args: Subset<T, ManualArticleAggregateArgs>): Prisma.PrismaPromise<GetManualArticleAggregateType<T>>

    /**
     * Group by ManualArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualArticleGroupByArgs} args - Group by arguments.
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
      T extends ManualArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManualArticleGroupByArgs['orderBy'] }
        : { orderBy?: ManualArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ManualArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManualArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManualArticle model
   */
  readonly fields: ManualArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManualArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManualArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servidor<T extends ServidorUnitarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServidorUnitarioDefaultArgs<ExtArgs>>): Prisma__ServidorUnitarioClient<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ManualArticle model
   */
  interface ManualArticleFieldRefs {
    readonly id: FieldRef<"ManualArticle", 'String'>
    readonly servidorId: FieldRef<"ManualArticle", 'String'>
    readonly titulo: FieldRef<"ManualArticle", 'String'>
    readonly contenido: FieldRef<"ManualArticle", 'String'>
    readonly publishedAt: FieldRef<"ManualArticle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ManualArticle findUnique
   */
  export type ManualArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualArticle
     */
    select?: ManualArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualArticle
     */
    omit?: ManualArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManualArticleInclude<ExtArgs> | null
    /**
     * Filter, which ManualArticle to fetch.
     */
    where: ManualArticleWhereUniqueInput
  }

  /**
   * ManualArticle findUniqueOrThrow
   */
  export type ManualArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualArticle
     */
    select?: ManualArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualArticle
     */
    omit?: ManualArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManualArticleInclude<ExtArgs> | null
    /**
     * Filter, which ManualArticle to fetch.
     */
    where: ManualArticleWhereUniqueInput
  }

  /**
   * ManualArticle findFirst
   */
  export type ManualArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualArticle
     */
    select?: ManualArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualArticle
     */
    omit?: ManualArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManualArticleInclude<ExtArgs> | null
    /**
     * Filter, which ManualArticle to fetch.
     */
    where?: ManualArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManualArticles to fetch.
     */
    orderBy?: ManualArticleOrderByWithRelationInput | ManualArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManualArticles.
     */
    cursor?: ManualArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManualArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManualArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManualArticles.
     */
    distinct?: ManualArticleScalarFieldEnum | ManualArticleScalarFieldEnum[]
  }

  /**
   * ManualArticle findFirstOrThrow
   */
  export type ManualArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualArticle
     */
    select?: ManualArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualArticle
     */
    omit?: ManualArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManualArticleInclude<ExtArgs> | null
    /**
     * Filter, which ManualArticle to fetch.
     */
    where?: ManualArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManualArticles to fetch.
     */
    orderBy?: ManualArticleOrderByWithRelationInput | ManualArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManualArticles.
     */
    cursor?: ManualArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManualArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManualArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManualArticles.
     */
    distinct?: ManualArticleScalarFieldEnum | ManualArticleScalarFieldEnum[]
  }

  /**
   * ManualArticle findMany
   */
  export type ManualArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualArticle
     */
    select?: ManualArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualArticle
     */
    omit?: ManualArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManualArticleInclude<ExtArgs> | null
    /**
     * Filter, which ManualArticles to fetch.
     */
    where?: ManualArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManualArticles to fetch.
     */
    orderBy?: ManualArticleOrderByWithRelationInput | ManualArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManualArticles.
     */
    cursor?: ManualArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManualArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManualArticles.
     */
    skip?: number
    distinct?: ManualArticleScalarFieldEnum | ManualArticleScalarFieldEnum[]
  }

  /**
   * ManualArticle create
   */
  export type ManualArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualArticle
     */
    select?: ManualArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualArticle
     */
    omit?: ManualArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManualArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a ManualArticle.
     */
    data: XOR<ManualArticleCreateInput, ManualArticleUncheckedCreateInput>
  }

  /**
   * ManualArticle createMany
   */
  export type ManualArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManualArticles.
     */
    data: ManualArticleCreateManyInput | ManualArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManualArticle createManyAndReturn
   */
  export type ManualArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualArticle
     */
    select?: ManualArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManualArticle
     */
    omit?: ManualArticleOmit<ExtArgs> | null
    /**
     * The data used to create many ManualArticles.
     */
    data: ManualArticleCreateManyInput | ManualArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManualArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ManualArticle update
   */
  export type ManualArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualArticle
     */
    select?: ManualArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualArticle
     */
    omit?: ManualArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManualArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a ManualArticle.
     */
    data: XOR<ManualArticleUpdateInput, ManualArticleUncheckedUpdateInput>
    /**
     * Choose, which ManualArticle to update.
     */
    where: ManualArticleWhereUniqueInput
  }

  /**
   * ManualArticle updateMany
   */
  export type ManualArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManualArticles.
     */
    data: XOR<ManualArticleUpdateManyMutationInput, ManualArticleUncheckedUpdateManyInput>
    /**
     * Filter which ManualArticles to update
     */
    where?: ManualArticleWhereInput
    /**
     * Limit how many ManualArticles to update.
     */
    limit?: number
  }

  /**
   * ManualArticle updateManyAndReturn
   */
  export type ManualArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualArticle
     */
    select?: ManualArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManualArticle
     */
    omit?: ManualArticleOmit<ExtArgs> | null
    /**
     * The data used to update ManualArticles.
     */
    data: XOR<ManualArticleUpdateManyMutationInput, ManualArticleUncheckedUpdateManyInput>
    /**
     * Filter which ManualArticles to update
     */
    where?: ManualArticleWhereInput
    /**
     * Limit how many ManualArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManualArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ManualArticle upsert
   */
  export type ManualArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualArticle
     */
    select?: ManualArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualArticle
     */
    omit?: ManualArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManualArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the ManualArticle to update in case it exists.
     */
    where: ManualArticleWhereUniqueInput
    /**
     * In case the ManualArticle found by the `where` argument doesn't exist, create a new ManualArticle with this data.
     */
    create: XOR<ManualArticleCreateInput, ManualArticleUncheckedCreateInput>
    /**
     * In case the ManualArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManualArticleUpdateInput, ManualArticleUncheckedUpdateInput>
  }

  /**
   * ManualArticle delete
   */
  export type ManualArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualArticle
     */
    select?: ManualArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualArticle
     */
    omit?: ManualArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManualArticleInclude<ExtArgs> | null
    /**
     * Filter which ManualArticle to delete.
     */
    where: ManualArticleWhereUniqueInput
  }

  /**
   * ManualArticle deleteMany
   */
  export type ManualArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManualArticles to delete
     */
    where?: ManualArticleWhereInput
    /**
     * Limit how many ManualArticles to delete.
     */
    limit?: number
  }

  /**
   * ManualArticle without action
   */
  export type ManualArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualArticle
     */
    select?: ManualArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualArticle
     */
    omit?: ManualArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManualArticleInclude<ExtArgs> | null
  }


  /**
   * Model Archivo
   */

  export type AggregateArchivo = {
    _count: ArchivoCountAggregateOutputType | null
    _min: ArchivoMinAggregateOutputType | null
    _max: ArchivoMaxAggregateOutputType | null
  }

  export type ArchivoMinAggregateOutputType = {
    id: string | null
    casoId: string | null
    clienteId: string | null
    profesionalId: string | null
    nombre: string | null
    url: string | null
    tipo: string | null
    fecha: Date | null
  }

  export type ArchivoMaxAggregateOutputType = {
    id: string | null
    casoId: string | null
    clienteId: string | null
    profesionalId: string | null
    nombre: string | null
    url: string | null
    tipo: string | null
    fecha: Date | null
  }

  export type ArchivoCountAggregateOutputType = {
    id: number
    casoId: number
    clienteId: number
    profesionalId: number
    nombre: number
    url: number
    tipo: number
    fecha: number
    _all: number
  }


  export type ArchivoMinAggregateInputType = {
    id?: true
    casoId?: true
    clienteId?: true
    profesionalId?: true
    nombre?: true
    url?: true
    tipo?: true
    fecha?: true
  }

  export type ArchivoMaxAggregateInputType = {
    id?: true
    casoId?: true
    clienteId?: true
    profesionalId?: true
    nombre?: true
    url?: true
    tipo?: true
    fecha?: true
  }

  export type ArchivoCountAggregateInputType = {
    id?: true
    casoId?: true
    clienteId?: true
    profesionalId?: true
    nombre?: true
    url?: true
    tipo?: true
    fecha?: true
    _all?: true
  }

  export type ArchivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Archivo to aggregate.
     */
    where?: ArchivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archivos to fetch.
     */
    orderBy?: ArchivoOrderByWithRelationInput | ArchivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArchivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Archivos
    **/
    _count?: true | ArchivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchivoMaxAggregateInputType
  }

  export type GetArchivoAggregateType<T extends ArchivoAggregateArgs> = {
        [P in keyof T & keyof AggregateArchivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchivo[P]>
      : GetScalarType<T[P], AggregateArchivo[P]>
  }




  export type ArchivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchivoWhereInput
    orderBy?: ArchivoOrderByWithAggregationInput | ArchivoOrderByWithAggregationInput[]
    by: ArchivoScalarFieldEnum[] | ArchivoScalarFieldEnum
    having?: ArchivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchivoCountAggregateInputType | true
    _min?: ArchivoMinAggregateInputType
    _max?: ArchivoMaxAggregateInputType
  }

  export type ArchivoGroupByOutputType = {
    id: string
    casoId: string
    clienteId: string | null
    profesionalId: string | null
    nombre: string
    url: string
    tipo: string
    fecha: Date
    _count: ArchivoCountAggregateOutputType | null
    _min: ArchivoMinAggregateOutputType | null
    _max: ArchivoMaxAggregateOutputType | null
  }

  type GetArchivoGroupByPayload<T extends ArchivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchivoGroupByOutputType[P]>
            : GetScalarType<T[P], ArchivoGroupByOutputType[P]>
        }
      >
    >


  export type ArchivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casoId?: boolean
    clienteId?: boolean
    profesionalId?: boolean
    nombre?: boolean
    url?: boolean
    tipo?: boolean
    fecha?: boolean
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    cliente?: boolean | Archivo$clienteArgs<ExtArgs>
    profesional?: boolean | Archivo$profesionalArgs<ExtArgs>
  }, ExtArgs["result"]["archivo"]>

  export type ArchivoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casoId?: boolean
    clienteId?: boolean
    profesionalId?: boolean
    nombre?: boolean
    url?: boolean
    tipo?: boolean
    fecha?: boolean
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    cliente?: boolean | Archivo$clienteArgs<ExtArgs>
    profesional?: boolean | Archivo$profesionalArgs<ExtArgs>
  }, ExtArgs["result"]["archivo"]>

  export type ArchivoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casoId?: boolean
    clienteId?: boolean
    profesionalId?: boolean
    nombre?: boolean
    url?: boolean
    tipo?: boolean
    fecha?: boolean
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    cliente?: boolean | Archivo$clienteArgs<ExtArgs>
    profesional?: boolean | Archivo$profesionalArgs<ExtArgs>
  }, ExtArgs["result"]["archivo"]>

  export type ArchivoSelectScalar = {
    id?: boolean
    casoId?: boolean
    clienteId?: boolean
    profesionalId?: boolean
    nombre?: boolean
    url?: boolean
    tipo?: boolean
    fecha?: boolean
  }

  export type ArchivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "casoId" | "clienteId" | "profesionalId" | "nombre" | "url" | "tipo" | "fecha", ExtArgs["result"]["archivo"]>
  export type ArchivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    cliente?: boolean | Archivo$clienteArgs<ExtArgs>
    profesional?: boolean | Archivo$profesionalArgs<ExtArgs>
  }
  export type ArchivoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    cliente?: boolean | Archivo$clienteArgs<ExtArgs>
    profesional?: boolean | Archivo$profesionalArgs<ExtArgs>
  }
  export type ArchivoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    cliente?: boolean | Archivo$clienteArgs<ExtArgs>
    profesional?: boolean | Archivo$profesionalArgs<ExtArgs>
  }

  export type $ArchivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Archivo"
    objects: {
      caso: Prisma.$CasoPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs> | null
      profesional: Prisma.$ProfesionalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      casoId: string
      clienteId: string | null
      profesionalId: string | null
      nombre: string
      url: string
      tipo: string
      fecha: Date
    }, ExtArgs["result"]["archivo"]>
    composites: {}
  }

  type ArchivoGetPayload<S extends boolean | null | undefined | ArchivoDefaultArgs> = $Result.GetResult<Prisma.$ArchivoPayload, S>

  type ArchivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArchivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArchivoCountAggregateInputType | true
    }

  export interface ArchivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Archivo'], meta: { name: 'Archivo' } }
    /**
     * Find zero or one Archivo that matches the filter.
     * @param {ArchivoFindUniqueArgs} args - Arguments to find a Archivo
     * @example
     * // Get one Archivo
     * const archivo = await prisma.archivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArchivoFindUniqueArgs>(args: SelectSubset<T, ArchivoFindUniqueArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Archivo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArchivoFindUniqueOrThrowArgs} args - Arguments to find a Archivo
     * @example
     * // Get one Archivo
     * const archivo = await prisma.archivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArchivoFindUniqueOrThrowArgs>(args: SelectSubset<T, ArchivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoFindFirstArgs} args - Arguments to find a Archivo
     * @example
     * // Get one Archivo
     * const archivo = await prisma.archivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArchivoFindFirstArgs>(args?: SelectSubset<T, ArchivoFindFirstArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoFindFirstOrThrowArgs} args - Arguments to find a Archivo
     * @example
     * // Get one Archivo
     * const archivo = await prisma.archivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArchivoFindFirstOrThrowArgs>(args?: SelectSubset<T, ArchivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Archivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Archivos
     * const archivos = await prisma.archivo.findMany()
     * 
     * // Get first 10 Archivos
     * const archivos = await prisma.archivo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const archivoWithIdOnly = await prisma.archivo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArchivoFindManyArgs>(args?: SelectSubset<T, ArchivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Archivo.
     * @param {ArchivoCreateArgs} args - Arguments to create a Archivo.
     * @example
     * // Create one Archivo
     * const Archivo = await prisma.archivo.create({
     *   data: {
     *     // ... data to create a Archivo
     *   }
     * })
     * 
     */
    create<T extends ArchivoCreateArgs>(args: SelectSubset<T, ArchivoCreateArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Archivos.
     * @param {ArchivoCreateManyArgs} args - Arguments to create many Archivos.
     * @example
     * // Create many Archivos
     * const archivo = await prisma.archivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArchivoCreateManyArgs>(args?: SelectSubset<T, ArchivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Archivos and returns the data saved in the database.
     * @param {ArchivoCreateManyAndReturnArgs} args - Arguments to create many Archivos.
     * @example
     * // Create many Archivos
     * const archivo = await prisma.archivo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Archivos and only return the `id`
     * const archivoWithIdOnly = await prisma.archivo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArchivoCreateManyAndReturnArgs>(args?: SelectSubset<T, ArchivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Archivo.
     * @param {ArchivoDeleteArgs} args - Arguments to delete one Archivo.
     * @example
     * // Delete one Archivo
     * const Archivo = await prisma.archivo.delete({
     *   where: {
     *     // ... filter to delete one Archivo
     *   }
     * })
     * 
     */
    delete<T extends ArchivoDeleteArgs>(args: SelectSubset<T, ArchivoDeleteArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Archivo.
     * @param {ArchivoUpdateArgs} args - Arguments to update one Archivo.
     * @example
     * // Update one Archivo
     * const archivo = await prisma.archivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArchivoUpdateArgs>(args: SelectSubset<T, ArchivoUpdateArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Archivos.
     * @param {ArchivoDeleteManyArgs} args - Arguments to filter Archivos to delete.
     * @example
     * // Delete a few Archivos
     * const { count } = await prisma.archivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArchivoDeleteManyArgs>(args?: SelectSubset<T, ArchivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Archivos
     * const archivo = await prisma.archivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArchivoUpdateManyArgs>(args: SelectSubset<T, ArchivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archivos and returns the data updated in the database.
     * @param {ArchivoUpdateManyAndReturnArgs} args - Arguments to update many Archivos.
     * @example
     * // Update many Archivos
     * const archivo = await prisma.archivo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Archivos and only return the `id`
     * const archivoWithIdOnly = await prisma.archivo.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ArchivoUpdateManyAndReturnArgs>(args: SelectSubset<T, ArchivoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Archivo.
     * @param {ArchivoUpsertArgs} args - Arguments to update or create a Archivo.
     * @example
     * // Update or create a Archivo
     * const archivo = await prisma.archivo.upsert({
     *   create: {
     *     // ... data to create a Archivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Archivo we want to update
     *   }
     * })
     */
    upsert<T extends ArchivoUpsertArgs>(args: SelectSubset<T, ArchivoUpsertArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Archivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoCountArgs} args - Arguments to filter Archivos to count.
     * @example
     * // Count the number of Archivos
     * const count = await prisma.archivo.count({
     *   where: {
     *     // ... the filter for the Archivos we want to count
     *   }
     * })
    **/
    count<T extends ArchivoCountArgs>(
      args?: Subset<T, ArchivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Archivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArchivoAggregateArgs>(args: Subset<T, ArchivoAggregateArgs>): Prisma.PrismaPromise<GetArchivoAggregateType<T>>

    /**
     * Group by Archivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoGroupByArgs} args - Group by arguments.
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
      T extends ArchivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArchivoGroupByArgs['orderBy'] }
        : { orderBy?: ArchivoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArchivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Archivo model
   */
  readonly fields: ArchivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Archivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArchivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caso<T extends CasoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasoDefaultArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends Archivo$clienteArgs<ExtArgs> = {}>(args?: Subset<T, Archivo$clienteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    profesional<T extends Archivo$profesionalArgs<ExtArgs> = {}>(args?: Subset<T, Archivo$profesionalArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Archivo model
   */
  interface ArchivoFieldRefs {
    readonly id: FieldRef<"Archivo", 'String'>
    readonly casoId: FieldRef<"Archivo", 'String'>
    readonly clienteId: FieldRef<"Archivo", 'String'>
    readonly profesionalId: FieldRef<"Archivo", 'String'>
    readonly nombre: FieldRef<"Archivo", 'String'>
    readonly url: FieldRef<"Archivo", 'String'>
    readonly tipo: FieldRef<"Archivo", 'String'>
    readonly fecha: FieldRef<"Archivo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Archivo findUnique
   */
  export type ArchivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * Filter, which Archivo to fetch.
     */
    where: ArchivoWhereUniqueInput
  }

  /**
   * Archivo findUniqueOrThrow
   */
  export type ArchivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * Filter, which Archivo to fetch.
     */
    where: ArchivoWhereUniqueInput
  }

  /**
   * Archivo findFirst
   */
  export type ArchivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * Filter, which Archivo to fetch.
     */
    where?: ArchivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archivos to fetch.
     */
    orderBy?: ArchivoOrderByWithRelationInput | ArchivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Archivos.
     */
    cursor?: ArchivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Archivos.
     */
    distinct?: ArchivoScalarFieldEnum | ArchivoScalarFieldEnum[]
  }

  /**
   * Archivo findFirstOrThrow
   */
  export type ArchivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * Filter, which Archivo to fetch.
     */
    where?: ArchivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archivos to fetch.
     */
    orderBy?: ArchivoOrderByWithRelationInput | ArchivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Archivos.
     */
    cursor?: ArchivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Archivos.
     */
    distinct?: ArchivoScalarFieldEnum | ArchivoScalarFieldEnum[]
  }

  /**
   * Archivo findMany
   */
  export type ArchivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * Filter, which Archivos to fetch.
     */
    where?: ArchivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archivos to fetch.
     */
    orderBy?: ArchivoOrderByWithRelationInput | ArchivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Archivos.
     */
    cursor?: ArchivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archivos.
     */
    skip?: number
    distinct?: ArchivoScalarFieldEnum | ArchivoScalarFieldEnum[]
  }

  /**
   * Archivo create
   */
  export type ArchivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * The data needed to create a Archivo.
     */
    data: XOR<ArchivoCreateInput, ArchivoUncheckedCreateInput>
  }

  /**
   * Archivo createMany
   */
  export type ArchivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Archivos.
     */
    data: ArchivoCreateManyInput | ArchivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Archivo createManyAndReturn
   */
  export type ArchivoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * The data used to create many Archivos.
     */
    data: ArchivoCreateManyInput | ArchivoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Archivo update
   */
  export type ArchivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * The data needed to update a Archivo.
     */
    data: XOR<ArchivoUpdateInput, ArchivoUncheckedUpdateInput>
    /**
     * Choose, which Archivo to update.
     */
    where: ArchivoWhereUniqueInput
  }

  /**
   * Archivo updateMany
   */
  export type ArchivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Archivos.
     */
    data: XOR<ArchivoUpdateManyMutationInput, ArchivoUncheckedUpdateManyInput>
    /**
     * Filter which Archivos to update
     */
    where?: ArchivoWhereInput
    /**
     * Limit how many Archivos to update.
     */
    limit?: number
  }

  /**
   * Archivo updateManyAndReturn
   */
  export type ArchivoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * The data used to update Archivos.
     */
    data: XOR<ArchivoUpdateManyMutationInput, ArchivoUncheckedUpdateManyInput>
    /**
     * Filter which Archivos to update
     */
    where?: ArchivoWhereInput
    /**
     * Limit how many Archivos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Archivo upsert
   */
  export type ArchivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * The filter to search for the Archivo to update in case it exists.
     */
    where: ArchivoWhereUniqueInput
    /**
     * In case the Archivo found by the `where` argument doesn't exist, create a new Archivo with this data.
     */
    create: XOR<ArchivoCreateInput, ArchivoUncheckedCreateInput>
    /**
     * In case the Archivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArchivoUpdateInput, ArchivoUncheckedUpdateInput>
  }

  /**
   * Archivo delete
   */
  export type ArchivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * Filter which Archivo to delete.
     */
    where: ArchivoWhereUniqueInput
  }

  /**
   * Archivo deleteMany
   */
  export type ArchivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Archivos to delete
     */
    where?: ArchivoWhereInput
    /**
     * Limit how many Archivos to delete.
     */
    limit?: number
  }

  /**
   * Archivo.cliente
   */
  export type Archivo$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
  }

  /**
   * Archivo.profesional
   */
  export type Archivo$profesionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    where?: ProfesionalWhereInput
  }

  /**
   * Archivo without action
   */
  export type ArchivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
  }


  /**
   * Model Reporte
   */

  export type AggregateReporte = {
    _count: ReporteCountAggregateOutputType | null
    _min: ReporteMinAggregateOutputType | null
    _max: ReporteMaxAggregateOutputType | null
  }

  export type ReporteMinAggregateOutputType = {
    id: string | null
    casoId: string | null
    clienteId: string | null
    razon: string | null
    createdAt: Date | null
  }

  export type ReporteMaxAggregateOutputType = {
    id: string | null
    casoId: string | null
    clienteId: string | null
    razon: string | null
    createdAt: Date | null
  }

  export type ReporteCountAggregateOutputType = {
    id: number
    casoId: number
    clienteId: number
    razon: number
    createdAt: number
    _all: number
  }


  export type ReporteMinAggregateInputType = {
    id?: true
    casoId?: true
    clienteId?: true
    razon?: true
    createdAt?: true
  }

  export type ReporteMaxAggregateInputType = {
    id?: true
    casoId?: true
    clienteId?: true
    razon?: true
    createdAt?: true
  }

  export type ReporteCountAggregateInputType = {
    id?: true
    casoId?: true
    clienteId?: true
    razon?: true
    createdAt?: true
    _all?: true
  }

  export type ReporteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reporte to aggregate.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reportes
    **/
    _count?: true | ReporteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReporteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReporteMaxAggregateInputType
  }

  export type GetReporteAggregateType<T extends ReporteAggregateArgs> = {
        [P in keyof T & keyof AggregateReporte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReporte[P]>
      : GetScalarType<T[P], AggregateReporte[P]>
  }




  export type ReporteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReporteWhereInput
    orderBy?: ReporteOrderByWithAggregationInput | ReporteOrderByWithAggregationInput[]
    by: ReporteScalarFieldEnum[] | ReporteScalarFieldEnum
    having?: ReporteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReporteCountAggregateInputType | true
    _min?: ReporteMinAggregateInputType
    _max?: ReporteMaxAggregateInputType
  }

  export type ReporteGroupByOutputType = {
    id: string
    casoId: string
    clienteId: string
    razon: string
    createdAt: Date
    _count: ReporteCountAggregateOutputType | null
    _min: ReporteMinAggregateOutputType | null
    _max: ReporteMaxAggregateOutputType | null
  }

  type GetReporteGroupByPayload<T extends ReporteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReporteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReporteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReporteGroupByOutputType[P]>
            : GetScalarType<T[P], ReporteGroupByOutputType[P]>
        }
      >
    >


  export type ReporteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casoId?: boolean
    clienteId?: boolean
    razon?: boolean
    createdAt?: boolean
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reporte"]>

  export type ReporteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casoId?: boolean
    clienteId?: boolean
    razon?: boolean
    createdAt?: boolean
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reporte"]>

  export type ReporteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casoId?: boolean
    clienteId?: boolean
    razon?: boolean
    createdAt?: boolean
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reporte"]>

  export type ReporteSelectScalar = {
    id?: boolean
    casoId?: boolean
    clienteId?: boolean
    razon?: boolean
    createdAt?: boolean
  }

  export type ReporteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "casoId" | "clienteId" | "razon" | "createdAt", ExtArgs["result"]["reporte"]>
  export type ReporteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type ReporteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type ReporteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $ReportePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reporte"
    objects: {
      caso: Prisma.$CasoPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      casoId: string
      clienteId: string
      razon: string
      createdAt: Date
    }, ExtArgs["result"]["reporte"]>
    composites: {}
  }

  type ReporteGetPayload<S extends boolean | null | undefined | ReporteDefaultArgs> = $Result.GetResult<Prisma.$ReportePayload, S>

  type ReporteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReporteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReporteCountAggregateInputType | true
    }

  export interface ReporteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reporte'], meta: { name: 'Reporte' } }
    /**
     * Find zero or one Reporte that matches the filter.
     * @param {ReporteFindUniqueArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReporteFindUniqueArgs>(args: SelectSubset<T, ReporteFindUniqueArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reporte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReporteFindUniqueOrThrowArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReporteFindUniqueOrThrowArgs>(args: SelectSubset<T, ReporteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reporte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteFindFirstArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReporteFindFirstArgs>(args?: SelectSubset<T, ReporteFindFirstArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reporte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteFindFirstOrThrowArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReporteFindFirstOrThrowArgs>(args?: SelectSubset<T, ReporteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reportes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reportes
     * const reportes = await prisma.reporte.findMany()
     * 
     * // Get first 10 Reportes
     * const reportes = await prisma.reporte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reporteWithIdOnly = await prisma.reporte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReporteFindManyArgs>(args?: SelectSubset<T, ReporteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reporte.
     * @param {ReporteCreateArgs} args - Arguments to create a Reporte.
     * @example
     * // Create one Reporte
     * const Reporte = await prisma.reporte.create({
     *   data: {
     *     // ... data to create a Reporte
     *   }
     * })
     * 
     */
    create<T extends ReporteCreateArgs>(args: SelectSubset<T, ReporteCreateArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reportes.
     * @param {ReporteCreateManyArgs} args - Arguments to create many Reportes.
     * @example
     * // Create many Reportes
     * const reporte = await prisma.reporte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReporteCreateManyArgs>(args?: SelectSubset<T, ReporteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reportes and returns the data saved in the database.
     * @param {ReporteCreateManyAndReturnArgs} args - Arguments to create many Reportes.
     * @example
     * // Create many Reportes
     * const reporte = await prisma.reporte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reportes and only return the `id`
     * const reporteWithIdOnly = await prisma.reporte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReporteCreateManyAndReturnArgs>(args?: SelectSubset<T, ReporteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reporte.
     * @param {ReporteDeleteArgs} args - Arguments to delete one Reporte.
     * @example
     * // Delete one Reporte
     * const Reporte = await prisma.reporte.delete({
     *   where: {
     *     // ... filter to delete one Reporte
     *   }
     * })
     * 
     */
    delete<T extends ReporteDeleteArgs>(args: SelectSubset<T, ReporteDeleteArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reporte.
     * @param {ReporteUpdateArgs} args - Arguments to update one Reporte.
     * @example
     * // Update one Reporte
     * const reporte = await prisma.reporte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReporteUpdateArgs>(args: SelectSubset<T, ReporteUpdateArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reportes.
     * @param {ReporteDeleteManyArgs} args - Arguments to filter Reportes to delete.
     * @example
     * // Delete a few Reportes
     * const { count } = await prisma.reporte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReporteDeleteManyArgs>(args?: SelectSubset<T, ReporteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reportes
     * const reporte = await prisma.reporte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReporteUpdateManyArgs>(args: SelectSubset<T, ReporteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reportes and returns the data updated in the database.
     * @param {ReporteUpdateManyAndReturnArgs} args - Arguments to update many Reportes.
     * @example
     * // Update many Reportes
     * const reporte = await prisma.reporte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reportes and only return the `id`
     * const reporteWithIdOnly = await prisma.reporte.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ReporteUpdateManyAndReturnArgs>(args: SelectSubset<T, ReporteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reporte.
     * @param {ReporteUpsertArgs} args - Arguments to update or create a Reporte.
     * @example
     * // Update or create a Reporte
     * const reporte = await prisma.reporte.upsert({
     *   create: {
     *     // ... data to create a Reporte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reporte we want to update
     *   }
     * })
     */
    upsert<T extends ReporteUpsertArgs>(args: SelectSubset<T, ReporteUpsertArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteCountArgs} args - Arguments to filter Reportes to count.
     * @example
     * // Count the number of Reportes
     * const count = await prisma.reporte.count({
     *   where: {
     *     // ... the filter for the Reportes we want to count
     *   }
     * })
    **/
    count<T extends ReporteCountArgs>(
      args?: Subset<T, ReporteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReporteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reporte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReporteAggregateArgs>(args: Subset<T, ReporteAggregateArgs>): Prisma.PrismaPromise<GetReporteAggregateType<T>>

    /**
     * Group by Reporte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteGroupByArgs} args - Group by arguments.
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
      T extends ReporteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReporteGroupByArgs['orderBy'] }
        : { orderBy?: ReporteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReporteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReporteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reporte model
   */
  readonly fields: ReporteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reporte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReporteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caso<T extends CasoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasoDefaultArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reporte model
   */
  interface ReporteFieldRefs {
    readonly id: FieldRef<"Reporte", 'String'>
    readonly casoId: FieldRef<"Reporte", 'String'>
    readonly clienteId: FieldRef<"Reporte", 'String'>
    readonly razon: FieldRef<"Reporte", 'String'>
    readonly createdAt: FieldRef<"Reporte", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reporte findUnique
   */
  export type ReporteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte findUniqueOrThrow
   */
  export type ReporteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte findFirst
   */
  export type ReporteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reportes.
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reportes.
     */
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Reporte findFirstOrThrow
   */
  export type ReporteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reportes.
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reportes.
     */
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Reporte findMany
   */
  export type ReporteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reportes to fetch.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reportes.
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Reporte create
   */
  export type ReporteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * The data needed to create a Reporte.
     */
    data: XOR<ReporteCreateInput, ReporteUncheckedCreateInput>
  }

  /**
   * Reporte createMany
   */
  export type ReporteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reportes.
     */
    data: ReporteCreateManyInput | ReporteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reporte createManyAndReturn
   */
  export type ReporteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * The data used to create many Reportes.
     */
    data: ReporteCreateManyInput | ReporteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reporte update
   */
  export type ReporteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * The data needed to update a Reporte.
     */
    data: XOR<ReporteUpdateInput, ReporteUncheckedUpdateInput>
    /**
     * Choose, which Reporte to update.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte updateMany
   */
  export type ReporteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reportes.
     */
    data: XOR<ReporteUpdateManyMutationInput, ReporteUncheckedUpdateManyInput>
    /**
     * Filter which Reportes to update
     */
    where?: ReporteWhereInput
    /**
     * Limit how many Reportes to update.
     */
    limit?: number
  }

  /**
   * Reporte updateManyAndReturn
   */
  export type ReporteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * The data used to update Reportes.
     */
    data: XOR<ReporteUpdateManyMutationInput, ReporteUncheckedUpdateManyInput>
    /**
     * Filter which Reportes to update
     */
    where?: ReporteWhereInput
    /**
     * Limit how many Reportes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reporte upsert
   */
  export type ReporteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * The filter to search for the Reporte to update in case it exists.
     */
    where: ReporteWhereUniqueInput
    /**
     * In case the Reporte found by the `where` argument doesn't exist, create a new Reporte with this data.
     */
    create: XOR<ReporteCreateInput, ReporteUncheckedCreateInput>
    /**
     * In case the Reporte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReporteUpdateInput, ReporteUncheckedUpdateInput>
  }

  /**
   * Reporte delete
   */
  export type ReporteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter which Reporte to delete.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte deleteMany
   */
  export type ReporteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reportes to delete
     */
    where?: ReporteWhereInput
    /**
     * Limit how many Reportes to delete.
     */
    limit?: number
  }

  /**
   * Reporte without action
   */
  export type ReporteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
  }


  /**
   * Model Constelacion
   */

  export type AggregateConstelacion = {
    _count: ConstelacionCountAggregateOutputType | null
    _min: ConstelacionMinAggregateOutputType | null
    _max: ConstelacionMaxAggregateOutputType | null
  }

  export type ConstelacionMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
  }

  export type ConstelacionMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
  }

  export type ConstelacionCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type ConstelacionMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type ConstelacionMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type ConstelacionCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type ConstelacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Constelacion to aggregate.
     */
    where?: ConstelacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constelacions to fetch.
     */
    orderBy?: ConstelacionOrderByWithRelationInput | ConstelacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConstelacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constelacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constelacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Constelacions
    **/
    _count?: true | ConstelacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConstelacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConstelacionMaxAggregateInputType
  }

  export type GetConstelacionAggregateType<T extends ConstelacionAggregateArgs> = {
        [P in keyof T & keyof AggregateConstelacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConstelacion[P]>
      : GetScalarType<T[P], AggregateConstelacion[P]>
  }




  export type ConstelacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConstelacionWhereInput
    orderBy?: ConstelacionOrderByWithAggregationInput | ConstelacionOrderByWithAggregationInput[]
    by: ConstelacionScalarFieldEnum[] | ConstelacionScalarFieldEnum
    having?: ConstelacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConstelacionCountAggregateInputType | true
    _min?: ConstelacionMinAggregateInputType
    _max?: ConstelacionMaxAggregateInputType
  }

  export type ConstelacionGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string | null
    _count: ConstelacionCountAggregateOutputType | null
    _min: ConstelacionMinAggregateOutputType | null
    _max: ConstelacionMaxAggregateOutputType | null
  }

  type GetConstelacionGroupByPayload<T extends ConstelacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConstelacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConstelacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConstelacionGroupByOutputType[P]>
            : GetScalarType<T[P], ConstelacionGroupByOutputType[P]>
        }
      >
    >


  export type ConstelacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    servidores?: boolean | Constelacion$servidoresArgs<ExtArgs>
    _count?: boolean | ConstelacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["constelacion"]>

  export type ConstelacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["constelacion"]>

  export type ConstelacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["constelacion"]>

  export type ConstelacionSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type ConstelacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion", ExtArgs["result"]["constelacion"]>
  export type ConstelacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidores?: boolean | Constelacion$servidoresArgs<ExtArgs>
    _count?: boolean | ConstelacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConstelacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConstelacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConstelacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Constelacion"
    objects: {
      servidores: Prisma.$ServidorUnitarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["constelacion"]>
    composites: {}
  }

  type ConstelacionGetPayload<S extends boolean | null | undefined | ConstelacionDefaultArgs> = $Result.GetResult<Prisma.$ConstelacionPayload, S>

  type ConstelacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConstelacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConstelacionCountAggregateInputType | true
    }

  export interface ConstelacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Constelacion'], meta: { name: 'Constelacion' } }
    /**
     * Find zero or one Constelacion that matches the filter.
     * @param {ConstelacionFindUniqueArgs} args - Arguments to find a Constelacion
     * @example
     * // Get one Constelacion
     * const constelacion = await prisma.constelacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConstelacionFindUniqueArgs>(args: SelectSubset<T, ConstelacionFindUniqueArgs<ExtArgs>>): Prisma__ConstelacionClient<$Result.GetResult<Prisma.$ConstelacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Constelacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConstelacionFindUniqueOrThrowArgs} args - Arguments to find a Constelacion
     * @example
     * // Get one Constelacion
     * const constelacion = await prisma.constelacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConstelacionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConstelacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConstelacionClient<$Result.GetResult<Prisma.$ConstelacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Constelacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstelacionFindFirstArgs} args - Arguments to find a Constelacion
     * @example
     * // Get one Constelacion
     * const constelacion = await prisma.constelacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConstelacionFindFirstArgs>(args?: SelectSubset<T, ConstelacionFindFirstArgs<ExtArgs>>): Prisma__ConstelacionClient<$Result.GetResult<Prisma.$ConstelacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Constelacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstelacionFindFirstOrThrowArgs} args - Arguments to find a Constelacion
     * @example
     * // Get one Constelacion
     * const constelacion = await prisma.constelacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConstelacionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConstelacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConstelacionClient<$Result.GetResult<Prisma.$ConstelacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Constelacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstelacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Constelacions
     * const constelacions = await prisma.constelacion.findMany()
     * 
     * // Get first 10 Constelacions
     * const constelacions = await prisma.constelacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const constelacionWithIdOnly = await prisma.constelacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConstelacionFindManyArgs>(args?: SelectSubset<T, ConstelacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstelacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Constelacion.
     * @param {ConstelacionCreateArgs} args - Arguments to create a Constelacion.
     * @example
     * // Create one Constelacion
     * const Constelacion = await prisma.constelacion.create({
     *   data: {
     *     // ... data to create a Constelacion
     *   }
     * })
     * 
     */
    create<T extends ConstelacionCreateArgs>(args: SelectSubset<T, ConstelacionCreateArgs<ExtArgs>>): Prisma__ConstelacionClient<$Result.GetResult<Prisma.$ConstelacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Constelacions.
     * @param {ConstelacionCreateManyArgs} args - Arguments to create many Constelacions.
     * @example
     * // Create many Constelacions
     * const constelacion = await prisma.constelacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConstelacionCreateManyArgs>(args?: SelectSubset<T, ConstelacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Constelacions and returns the data saved in the database.
     * @param {ConstelacionCreateManyAndReturnArgs} args - Arguments to create many Constelacions.
     * @example
     * // Create many Constelacions
     * const constelacion = await prisma.constelacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Constelacions and only return the `id`
     * const constelacionWithIdOnly = await prisma.constelacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConstelacionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConstelacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstelacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Constelacion.
     * @param {ConstelacionDeleteArgs} args - Arguments to delete one Constelacion.
     * @example
     * // Delete one Constelacion
     * const Constelacion = await prisma.constelacion.delete({
     *   where: {
     *     // ... filter to delete one Constelacion
     *   }
     * })
     * 
     */
    delete<T extends ConstelacionDeleteArgs>(args: SelectSubset<T, ConstelacionDeleteArgs<ExtArgs>>): Prisma__ConstelacionClient<$Result.GetResult<Prisma.$ConstelacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Constelacion.
     * @param {ConstelacionUpdateArgs} args - Arguments to update one Constelacion.
     * @example
     * // Update one Constelacion
     * const constelacion = await prisma.constelacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConstelacionUpdateArgs>(args: SelectSubset<T, ConstelacionUpdateArgs<ExtArgs>>): Prisma__ConstelacionClient<$Result.GetResult<Prisma.$ConstelacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Constelacions.
     * @param {ConstelacionDeleteManyArgs} args - Arguments to filter Constelacions to delete.
     * @example
     * // Delete a few Constelacions
     * const { count } = await prisma.constelacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConstelacionDeleteManyArgs>(args?: SelectSubset<T, ConstelacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Constelacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstelacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Constelacions
     * const constelacion = await prisma.constelacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConstelacionUpdateManyArgs>(args: SelectSubset<T, ConstelacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Constelacions and returns the data updated in the database.
     * @param {ConstelacionUpdateManyAndReturnArgs} args - Arguments to update many Constelacions.
     * @example
     * // Update many Constelacions
     * const constelacion = await prisma.constelacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Constelacions and only return the `id`
     * const constelacionWithIdOnly = await prisma.constelacion.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ConstelacionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConstelacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstelacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Constelacion.
     * @param {ConstelacionUpsertArgs} args - Arguments to update or create a Constelacion.
     * @example
     * // Update or create a Constelacion
     * const constelacion = await prisma.constelacion.upsert({
     *   create: {
     *     // ... data to create a Constelacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Constelacion we want to update
     *   }
     * })
     */
    upsert<T extends ConstelacionUpsertArgs>(args: SelectSubset<T, ConstelacionUpsertArgs<ExtArgs>>): Prisma__ConstelacionClient<$Result.GetResult<Prisma.$ConstelacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Constelacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstelacionCountArgs} args - Arguments to filter Constelacions to count.
     * @example
     * // Count the number of Constelacions
     * const count = await prisma.constelacion.count({
     *   where: {
     *     // ... the filter for the Constelacions we want to count
     *   }
     * })
    **/
    count<T extends ConstelacionCountArgs>(
      args?: Subset<T, ConstelacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConstelacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Constelacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstelacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConstelacionAggregateArgs>(args: Subset<T, ConstelacionAggregateArgs>): Prisma.PrismaPromise<GetConstelacionAggregateType<T>>

    /**
     * Group by Constelacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstelacionGroupByArgs} args - Group by arguments.
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
      T extends ConstelacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConstelacionGroupByArgs['orderBy'] }
        : { orderBy?: ConstelacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConstelacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConstelacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Constelacion model
   */
  readonly fields: ConstelacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Constelacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConstelacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servidores<T extends Constelacion$servidoresArgs<ExtArgs> = {}>(args?: Subset<T, Constelacion$servidoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Constelacion model
   */
  interface ConstelacionFieldRefs {
    readonly id: FieldRef<"Constelacion", 'String'>
    readonly nombre: FieldRef<"Constelacion", 'String'>
    readonly descripcion: FieldRef<"Constelacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Constelacion findUnique
   */
  export type ConstelacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constelacion
     */
    select?: ConstelacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constelacion
     */
    omit?: ConstelacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstelacionInclude<ExtArgs> | null
    /**
     * Filter, which Constelacion to fetch.
     */
    where: ConstelacionWhereUniqueInput
  }

  /**
   * Constelacion findUniqueOrThrow
   */
  export type ConstelacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constelacion
     */
    select?: ConstelacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constelacion
     */
    omit?: ConstelacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstelacionInclude<ExtArgs> | null
    /**
     * Filter, which Constelacion to fetch.
     */
    where: ConstelacionWhereUniqueInput
  }

  /**
   * Constelacion findFirst
   */
  export type ConstelacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constelacion
     */
    select?: ConstelacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constelacion
     */
    omit?: ConstelacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstelacionInclude<ExtArgs> | null
    /**
     * Filter, which Constelacion to fetch.
     */
    where?: ConstelacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constelacions to fetch.
     */
    orderBy?: ConstelacionOrderByWithRelationInput | ConstelacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Constelacions.
     */
    cursor?: ConstelacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constelacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constelacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Constelacions.
     */
    distinct?: ConstelacionScalarFieldEnum | ConstelacionScalarFieldEnum[]
  }

  /**
   * Constelacion findFirstOrThrow
   */
  export type ConstelacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constelacion
     */
    select?: ConstelacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constelacion
     */
    omit?: ConstelacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstelacionInclude<ExtArgs> | null
    /**
     * Filter, which Constelacion to fetch.
     */
    where?: ConstelacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constelacions to fetch.
     */
    orderBy?: ConstelacionOrderByWithRelationInput | ConstelacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Constelacions.
     */
    cursor?: ConstelacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constelacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constelacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Constelacions.
     */
    distinct?: ConstelacionScalarFieldEnum | ConstelacionScalarFieldEnum[]
  }

  /**
   * Constelacion findMany
   */
  export type ConstelacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constelacion
     */
    select?: ConstelacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constelacion
     */
    omit?: ConstelacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstelacionInclude<ExtArgs> | null
    /**
     * Filter, which Constelacions to fetch.
     */
    where?: ConstelacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constelacions to fetch.
     */
    orderBy?: ConstelacionOrderByWithRelationInput | ConstelacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Constelacions.
     */
    cursor?: ConstelacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constelacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constelacions.
     */
    skip?: number
    distinct?: ConstelacionScalarFieldEnum | ConstelacionScalarFieldEnum[]
  }

  /**
   * Constelacion create
   */
  export type ConstelacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constelacion
     */
    select?: ConstelacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constelacion
     */
    omit?: ConstelacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstelacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Constelacion.
     */
    data: XOR<ConstelacionCreateInput, ConstelacionUncheckedCreateInput>
  }

  /**
   * Constelacion createMany
   */
  export type ConstelacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Constelacions.
     */
    data: ConstelacionCreateManyInput | ConstelacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Constelacion createManyAndReturn
   */
  export type ConstelacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constelacion
     */
    select?: ConstelacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Constelacion
     */
    omit?: ConstelacionOmit<ExtArgs> | null
    /**
     * The data used to create many Constelacions.
     */
    data: ConstelacionCreateManyInput | ConstelacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Constelacion update
   */
  export type ConstelacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constelacion
     */
    select?: ConstelacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constelacion
     */
    omit?: ConstelacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstelacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Constelacion.
     */
    data: XOR<ConstelacionUpdateInput, ConstelacionUncheckedUpdateInput>
    /**
     * Choose, which Constelacion to update.
     */
    where: ConstelacionWhereUniqueInput
  }

  /**
   * Constelacion updateMany
   */
  export type ConstelacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Constelacions.
     */
    data: XOR<ConstelacionUpdateManyMutationInput, ConstelacionUncheckedUpdateManyInput>
    /**
     * Filter which Constelacions to update
     */
    where?: ConstelacionWhereInput
    /**
     * Limit how many Constelacions to update.
     */
    limit?: number
  }

  /**
   * Constelacion updateManyAndReturn
   */
  export type ConstelacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constelacion
     */
    select?: ConstelacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Constelacion
     */
    omit?: ConstelacionOmit<ExtArgs> | null
    /**
     * The data used to update Constelacions.
     */
    data: XOR<ConstelacionUpdateManyMutationInput, ConstelacionUncheckedUpdateManyInput>
    /**
     * Filter which Constelacions to update
     */
    where?: ConstelacionWhereInput
    /**
     * Limit how many Constelacions to update.
     */
    limit?: number
  }

  /**
   * Constelacion upsert
   */
  export type ConstelacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constelacion
     */
    select?: ConstelacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constelacion
     */
    omit?: ConstelacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstelacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Constelacion to update in case it exists.
     */
    where: ConstelacionWhereUniqueInput
    /**
     * In case the Constelacion found by the `where` argument doesn't exist, create a new Constelacion with this data.
     */
    create: XOR<ConstelacionCreateInput, ConstelacionUncheckedCreateInput>
    /**
     * In case the Constelacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConstelacionUpdateInput, ConstelacionUncheckedUpdateInput>
  }

  /**
   * Constelacion delete
   */
  export type ConstelacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constelacion
     */
    select?: ConstelacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constelacion
     */
    omit?: ConstelacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstelacionInclude<ExtArgs> | null
    /**
     * Filter which Constelacion to delete.
     */
    where: ConstelacionWhereUniqueInput
  }

  /**
   * Constelacion deleteMany
   */
  export type ConstelacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Constelacions to delete
     */
    where?: ConstelacionWhereInput
    /**
     * Limit how many Constelacions to delete.
     */
    limit?: number
  }

  /**
   * Constelacion.servidores
   */
  export type Constelacion$servidoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServidorUnitario
     */
    select?: ServidorUnitarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServidorUnitario
     */
    omit?: ServidorUnitarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServidorUnitarioInclude<ExtArgs> | null
    where?: ServidorUnitarioWhereInput
    orderBy?: ServidorUnitarioOrderByWithRelationInput | ServidorUnitarioOrderByWithRelationInput[]
    cursor?: ServidorUnitarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServidorUnitarioScalarFieldEnum | ServidorUnitarioScalarFieldEnum[]
  }

  /**
   * Constelacion without action
   */
  export type ConstelacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constelacion
     */
    select?: ConstelacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constelacion
     */
    omit?: ConstelacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstelacionInclude<ExtArgs> | null
  }


  /**
   * Model Seccion
   */

  export type AggregateSeccion = {
    _count: SeccionCountAggregateOutputType | null
    _avg: SeccionAvgAggregateOutputType | null
    _sum: SeccionSumAggregateOutputType | null
    _min: SeccionMinAggregateOutputType | null
    _max: SeccionMaxAggregateOutputType | null
  }

  export type SeccionAvgAggregateOutputType = {
    orden: number | null
  }

  export type SeccionSumAggregateOutputType = {
    orden: number | null
  }

  export type SeccionMinAggregateOutputType = {
    id: string | null
    servidorId: string | null
    tipo: $Enums.SeccionTipo | null
    titulo: string | null
    contenido: string | null
    orden: number | null
  }

  export type SeccionMaxAggregateOutputType = {
    id: string | null
    servidorId: string | null
    tipo: $Enums.SeccionTipo | null
    titulo: string | null
    contenido: string | null
    orden: number | null
  }

  export type SeccionCountAggregateOutputType = {
    id: number
    servidorId: number
    tipo: number
    titulo: number
    contenido: number
    orden: number
    _all: number
  }


  export type SeccionAvgAggregateInputType = {
    orden?: true
  }

  export type SeccionSumAggregateInputType = {
    orden?: true
  }

  export type SeccionMinAggregateInputType = {
    id?: true
    servidorId?: true
    tipo?: true
    titulo?: true
    contenido?: true
    orden?: true
  }

  export type SeccionMaxAggregateInputType = {
    id?: true
    servidorId?: true
    tipo?: true
    titulo?: true
    contenido?: true
    orden?: true
  }

  export type SeccionCountAggregateInputType = {
    id?: true
    servidorId?: true
    tipo?: true
    titulo?: true
    contenido?: true
    orden?: true
    _all?: true
  }

  export type SeccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seccion to aggregate.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seccions
    **/
    _count?: true | SeccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeccionMaxAggregateInputType
  }

  export type GetSeccionAggregateType<T extends SeccionAggregateArgs> = {
        [P in keyof T & keyof AggregateSeccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeccion[P]>
      : GetScalarType<T[P], AggregateSeccion[P]>
  }




  export type SeccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeccionWhereInput
    orderBy?: SeccionOrderByWithAggregationInput | SeccionOrderByWithAggregationInput[]
    by: SeccionScalarFieldEnum[] | SeccionScalarFieldEnum
    having?: SeccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeccionCountAggregateInputType | true
    _avg?: SeccionAvgAggregateInputType
    _sum?: SeccionSumAggregateInputType
    _min?: SeccionMinAggregateInputType
    _max?: SeccionMaxAggregateInputType
  }

  export type SeccionGroupByOutputType = {
    id: string
    servidorId: string
    tipo: $Enums.SeccionTipo
    titulo: string
    contenido: string
    orden: number
    _count: SeccionCountAggregateOutputType | null
    _avg: SeccionAvgAggregateOutputType | null
    _sum: SeccionSumAggregateOutputType | null
    _min: SeccionMinAggregateOutputType | null
    _max: SeccionMaxAggregateOutputType | null
  }

  type GetSeccionGroupByPayload<T extends SeccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeccionGroupByOutputType[P]>
            : GetScalarType<T[P], SeccionGroupByOutputType[P]>
        }
      >
    >


  export type SeccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servidorId?: boolean
    tipo?: boolean
    titulo?: boolean
    contenido?: boolean
    orden?: boolean
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seccion"]>

  export type SeccionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servidorId?: boolean
    tipo?: boolean
    titulo?: boolean
    contenido?: boolean
    orden?: boolean
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seccion"]>

  export type SeccionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servidorId?: boolean
    tipo?: boolean
    titulo?: boolean
    contenido?: boolean
    orden?: boolean
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seccion"]>

  export type SeccionSelectScalar = {
    id?: boolean
    servidorId?: boolean
    tipo?: boolean
    titulo?: boolean
    contenido?: boolean
    orden?: boolean
  }

  export type SeccionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "servidorId" | "tipo" | "titulo" | "contenido" | "orden", ExtArgs["result"]["seccion"]>
  export type SeccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }
  export type SeccionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }
  export type SeccionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidor?: boolean | ServidorUnitarioDefaultArgs<ExtArgs>
  }

  export type $SeccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seccion"
    objects: {
      servidor: Prisma.$ServidorUnitarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      servidorId: string
      tipo: $Enums.SeccionTipo
      titulo: string
      contenido: string
      orden: number
    }, ExtArgs["result"]["seccion"]>
    composites: {}
  }

  type SeccionGetPayload<S extends boolean | null | undefined | SeccionDefaultArgs> = $Result.GetResult<Prisma.$SeccionPayload, S>

  type SeccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeccionCountAggregateInputType | true
    }

  export interface SeccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seccion'], meta: { name: 'Seccion' } }
    /**
     * Find zero or one Seccion that matches the filter.
     * @param {SeccionFindUniqueArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeccionFindUniqueArgs>(args: SelectSubset<T, SeccionFindUniqueArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seccion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeccionFindUniqueOrThrowArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeccionFindUniqueOrThrowArgs>(args: SelectSubset<T, SeccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionFindFirstArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeccionFindFirstArgs>(args?: SelectSubset<T, SeccionFindFirstArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionFindFirstOrThrowArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeccionFindFirstOrThrowArgs>(args?: SelectSubset<T, SeccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seccions
     * const seccions = await prisma.seccion.findMany()
     * 
     * // Get first 10 Seccions
     * const seccions = await prisma.seccion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seccionWithIdOnly = await prisma.seccion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeccionFindManyArgs>(args?: SelectSubset<T, SeccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seccion.
     * @param {SeccionCreateArgs} args - Arguments to create a Seccion.
     * @example
     * // Create one Seccion
     * const Seccion = await prisma.seccion.create({
     *   data: {
     *     // ... data to create a Seccion
     *   }
     * })
     * 
     */
    create<T extends SeccionCreateArgs>(args: SelectSubset<T, SeccionCreateArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seccions.
     * @param {SeccionCreateManyArgs} args - Arguments to create many Seccions.
     * @example
     * // Create many Seccions
     * const seccion = await prisma.seccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeccionCreateManyArgs>(args?: SelectSubset<T, SeccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seccions and returns the data saved in the database.
     * @param {SeccionCreateManyAndReturnArgs} args - Arguments to create many Seccions.
     * @example
     * // Create many Seccions
     * const seccion = await prisma.seccion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seccions and only return the `id`
     * const seccionWithIdOnly = await prisma.seccion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeccionCreateManyAndReturnArgs>(args?: SelectSubset<T, SeccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seccion.
     * @param {SeccionDeleteArgs} args - Arguments to delete one Seccion.
     * @example
     * // Delete one Seccion
     * const Seccion = await prisma.seccion.delete({
     *   where: {
     *     // ... filter to delete one Seccion
     *   }
     * })
     * 
     */
    delete<T extends SeccionDeleteArgs>(args: SelectSubset<T, SeccionDeleteArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seccion.
     * @param {SeccionUpdateArgs} args - Arguments to update one Seccion.
     * @example
     * // Update one Seccion
     * const seccion = await prisma.seccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeccionUpdateArgs>(args: SelectSubset<T, SeccionUpdateArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seccions.
     * @param {SeccionDeleteManyArgs} args - Arguments to filter Seccions to delete.
     * @example
     * // Delete a few Seccions
     * const { count } = await prisma.seccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeccionDeleteManyArgs>(args?: SelectSubset<T, SeccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seccions
     * const seccion = await prisma.seccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeccionUpdateManyArgs>(args: SelectSubset<T, SeccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seccions and returns the data updated in the database.
     * @param {SeccionUpdateManyAndReturnArgs} args - Arguments to update many Seccions.
     * @example
     * // Update many Seccions
     * const seccion = await prisma.seccion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seccions and only return the `id`
     * const seccionWithIdOnly = await prisma.seccion.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SeccionUpdateManyAndReturnArgs>(args: SelectSubset<T, SeccionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seccion.
     * @param {SeccionUpsertArgs} args - Arguments to update or create a Seccion.
     * @example
     * // Update or create a Seccion
     * const seccion = await prisma.seccion.upsert({
     *   create: {
     *     // ... data to create a Seccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seccion we want to update
     *   }
     * })
     */
    upsert<T extends SeccionUpsertArgs>(args: SelectSubset<T, SeccionUpsertArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionCountArgs} args - Arguments to filter Seccions to count.
     * @example
     * // Count the number of Seccions
     * const count = await prisma.seccion.count({
     *   where: {
     *     // ... the filter for the Seccions we want to count
     *   }
     * })
    **/
    count<T extends SeccionCountArgs>(
      args?: Subset<T, SeccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeccionAggregateArgs>(args: Subset<T, SeccionAggregateArgs>): Prisma.PrismaPromise<GetSeccionAggregateType<T>>

    /**
     * Group by Seccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionGroupByArgs} args - Group by arguments.
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
      T extends SeccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeccionGroupByArgs['orderBy'] }
        : { orderBy?: SeccionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seccion model
   */
  readonly fields: SeccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servidor<T extends ServidorUnitarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServidorUnitarioDefaultArgs<ExtArgs>>): Prisma__ServidorUnitarioClient<$Result.GetResult<Prisma.$ServidorUnitarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Seccion model
   */
  interface SeccionFieldRefs {
    readonly id: FieldRef<"Seccion", 'String'>
    readonly servidorId: FieldRef<"Seccion", 'String'>
    readonly tipo: FieldRef<"Seccion", 'SeccionTipo'>
    readonly titulo: FieldRef<"Seccion", 'String'>
    readonly contenido: FieldRef<"Seccion", 'String'>
    readonly orden: FieldRef<"Seccion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Seccion findUnique
   */
  export type SeccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion findUniqueOrThrow
   */
  export type SeccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion findFirst
   */
  export type SeccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seccions.
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seccions.
     */
    distinct?: SeccionScalarFieldEnum | SeccionScalarFieldEnum[]
  }

  /**
   * Seccion findFirstOrThrow
   */
  export type SeccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seccions.
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seccions.
     */
    distinct?: SeccionScalarFieldEnum | SeccionScalarFieldEnum[]
  }

  /**
   * Seccion findMany
   */
  export type SeccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccions to fetch.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seccions.
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    distinct?: SeccionScalarFieldEnum | SeccionScalarFieldEnum[]
  }

  /**
   * Seccion create
   */
  export type SeccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * The data needed to create a Seccion.
     */
    data: XOR<SeccionCreateInput, SeccionUncheckedCreateInput>
  }

  /**
   * Seccion createMany
   */
  export type SeccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seccions.
     */
    data: SeccionCreateManyInput | SeccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seccion createManyAndReturn
   */
  export type SeccionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * The data used to create many Seccions.
     */
    data: SeccionCreateManyInput | SeccionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seccion update
   */
  export type SeccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * The data needed to update a Seccion.
     */
    data: XOR<SeccionUpdateInput, SeccionUncheckedUpdateInput>
    /**
     * Choose, which Seccion to update.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion updateMany
   */
  export type SeccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seccions.
     */
    data: XOR<SeccionUpdateManyMutationInput, SeccionUncheckedUpdateManyInput>
    /**
     * Filter which Seccions to update
     */
    where?: SeccionWhereInput
    /**
     * Limit how many Seccions to update.
     */
    limit?: number
  }

  /**
   * Seccion updateManyAndReturn
   */
  export type SeccionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * The data used to update Seccions.
     */
    data: XOR<SeccionUpdateManyMutationInput, SeccionUncheckedUpdateManyInput>
    /**
     * Filter which Seccions to update
     */
    where?: SeccionWhereInput
    /**
     * Limit how many Seccions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seccion upsert
   */
  export type SeccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * The filter to search for the Seccion to update in case it exists.
     */
    where: SeccionWhereUniqueInput
    /**
     * In case the Seccion found by the `where` argument doesn't exist, create a new Seccion with this data.
     */
    create: XOR<SeccionCreateInput, SeccionUncheckedCreateInput>
    /**
     * In case the Seccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeccionUpdateInput, SeccionUncheckedUpdateInput>
  }

  /**
   * Seccion delete
   */
  export type SeccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter which Seccion to delete.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion deleteMany
   */
  export type SeccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seccions to delete
     */
    where?: SeccionWhereInput
    /**
     * Limit how many Seccions to delete.
     */
    limit?: number
  }

  /**
   * Seccion without action
   */
  export type SeccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    rol: 'rol',
    firstName: 'firstName',
    lastName: 'lastName',
    telefono: 'telefono',
    direccion: 'direccion',
    avatarUrl: 'avatarUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLoginAt: 'lastLoginAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ServidorUnitarioScalarFieldEnum: {
    id: 'id',
    dominio: 'dominio',
    nombre: 'nombre',
    apiToken: 'apiToken',
    requiereActualizacion: 'requiereActualizacion',
    constelacionId: 'constelacionId'
  };

  export type ServidorUnitarioScalarFieldEnum = (typeof ServidorUnitarioScalarFieldEnum)[keyof typeof ServidorUnitarioScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    servidorId: 'servidorId'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ProfesionalScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    servidorId: 'servidorId'
  };

  export type ProfesionalScalarFieldEnum = (typeof ProfesionalScalarFieldEnum)[keyof typeof ProfesionalScalarFieldEnum]


  export const CasoScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    profesionalId: 'profesionalId',
    servidorId: 'servidorId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CasoScalarFieldEnum = (typeof CasoScalarFieldEnum)[keyof typeof CasoScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    casoId: 'casoId'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MensajeScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    remitente: 'remitente',
    contenido: 'contenido',
    fecha: 'fecha'
  };

  export type MensajeScalarFieldEnum = (typeof MensajeScalarFieldEnum)[keyof typeof MensajeScalarFieldEnum]


  export const NoticiasConfigScalarFieldEnum: {
    id: 'id',
    servidorId: 'servidorId',
    palabraClave: 'palabraClave',
    limite: 'limite'
  };

  export type NoticiasConfigScalarFieldEnum = (typeof NoticiasConfigScalarFieldEnum)[keyof typeof NoticiasConfigScalarFieldEnum]


  export const FuenteAutomaticaScalarFieldEnum: {
    id: 'id',
    servidorId: 'servidorId',
    nombre: 'nombre',
    url: 'url',
    tipo: 'tipo'
  };

  export type FuenteAutomaticaScalarFieldEnum = (typeof FuenteAutomaticaScalarFieldEnum)[keyof typeof FuenteAutomaticaScalarFieldEnum]


  export const ManualArticleScalarFieldEnum: {
    id: 'id',
    servidorId: 'servidorId',
    titulo: 'titulo',
    contenido: 'contenido',
    publishedAt: 'publishedAt'
  };

  export type ManualArticleScalarFieldEnum = (typeof ManualArticleScalarFieldEnum)[keyof typeof ManualArticleScalarFieldEnum]


  export const ArchivoScalarFieldEnum: {
    id: 'id',
    casoId: 'casoId',
    clienteId: 'clienteId',
    profesionalId: 'profesionalId',
    nombre: 'nombre',
    url: 'url',
    tipo: 'tipo',
    fecha: 'fecha'
  };

  export type ArchivoScalarFieldEnum = (typeof ArchivoScalarFieldEnum)[keyof typeof ArchivoScalarFieldEnum]


  export const ReporteScalarFieldEnum: {
    id: 'id',
    casoId: 'casoId',
    clienteId: 'clienteId',
    razon: 'razon',
    createdAt: 'createdAt'
  };

  export type ReporteScalarFieldEnum = (typeof ReporteScalarFieldEnum)[keyof typeof ReporteScalarFieldEnum]


  export const ConstelacionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type ConstelacionScalarFieldEnum = (typeof ConstelacionScalarFieldEnum)[keyof typeof ConstelacionScalarFieldEnum]


  export const SeccionScalarFieldEnum: {
    id: 'id',
    servidorId: 'servidorId',
    tipo: 'tipo',
    titulo: 'titulo',
    contenido: 'contenido',
    orden: 'orden'
  };

  export type SeccionScalarFieldEnum = (typeof SeccionScalarFieldEnum)[keyof typeof SeccionScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CasoStatus'
   */
  export type EnumCasoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasoStatus'>
    


  /**
   * Reference to a field of type 'CasoStatus[]'
   */
  export type ListEnumCasoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasoStatus[]'>
    


  /**
   * Reference to a field of type 'Remitente'
   */
  export type EnumRemitenteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Remitente'>
    


  /**
   * Reference to a field of type 'Remitente[]'
   */
  export type ListEnumRemitenteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Remitente[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SeccionTipo'
   */
  export type EnumSeccionTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeccionTipo'>
    


  /**
   * Reference to a field of type 'SeccionTipo[]'
   */
  export type ListEnumSeccionTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeccionTipo[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    firstName?: StringFilter<"Usuario"> | string
    lastName?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    direccion?: StringNullableFilter<"Usuario"> | string | null
    avatarUrl?: StringNullableFilter<"Usuario"> | string | null
    isActive?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    Clientes?: ClienteListRelationFilter
    Profesionales?: ProfesionalListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    telefono?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    Clientes?: ClienteOrderByRelationAggregateInput
    Profesionales?: ProfesionalOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    firstName?: StringFilter<"Usuario"> | string
    lastName?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    direccion?: StringNullableFilter<"Usuario"> | string | null
    avatarUrl?: StringNullableFilter<"Usuario"> | string | null
    isActive?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    Clientes?: ClienteListRelationFilter
    Profesionales?: ProfesionalListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    telefono?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    firstName?: StringWithAggregatesFilter<"Usuario"> | string
    lastName?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    isActive?: BoolWithAggregatesFilter<"Usuario"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
  }

  export type ServidorUnitarioWhereInput = {
    AND?: ServidorUnitarioWhereInput | ServidorUnitarioWhereInput[]
    OR?: ServidorUnitarioWhereInput[]
    NOT?: ServidorUnitarioWhereInput | ServidorUnitarioWhereInput[]
    id?: StringFilter<"ServidorUnitario"> | string
    dominio?: StringFilter<"ServidorUnitario"> | string
    nombre?: StringFilter<"ServidorUnitario"> | string
    apiToken?: StringFilter<"ServidorUnitario"> | string
    requiereActualizacion?: BoolFilter<"ServidorUnitario"> | boolean
    constelacionId?: StringFilter<"ServidorUnitario"> | string
    constelacion?: XOR<ConstelacionScalarRelationFilter, ConstelacionWhereInput>
    secciones?: SeccionListRelationFilter
    noticiasConfig?: XOR<NoticiasConfigNullableScalarRelationFilter, NoticiasConfigWhereInput> | null
    fuentesAutomaticas?: FuenteAutomaticaListRelationFilter
    manualArticles?: ManualArticleListRelationFilter
    clientes?: ClienteListRelationFilter
    profesionales?: ProfesionalListRelationFilter
    casos?: CasoListRelationFilter
  }

  export type ServidorUnitarioOrderByWithRelationInput = {
    id?: SortOrder
    dominio?: SortOrder
    nombre?: SortOrder
    apiToken?: SortOrder
    requiereActualizacion?: SortOrder
    constelacionId?: SortOrder
    constelacion?: ConstelacionOrderByWithRelationInput
    secciones?: SeccionOrderByRelationAggregateInput
    noticiasConfig?: NoticiasConfigOrderByWithRelationInput
    fuentesAutomaticas?: FuenteAutomaticaOrderByRelationAggregateInput
    manualArticles?: ManualArticleOrderByRelationAggregateInput
    clientes?: ClienteOrderByRelationAggregateInput
    profesionales?: ProfesionalOrderByRelationAggregateInput
    casos?: CasoOrderByRelationAggregateInput
  }

  export type ServidorUnitarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dominio?: string
    apiToken?: string
    AND?: ServidorUnitarioWhereInput | ServidorUnitarioWhereInput[]
    OR?: ServidorUnitarioWhereInput[]
    NOT?: ServidorUnitarioWhereInput | ServidorUnitarioWhereInput[]
    nombre?: StringFilter<"ServidorUnitario"> | string
    requiereActualizacion?: BoolFilter<"ServidorUnitario"> | boolean
    constelacionId?: StringFilter<"ServidorUnitario"> | string
    constelacion?: XOR<ConstelacionScalarRelationFilter, ConstelacionWhereInput>
    secciones?: SeccionListRelationFilter
    noticiasConfig?: XOR<NoticiasConfigNullableScalarRelationFilter, NoticiasConfigWhereInput> | null
    fuentesAutomaticas?: FuenteAutomaticaListRelationFilter
    manualArticles?: ManualArticleListRelationFilter
    clientes?: ClienteListRelationFilter
    profesionales?: ProfesionalListRelationFilter
    casos?: CasoListRelationFilter
  }, "id" | "dominio" | "apiToken">

  export type ServidorUnitarioOrderByWithAggregationInput = {
    id?: SortOrder
    dominio?: SortOrder
    nombre?: SortOrder
    apiToken?: SortOrder
    requiereActualizacion?: SortOrder
    constelacionId?: SortOrder
    _count?: ServidorUnitarioCountOrderByAggregateInput
    _max?: ServidorUnitarioMaxOrderByAggregateInput
    _min?: ServidorUnitarioMinOrderByAggregateInput
  }

  export type ServidorUnitarioScalarWhereWithAggregatesInput = {
    AND?: ServidorUnitarioScalarWhereWithAggregatesInput | ServidorUnitarioScalarWhereWithAggregatesInput[]
    OR?: ServidorUnitarioScalarWhereWithAggregatesInput[]
    NOT?: ServidorUnitarioScalarWhereWithAggregatesInput | ServidorUnitarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServidorUnitario"> | string
    dominio?: StringWithAggregatesFilter<"ServidorUnitario"> | string
    nombre?: StringWithAggregatesFilter<"ServidorUnitario"> | string
    apiToken?: StringWithAggregatesFilter<"ServidorUnitario"> | string
    requiereActualizacion?: BoolWithAggregatesFilter<"ServidorUnitario"> | boolean
    constelacionId?: StringWithAggregatesFilter<"ServidorUnitario"> | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    usuarioId?: StringFilter<"Cliente"> | string
    servidorId?: StringFilter<"Cliente"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    servidor?: XOR<ServidorUnitarioScalarRelationFilter, ServidorUnitarioWhereInput>
    casos?: CasoListRelationFilter
    archivos?: ArchivoListRelationFilter
    reportes?: ReporteListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servidorId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    servidor?: ServidorUnitarioOrderByWithRelationInput
    casos?: CasoOrderByRelationAggregateInput
    archivos?: ArchivoOrderByRelationAggregateInput
    reportes?: ReporteOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    usuarioId?: StringFilter<"Cliente"> | string
    servidorId?: StringFilter<"Cliente"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    servidor?: XOR<ServidorUnitarioScalarRelationFilter, ServidorUnitarioWhereInput>
    casos?: CasoListRelationFilter
    archivos?: ArchivoListRelationFilter
    reportes?: ReporteListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servidorId?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    usuarioId?: StringWithAggregatesFilter<"Cliente"> | string
    servidorId?: StringWithAggregatesFilter<"Cliente"> | string
  }

  export type ProfesionalWhereInput = {
    AND?: ProfesionalWhereInput | ProfesionalWhereInput[]
    OR?: ProfesionalWhereInput[]
    NOT?: ProfesionalWhereInput | ProfesionalWhereInput[]
    id?: StringFilter<"Profesional"> | string
    usuarioId?: StringFilter<"Profesional"> | string
    servidorId?: StringFilter<"Profesional"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    servidor?: XOR<ServidorUnitarioScalarRelationFilter, ServidorUnitarioWhereInput>
    casos?: CasoListRelationFilter
    archivos?: ArchivoListRelationFilter
  }

  export type ProfesionalOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servidorId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    servidor?: ServidorUnitarioOrderByWithRelationInput
    casos?: CasoOrderByRelationAggregateInput
    archivos?: ArchivoOrderByRelationAggregateInput
  }

  export type ProfesionalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfesionalWhereInput | ProfesionalWhereInput[]
    OR?: ProfesionalWhereInput[]
    NOT?: ProfesionalWhereInput | ProfesionalWhereInput[]
    usuarioId?: StringFilter<"Profesional"> | string
    servidorId?: StringFilter<"Profesional"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    servidor?: XOR<ServidorUnitarioScalarRelationFilter, ServidorUnitarioWhereInput>
    casos?: CasoListRelationFilter
    archivos?: ArchivoListRelationFilter
  }, "id">

  export type ProfesionalOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servidorId?: SortOrder
    _count?: ProfesionalCountOrderByAggregateInput
    _max?: ProfesionalMaxOrderByAggregateInput
    _min?: ProfesionalMinOrderByAggregateInput
  }

  export type ProfesionalScalarWhereWithAggregatesInput = {
    AND?: ProfesionalScalarWhereWithAggregatesInput | ProfesionalScalarWhereWithAggregatesInput[]
    OR?: ProfesionalScalarWhereWithAggregatesInput[]
    NOT?: ProfesionalScalarWhereWithAggregatesInput | ProfesionalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profesional"> | string
    usuarioId?: StringWithAggregatesFilter<"Profesional"> | string
    servidorId?: StringWithAggregatesFilter<"Profesional"> | string
  }

  export type CasoWhereInput = {
    AND?: CasoWhereInput | CasoWhereInput[]
    OR?: CasoWhereInput[]
    NOT?: CasoWhereInput | CasoWhereInput[]
    id?: StringFilter<"Caso"> | string
    clienteId?: StringFilter<"Caso"> | string
    profesionalId?: StringFilter<"Caso"> | string
    servidorId?: StringFilter<"Caso"> | string
    status?: EnumCasoStatusFilter<"Caso"> | $Enums.CasoStatus
    createdAt?: DateTimeFilter<"Caso"> | Date | string
    updatedAt?: DateTimeFilter<"Caso"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    profesional?: XOR<ProfesionalScalarRelationFilter, ProfesionalWhereInput>
    servidor?: XOR<ServidorUnitarioScalarRelationFilter, ServidorUnitarioWhereInput>
    chat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
    archivos?: ArchivoListRelationFilter
    reportes?: ReporteListRelationFilter
  }

  export type CasoOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    profesionalId?: SortOrder
    servidorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    profesional?: ProfesionalOrderByWithRelationInput
    servidor?: ServidorUnitarioOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
    archivos?: ArchivoOrderByRelationAggregateInput
    reportes?: ReporteOrderByRelationAggregateInput
  }

  export type CasoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CasoWhereInput | CasoWhereInput[]
    OR?: CasoWhereInput[]
    NOT?: CasoWhereInput | CasoWhereInput[]
    clienteId?: StringFilter<"Caso"> | string
    profesionalId?: StringFilter<"Caso"> | string
    servidorId?: StringFilter<"Caso"> | string
    status?: EnumCasoStatusFilter<"Caso"> | $Enums.CasoStatus
    createdAt?: DateTimeFilter<"Caso"> | Date | string
    updatedAt?: DateTimeFilter<"Caso"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    profesional?: XOR<ProfesionalScalarRelationFilter, ProfesionalWhereInput>
    servidor?: XOR<ServidorUnitarioScalarRelationFilter, ServidorUnitarioWhereInput>
    chat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
    archivos?: ArchivoListRelationFilter
    reportes?: ReporteListRelationFilter
  }, "id">

  export type CasoOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    profesionalId?: SortOrder
    servidorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CasoCountOrderByAggregateInput
    _max?: CasoMaxOrderByAggregateInput
    _min?: CasoMinOrderByAggregateInput
  }

  export type CasoScalarWhereWithAggregatesInput = {
    AND?: CasoScalarWhereWithAggregatesInput | CasoScalarWhereWithAggregatesInput[]
    OR?: CasoScalarWhereWithAggregatesInput[]
    NOT?: CasoScalarWhereWithAggregatesInput | CasoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Caso"> | string
    clienteId?: StringWithAggregatesFilter<"Caso"> | string
    profesionalId?: StringWithAggregatesFilter<"Caso"> | string
    servidorId?: StringWithAggregatesFilter<"Caso"> | string
    status?: EnumCasoStatusWithAggregatesFilter<"Caso"> | $Enums.CasoStatus
    createdAt?: DateTimeWithAggregatesFilter<"Caso"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Caso"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    casoId?: StringFilter<"Chat"> | string
    caso?: XOR<CasoScalarRelationFilter, CasoWhereInput>
    mensajes?: MensajeListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    casoId?: SortOrder
    caso?: CasoOrderByWithRelationInput
    mensajes?: MensajeOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    casoId?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    caso?: XOR<CasoScalarRelationFilter, CasoWhereInput>
    mensajes?: MensajeListRelationFilter
  }, "id" | "casoId">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    casoId?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    casoId?: StringWithAggregatesFilter<"Chat"> | string
  }

  export type MensajeWhereInput = {
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
    id?: StringFilter<"Mensaje"> | string
    chatId?: StringFilter<"Mensaje"> | string
    remitente?: EnumRemitenteFilter<"Mensaje"> | $Enums.Remitente
    contenido?: StringFilter<"Mensaje"> | string
    fecha?: DateTimeFilter<"Mensaje"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type MensajeOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    remitente?: SortOrder
    contenido?: SortOrder
    fecha?: SortOrder
    chat?: ChatOrderByWithRelationInput
  }

  export type MensajeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
    chatId?: StringFilter<"Mensaje"> | string
    remitente?: EnumRemitenteFilter<"Mensaje"> | $Enums.Remitente
    contenido?: StringFilter<"Mensaje"> | string
    fecha?: DateTimeFilter<"Mensaje"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type MensajeOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    remitente?: SortOrder
    contenido?: SortOrder
    fecha?: SortOrder
    _count?: MensajeCountOrderByAggregateInput
    _max?: MensajeMaxOrderByAggregateInput
    _min?: MensajeMinOrderByAggregateInput
  }

  export type MensajeScalarWhereWithAggregatesInput = {
    AND?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    OR?: MensajeScalarWhereWithAggregatesInput[]
    NOT?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mensaje"> | string
    chatId?: StringWithAggregatesFilter<"Mensaje"> | string
    remitente?: EnumRemitenteWithAggregatesFilter<"Mensaje"> | $Enums.Remitente
    contenido?: StringWithAggregatesFilter<"Mensaje"> | string
    fecha?: DateTimeWithAggregatesFilter<"Mensaje"> | Date | string
  }

  export type NoticiasConfigWhereInput = {
    AND?: NoticiasConfigWhereInput | NoticiasConfigWhereInput[]
    OR?: NoticiasConfigWhereInput[]
    NOT?: NoticiasConfigWhereInput | NoticiasConfigWhereInput[]
    id?: StringFilter<"NoticiasConfig"> | string
    servidorId?: StringFilter<"NoticiasConfig"> | string
    palabraClave?: StringFilter<"NoticiasConfig"> | string
    limite?: IntFilter<"NoticiasConfig"> | number
    servidor?: XOR<ServidorUnitarioScalarRelationFilter, ServidorUnitarioWhereInput>
  }

  export type NoticiasConfigOrderByWithRelationInput = {
    id?: SortOrder
    servidorId?: SortOrder
    palabraClave?: SortOrder
    limite?: SortOrder
    servidor?: ServidorUnitarioOrderByWithRelationInput
  }

  export type NoticiasConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    servidorId?: string
    AND?: NoticiasConfigWhereInput | NoticiasConfigWhereInput[]
    OR?: NoticiasConfigWhereInput[]
    NOT?: NoticiasConfigWhereInput | NoticiasConfigWhereInput[]
    palabraClave?: StringFilter<"NoticiasConfig"> | string
    limite?: IntFilter<"NoticiasConfig"> | number
    servidor?: XOR<ServidorUnitarioScalarRelationFilter, ServidorUnitarioWhereInput>
  }, "id" | "servidorId">

  export type NoticiasConfigOrderByWithAggregationInput = {
    id?: SortOrder
    servidorId?: SortOrder
    palabraClave?: SortOrder
    limite?: SortOrder
    _count?: NoticiasConfigCountOrderByAggregateInput
    _avg?: NoticiasConfigAvgOrderByAggregateInput
    _max?: NoticiasConfigMaxOrderByAggregateInput
    _min?: NoticiasConfigMinOrderByAggregateInput
    _sum?: NoticiasConfigSumOrderByAggregateInput
  }

  export type NoticiasConfigScalarWhereWithAggregatesInput = {
    AND?: NoticiasConfigScalarWhereWithAggregatesInput | NoticiasConfigScalarWhereWithAggregatesInput[]
    OR?: NoticiasConfigScalarWhereWithAggregatesInput[]
    NOT?: NoticiasConfigScalarWhereWithAggregatesInput | NoticiasConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NoticiasConfig"> | string
    servidorId?: StringWithAggregatesFilter<"NoticiasConfig"> | string
    palabraClave?: StringWithAggregatesFilter<"NoticiasConfig"> | string
    limite?: IntWithAggregatesFilter<"NoticiasConfig"> | number
  }

  export type FuenteAutomaticaWhereInput = {
    AND?: FuenteAutomaticaWhereInput | FuenteAutomaticaWhereInput[]
    OR?: FuenteAutomaticaWhereInput[]
    NOT?: FuenteAutomaticaWhereInput | FuenteAutomaticaWhereInput[]
    id?: StringFilter<"FuenteAutomatica"> | string
    servidorId?: StringFilter<"FuenteAutomatica"> | string
    nombre?: StringFilter<"FuenteAutomatica"> | string
    url?: StringFilter<"FuenteAutomatica"> | string
    tipo?: StringFilter<"FuenteAutomatica"> | string
    servidor?: XOR<ServidorUnitarioScalarRelationFilter, ServidorUnitarioWhereInput>
  }

  export type FuenteAutomaticaOrderByWithRelationInput = {
    id?: SortOrder
    servidorId?: SortOrder
    nombre?: SortOrder
    url?: SortOrder
    tipo?: SortOrder
    servidor?: ServidorUnitarioOrderByWithRelationInput
  }

  export type FuenteAutomaticaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FuenteAutomaticaWhereInput | FuenteAutomaticaWhereInput[]
    OR?: FuenteAutomaticaWhereInput[]
    NOT?: FuenteAutomaticaWhereInput | FuenteAutomaticaWhereInput[]
    servidorId?: StringFilter<"FuenteAutomatica"> | string
    nombre?: StringFilter<"FuenteAutomatica"> | string
    url?: StringFilter<"FuenteAutomatica"> | string
    tipo?: StringFilter<"FuenteAutomatica"> | string
    servidor?: XOR<ServidorUnitarioScalarRelationFilter, ServidorUnitarioWhereInput>
  }, "id">

  export type FuenteAutomaticaOrderByWithAggregationInput = {
    id?: SortOrder
    servidorId?: SortOrder
    nombre?: SortOrder
    url?: SortOrder
    tipo?: SortOrder
    _count?: FuenteAutomaticaCountOrderByAggregateInput
    _max?: FuenteAutomaticaMaxOrderByAggregateInput
    _min?: FuenteAutomaticaMinOrderByAggregateInput
  }

  export type FuenteAutomaticaScalarWhereWithAggregatesInput = {
    AND?: FuenteAutomaticaScalarWhereWithAggregatesInput | FuenteAutomaticaScalarWhereWithAggregatesInput[]
    OR?: FuenteAutomaticaScalarWhereWithAggregatesInput[]
    NOT?: FuenteAutomaticaScalarWhereWithAggregatesInput | FuenteAutomaticaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FuenteAutomatica"> | string
    servidorId?: StringWithAggregatesFilter<"FuenteAutomatica"> | string
    nombre?: StringWithAggregatesFilter<"FuenteAutomatica"> | string
    url?: StringWithAggregatesFilter<"FuenteAutomatica"> | string
    tipo?: StringWithAggregatesFilter<"FuenteAutomatica"> | string
  }

  export type ManualArticleWhereInput = {
    AND?: ManualArticleWhereInput | ManualArticleWhereInput[]
    OR?: ManualArticleWhereInput[]
    NOT?: ManualArticleWhereInput | ManualArticleWhereInput[]
    id?: StringFilter<"ManualArticle"> | string
    servidorId?: StringFilter<"ManualArticle"> | string
    titulo?: StringFilter<"ManualArticle"> | string
    contenido?: StringFilter<"ManualArticle"> | string
    publishedAt?: DateTimeFilter<"ManualArticle"> | Date | string
    servidor?: XOR<ServidorUnitarioScalarRelationFilter, ServidorUnitarioWhereInput>
  }

  export type ManualArticleOrderByWithRelationInput = {
    id?: SortOrder
    servidorId?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    publishedAt?: SortOrder
    servidor?: ServidorUnitarioOrderByWithRelationInput
  }

  export type ManualArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ManualArticleWhereInput | ManualArticleWhereInput[]
    OR?: ManualArticleWhereInput[]
    NOT?: ManualArticleWhereInput | ManualArticleWhereInput[]
    servidorId?: StringFilter<"ManualArticle"> | string
    titulo?: StringFilter<"ManualArticle"> | string
    contenido?: StringFilter<"ManualArticle"> | string
    publishedAt?: DateTimeFilter<"ManualArticle"> | Date | string
    servidor?: XOR<ServidorUnitarioScalarRelationFilter, ServidorUnitarioWhereInput>
  }, "id">

  export type ManualArticleOrderByWithAggregationInput = {
    id?: SortOrder
    servidorId?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    publishedAt?: SortOrder
    _count?: ManualArticleCountOrderByAggregateInput
    _max?: ManualArticleMaxOrderByAggregateInput
    _min?: ManualArticleMinOrderByAggregateInput
  }

  export type ManualArticleScalarWhereWithAggregatesInput = {
    AND?: ManualArticleScalarWhereWithAggregatesInput | ManualArticleScalarWhereWithAggregatesInput[]
    OR?: ManualArticleScalarWhereWithAggregatesInput[]
    NOT?: ManualArticleScalarWhereWithAggregatesInput | ManualArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ManualArticle"> | string
    servidorId?: StringWithAggregatesFilter<"ManualArticle"> | string
    titulo?: StringWithAggregatesFilter<"ManualArticle"> | string
    contenido?: StringWithAggregatesFilter<"ManualArticle"> | string
    publishedAt?: DateTimeWithAggregatesFilter<"ManualArticle"> | Date | string
  }

  export type ArchivoWhereInput = {
    AND?: ArchivoWhereInput | ArchivoWhereInput[]
    OR?: ArchivoWhereInput[]
    NOT?: ArchivoWhereInput | ArchivoWhereInput[]
    id?: StringFilter<"Archivo"> | string
    casoId?: StringFilter<"Archivo"> | string
    clienteId?: StringNullableFilter<"Archivo"> | string | null
    profesionalId?: StringNullableFilter<"Archivo"> | string | null
    nombre?: StringFilter<"Archivo"> | string
    url?: StringFilter<"Archivo"> | string
    tipo?: StringFilter<"Archivo"> | string
    fecha?: DateTimeFilter<"Archivo"> | Date | string
    caso?: XOR<CasoScalarRelationFilter, CasoWhereInput>
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
    profesional?: XOR<ProfesionalNullableScalarRelationFilter, ProfesionalWhereInput> | null
  }

  export type ArchivoOrderByWithRelationInput = {
    id?: SortOrder
    casoId?: SortOrder
    clienteId?: SortOrderInput | SortOrder
    profesionalId?: SortOrderInput | SortOrder
    nombre?: SortOrder
    url?: SortOrder
    tipo?: SortOrder
    fecha?: SortOrder
    caso?: CasoOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
    profesional?: ProfesionalOrderByWithRelationInput
  }

  export type ArchivoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArchivoWhereInput | ArchivoWhereInput[]
    OR?: ArchivoWhereInput[]
    NOT?: ArchivoWhereInput | ArchivoWhereInput[]
    casoId?: StringFilter<"Archivo"> | string
    clienteId?: StringNullableFilter<"Archivo"> | string | null
    profesionalId?: StringNullableFilter<"Archivo"> | string | null
    nombre?: StringFilter<"Archivo"> | string
    url?: StringFilter<"Archivo"> | string
    tipo?: StringFilter<"Archivo"> | string
    fecha?: DateTimeFilter<"Archivo"> | Date | string
    caso?: XOR<CasoScalarRelationFilter, CasoWhereInput>
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
    profesional?: XOR<ProfesionalNullableScalarRelationFilter, ProfesionalWhereInput> | null
  }, "id">

  export type ArchivoOrderByWithAggregationInput = {
    id?: SortOrder
    casoId?: SortOrder
    clienteId?: SortOrderInput | SortOrder
    profesionalId?: SortOrderInput | SortOrder
    nombre?: SortOrder
    url?: SortOrder
    tipo?: SortOrder
    fecha?: SortOrder
    _count?: ArchivoCountOrderByAggregateInput
    _max?: ArchivoMaxOrderByAggregateInput
    _min?: ArchivoMinOrderByAggregateInput
  }

  export type ArchivoScalarWhereWithAggregatesInput = {
    AND?: ArchivoScalarWhereWithAggregatesInput | ArchivoScalarWhereWithAggregatesInput[]
    OR?: ArchivoScalarWhereWithAggregatesInput[]
    NOT?: ArchivoScalarWhereWithAggregatesInput | ArchivoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Archivo"> | string
    casoId?: StringWithAggregatesFilter<"Archivo"> | string
    clienteId?: StringNullableWithAggregatesFilter<"Archivo"> | string | null
    profesionalId?: StringNullableWithAggregatesFilter<"Archivo"> | string | null
    nombre?: StringWithAggregatesFilter<"Archivo"> | string
    url?: StringWithAggregatesFilter<"Archivo"> | string
    tipo?: StringWithAggregatesFilter<"Archivo"> | string
    fecha?: DateTimeWithAggregatesFilter<"Archivo"> | Date | string
  }

  export type ReporteWhereInput = {
    AND?: ReporteWhereInput | ReporteWhereInput[]
    OR?: ReporteWhereInput[]
    NOT?: ReporteWhereInput | ReporteWhereInput[]
    id?: StringFilter<"Reporte"> | string
    casoId?: StringFilter<"Reporte"> | string
    clienteId?: StringFilter<"Reporte"> | string
    razon?: StringFilter<"Reporte"> | string
    createdAt?: DateTimeFilter<"Reporte"> | Date | string
    caso?: XOR<CasoScalarRelationFilter, CasoWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type ReporteOrderByWithRelationInput = {
    id?: SortOrder
    casoId?: SortOrder
    clienteId?: SortOrder
    razon?: SortOrder
    createdAt?: SortOrder
    caso?: CasoOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
  }

  export type ReporteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReporteWhereInput | ReporteWhereInput[]
    OR?: ReporteWhereInput[]
    NOT?: ReporteWhereInput | ReporteWhereInput[]
    casoId?: StringFilter<"Reporte"> | string
    clienteId?: StringFilter<"Reporte"> | string
    razon?: StringFilter<"Reporte"> | string
    createdAt?: DateTimeFilter<"Reporte"> | Date | string
    caso?: XOR<CasoScalarRelationFilter, CasoWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id">

  export type ReporteOrderByWithAggregationInput = {
    id?: SortOrder
    casoId?: SortOrder
    clienteId?: SortOrder
    razon?: SortOrder
    createdAt?: SortOrder
    _count?: ReporteCountOrderByAggregateInput
    _max?: ReporteMaxOrderByAggregateInput
    _min?: ReporteMinOrderByAggregateInput
  }

  export type ReporteScalarWhereWithAggregatesInput = {
    AND?: ReporteScalarWhereWithAggregatesInput | ReporteScalarWhereWithAggregatesInput[]
    OR?: ReporteScalarWhereWithAggregatesInput[]
    NOT?: ReporteScalarWhereWithAggregatesInput | ReporteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reporte"> | string
    casoId?: StringWithAggregatesFilter<"Reporte"> | string
    clienteId?: StringWithAggregatesFilter<"Reporte"> | string
    razon?: StringWithAggregatesFilter<"Reporte"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reporte"> | Date | string
  }

  export type ConstelacionWhereInput = {
    AND?: ConstelacionWhereInput | ConstelacionWhereInput[]
    OR?: ConstelacionWhereInput[]
    NOT?: ConstelacionWhereInput | ConstelacionWhereInput[]
    id?: StringFilter<"Constelacion"> | string
    nombre?: StringFilter<"Constelacion"> | string
    descripcion?: StringNullableFilter<"Constelacion"> | string | null
    servidores?: ServidorUnitarioListRelationFilter
  }

  export type ConstelacionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    servidores?: ServidorUnitarioOrderByRelationAggregateInput
  }

  export type ConstelacionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConstelacionWhereInput | ConstelacionWhereInput[]
    OR?: ConstelacionWhereInput[]
    NOT?: ConstelacionWhereInput | ConstelacionWhereInput[]
    nombre?: StringFilter<"Constelacion"> | string
    descripcion?: StringNullableFilter<"Constelacion"> | string | null
    servidores?: ServidorUnitarioListRelationFilter
  }, "id">

  export type ConstelacionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: ConstelacionCountOrderByAggregateInput
    _max?: ConstelacionMaxOrderByAggregateInput
    _min?: ConstelacionMinOrderByAggregateInput
  }

  export type ConstelacionScalarWhereWithAggregatesInput = {
    AND?: ConstelacionScalarWhereWithAggregatesInput | ConstelacionScalarWhereWithAggregatesInput[]
    OR?: ConstelacionScalarWhereWithAggregatesInput[]
    NOT?: ConstelacionScalarWhereWithAggregatesInput | ConstelacionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Constelacion"> | string
    nombre?: StringWithAggregatesFilter<"Constelacion"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Constelacion"> | string | null
  }

  export type SeccionWhereInput = {
    AND?: SeccionWhereInput | SeccionWhereInput[]
    OR?: SeccionWhereInput[]
    NOT?: SeccionWhereInput | SeccionWhereInput[]
    id?: StringFilter<"Seccion"> | string
    servidorId?: StringFilter<"Seccion"> | string
    tipo?: EnumSeccionTipoFilter<"Seccion"> | $Enums.SeccionTipo
    titulo?: StringFilter<"Seccion"> | string
    contenido?: StringFilter<"Seccion"> | string
    orden?: IntFilter<"Seccion"> | number
    servidor?: XOR<ServidorUnitarioScalarRelationFilter, ServidorUnitarioWhereInput>
  }

  export type SeccionOrderByWithRelationInput = {
    id?: SortOrder
    servidorId?: SortOrder
    tipo?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    orden?: SortOrder
    servidor?: ServidorUnitarioOrderByWithRelationInput
  }

  export type SeccionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SeccionWhereInput | SeccionWhereInput[]
    OR?: SeccionWhereInput[]
    NOT?: SeccionWhereInput | SeccionWhereInput[]
    servidorId?: StringFilter<"Seccion"> | string
    tipo?: EnumSeccionTipoFilter<"Seccion"> | $Enums.SeccionTipo
    titulo?: StringFilter<"Seccion"> | string
    contenido?: StringFilter<"Seccion"> | string
    orden?: IntFilter<"Seccion"> | number
    servidor?: XOR<ServidorUnitarioScalarRelationFilter, ServidorUnitarioWhereInput>
  }, "id">

  export type SeccionOrderByWithAggregationInput = {
    id?: SortOrder
    servidorId?: SortOrder
    tipo?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    orden?: SortOrder
    _count?: SeccionCountOrderByAggregateInput
    _avg?: SeccionAvgOrderByAggregateInput
    _max?: SeccionMaxOrderByAggregateInput
    _min?: SeccionMinOrderByAggregateInput
    _sum?: SeccionSumOrderByAggregateInput
  }

  export type SeccionScalarWhereWithAggregatesInput = {
    AND?: SeccionScalarWhereWithAggregatesInput | SeccionScalarWhereWithAggregatesInput[]
    OR?: SeccionScalarWhereWithAggregatesInput[]
    NOT?: SeccionScalarWhereWithAggregatesInput | SeccionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Seccion"> | string
    servidorId?: StringWithAggregatesFilter<"Seccion"> | string
    tipo?: EnumSeccionTipoWithAggregatesFilter<"Seccion"> | $Enums.SeccionTipo
    titulo?: StringWithAggregatesFilter<"Seccion"> | string
    contenido?: StringWithAggregatesFilter<"Seccion"> | string
    orden?: IntWithAggregatesFilter<"Seccion"> | number
  }

  export type UsuarioCreateInput = {
    id?: string
    email: string
    rol: $Enums.Rol
    firstName: string
    lastName: string
    telefono?: string | null
    direccion?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    Clientes?: ClienteCreateNestedManyWithoutUsuarioInput
    Profesionales?: ProfesionalCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    email: string
    rol: $Enums.Rol
    firstName: string
    lastName: string
    telefono?: string | null
    direccion?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    Clientes?: ClienteUncheckedCreateNestedManyWithoutUsuarioInput
    Profesionales?: ProfesionalUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Clientes?: ClienteUpdateManyWithoutUsuarioNestedInput
    Profesionales?: ProfesionalUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Clientes?: ClienteUncheckedUpdateManyWithoutUsuarioNestedInput
    Profesionales?: ProfesionalUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    email: string
    rol: $Enums.Rol
    firstName: string
    lastName: string
    telefono?: string | null
    direccion?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServidorUnitarioCreateInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacion: ConstelacionCreateNestedOneWithoutServidoresInput
    secciones?: SeccionCreateNestedManyWithoutServidorInput
    noticiasConfig?: NoticiasConfigCreateNestedOneWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaCreateNestedManyWithoutServidorInput
    manualArticles?: ManualArticleCreateNestedManyWithoutServidorInput
    clientes?: ClienteCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalCreateNestedManyWithoutServidorInput
    casos?: CasoCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioUncheckedCreateInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacionId: string
    secciones?: SeccionUncheckedCreateNestedManyWithoutServidorInput
    noticiasConfig?: NoticiasConfigUncheckedCreateNestedOneWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedCreateNestedManyWithoutServidorInput
    manualArticles?: ManualArticleUncheckedCreateNestedManyWithoutServidorInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalUncheckedCreateNestedManyWithoutServidorInput
    casos?: CasoUncheckedCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacion?: ConstelacionUpdateOneRequiredWithoutServidoresNestedInput
    secciones?: SeccionUpdateManyWithoutServidorNestedInput
    noticiasConfig?: NoticiasConfigUpdateOneWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUpdateManyWithoutServidorNestedInput
    manualArticles?: ManualArticleUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUpdateManyWithoutServidorNestedInput
    casos?: CasoUpdateManyWithoutServidorNestedInput
  }

  export type ServidorUnitarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacionId?: StringFieldUpdateOperationsInput | string
    secciones?: SeccionUncheckedUpdateManyWithoutServidorNestedInput
    noticiasConfig?: NoticiasConfigUncheckedUpdateOneWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedUpdateManyWithoutServidorNestedInput
    manualArticles?: ManualArticleUncheckedUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUncheckedUpdateManyWithoutServidorNestedInput
    casos?: CasoUncheckedUpdateManyWithoutServidorNestedInput
  }

  export type ServidorUnitarioCreateManyInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacionId: string
  }

  export type ServidorUnitarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServidorUnitarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacionId?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteCreateInput = {
    id?: string
    usuario: UsuarioCreateNestedOneWithoutClientesInput
    servidor: ServidorUnitarioCreateNestedOneWithoutClientesInput
    casos?: CasoCreateNestedManyWithoutClienteInput
    archivos?: ArchivoCreateNestedManyWithoutClienteInput
    reportes?: ReporteCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    usuarioId: string
    servidorId: string
    casos?: CasoUncheckedCreateNestedManyWithoutClienteInput
    archivos?: ArchivoUncheckedCreateNestedManyWithoutClienteInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutClientesNestedInput
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutClientesNestedInput
    casos?: CasoUpdateManyWithoutClienteNestedInput
    archivos?: ArchivoUpdateManyWithoutClienteNestedInput
    reportes?: ReporteUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    casos?: CasoUncheckedUpdateManyWithoutClienteNestedInput
    archivos?: ArchivoUncheckedUpdateManyWithoutClienteNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    usuarioId: string
    servidorId: string
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfesionalCreateInput = {
    id?: string
    usuario: UsuarioCreateNestedOneWithoutProfesionalesInput
    servidor: ServidorUnitarioCreateNestedOneWithoutProfesionalesInput
    casos?: CasoCreateNestedManyWithoutProfesionalInput
    archivos?: ArchivoCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateInput = {
    id?: string
    usuarioId: string
    servidorId: string
    casos?: CasoUncheckedCreateNestedManyWithoutProfesionalInput
    archivos?: ArchivoUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutProfesionalesNestedInput
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutProfesionalesNestedInput
    casos?: CasoUpdateManyWithoutProfesionalNestedInput
    archivos?: ArchivoUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    casos?: CasoUncheckedUpdateManyWithoutProfesionalNestedInput
    archivos?: ArchivoUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalCreateManyInput = {
    id?: string
    usuarioId: string
    servidorId: string
  }

  export type ProfesionalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ProfesionalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
  }

  export type CasoCreateInput = {
    id?: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutCasosInput
    profesional: ProfesionalCreateNestedOneWithoutCasosInput
    servidor: ServidorUnitarioCreateNestedOneWithoutCasosInput
    chat?: ChatCreateNestedOneWithoutCasoInput
    archivos?: ArchivoCreateNestedManyWithoutCasoInput
    reportes?: ReporteCreateNestedManyWithoutCasoInput
  }

  export type CasoUncheckedCreateInput = {
    id?: string
    clienteId: string
    profesionalId: string
    servidorId: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    chat?: ChatUncheckedCreateNestedOneWithoutCasoInput
    archivos?: ArchivoUncheckedCreateNestedManyWithoutCasoInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutCasoInput
  }

  export type CasoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutCasosNestedInput
    profesional?: ProfesionalUpdateOneRequiredWithoutCasosNestedInput
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutCasosNestedInput
    chat?: ChatUpdateOneWithoutCasoNestedInput
    archivos?: ArchivoUpdateManyWithoutCasoNestedInput
    reportes?: ReporteUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    profesionalId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUncheckedUpdateOneWithoutCasoNestedInput
    archivos?: ArchivoUncheckedUpdateManyWithoutCasoNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutCasoNestedInput
  }

  export type CasoCreateManyInput = {
    id?: string
    clienteId: string
    profesionalId: string
    servidorId: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CasoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    profesionalId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id?: string
    caso: CasoCreateNestedOneWithoutChatInput
    mensajes?: MensajeCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    casoId: string
    mensajes?: MensajeUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caso?: CasoUpdateOneRequiredWithoutChatNestedInput
    mensajes?: MensajeUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    casoId?: StringFieldUpdateOperationsInput | string
    mensajes?: MensajeUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    casoId: string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    casoId?: StringFieldUpdateOperationsInput | string
  }

  export type MensajeCreateInput = {
    id?: string
    remitente: $Enums.Remitente
    contenido: string
    fecha?: Date | string
    chat: ChatCreateNestedOneWithoutMensajesInput
  }

  export type MensajeUncheckedCreateInput = {
    id?: string
    chatId: string
    remitente: $Enums.Remitente
    contenido: string
    fecha?: Date | string
  }

  export type MensajeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    remitente?: EnumRemitenteFieldUpdateOperationsInput | $Enums.Remitente
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMensajesNestedInput
  }

  export type MensajeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    remitente?: EnumRemitenteFieldUpdateOperationsInput | $Enums.Remitente
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeCreateManyInput = {
    id?: string
    chatId: string
    remitente: $Enums.Remitente
    contenido: string
    fecha?: Date | string
  }

  export type MensajeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    remitente?: EnumRemitenteFieldUpdateOperationsInput | $Enums.Remitente
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    remitente?: EnumRemitenteFieldUpdateOperationsInput | $Enums.Remitente
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticiasConfigCreateInput = {
    id?: string
    palabraClave: string
    limite?: number
    servidor: ServidorUnitarioCreateNestedOneWithoutNoticiasConfigInput
  }

  export type NoticiasConfigUncheckedCreateInput = {
    id?: string
    servidorId: string
    palabraClave: string
    limite?: number
  }

  export type NoticiasConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    palabraClave?: StringFieldUpdateOperationsInput | string
    limite?: IntFieldUpdateOperationsInput | number
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutNoticiasConfigNestedInput
  }

  export type NoticiasConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    palabraClave?: StringFieldUpdateOperationsInput | string
    limite?: IntFieldUpdateOperationsInput | number
  }

  export type NoticiasConfigCreateManyInput = {
    id?: string
    servidorId: string
    palabraClave: string
    limite?: number
  }

  export type NoticiasConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    palabraClave?: StringFieldUpdateOperationsInput | string
    limite?: IntFieldUpdateOperationsInput | number
  }

  export type NoticiasConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    palabraClave?: StringFieldUpdateOperationsInput | string
    limite?: IntFieldUpdateOperationsInput | number
  }

  export type FuenteAutomaticaCreateInput = {
    id?: string
    nombre: string
    url: string
    tipo: string
    servidor: ServidorUnitarioCreateNestedOneWithoutFuentesAutomaticasInput
  }

  export type FuenteAutomaticaUncheckedCreateInput = {
    id?: string
    servidorId: string
    nombre: string
    url: string
    tipo: string
  }

  export type FuenteAutomaticaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutFuentesAutomaticasNestedInput
  }

  export type FuenteAutomaticaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type FuenteAutomaticaCreateManyInput = {
    id?: string
    servidorId: string
    nombre: string
    url: string
    tipo: string
  }

  export type FuenteAutomaticaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type FuenteAutomaticaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type ManualArticleCreateInput = {
    id?: string
    titulo: string
    contenido: string
    publishedAt: Date | string
    servidor: ServidorUnitarioCreateNestedOneWithoutManualArticlesInput
  }

  export type ManualArticleUncheckedCreateInput = {
    id?: string
    servidorId: string
    titulo: string
    contenido: string
    publishedAt: Date | string
  }

  export type ManualArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutManualArticlesNestedInput
  }

  export type ManualArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManualArticleCreateManyInput = {
    id?: string
    servidorId: string
    titulo: string
    contenido: string
    publishedAt: Date | string
  }

  export type ManualArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManualArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoCreateInput = {
    id?: string
    nombre: string
    url: string
    tipo: string
    fecha?: Date | string
    caso: CasoCreateNestedOneWithoutArchivosInput
    cliente?: ClienteCreateNestedOneWithoutArchivosInput
    profesional?: ProfesionalCreateNestedOneWithoutArchivosInput
  }

  export type ArchivoUncheckedCreateInput = {
    id?: string
    casoId: string
    clienteId?: string | null
    profesionalId?: string | null
    nombre: string
    url: string
    tipo: string
    fecha?: Date | string
  }

  export type ArchivoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneRequiredWithoutArchivosNestedInput
    cliente?: ClienteUpdateOneWithoutArchivosNestedInput
    profesional?: ProfesionalUpdateOneWithoutArchivosNestedInput
  }

  export type ArchivoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    casoId?: StringFieldUpdateOperationsInput | string
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    profesionalId?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoCreateManyInput = {
    id?: string
    casoId: string
    clienteId?: string | null
    profesionalId?: string | null
    nombre: string
    url: string
    tipo: string
    fecha?: Date | string
  }

  export type ArchivoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    casoId?: StringFieldUpdateOperationsInput | string
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    profesionalId?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteCreateInput = {
    id?: string
    razon: string
    createdAt?: Date | string
    caso: CasoCreateNestedOneWithoutReportesInput
    cliente: ClienteCreateNestedOneWithoutReportesInput
  }

  export type ReporteUncheckedCreateInput = {
    id?: string
    casoId: string
    clienteId: string
    razon: string
    createdAt?: Date | string
  }

  export type ReporteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneRequiredWithoutReportesNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutReportesNestedInput
  }

  export type ReporteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    casoId?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    razon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteCreateManyInput = {
    id?: string
    casoId: string
    clienteId: string
    razon: string
    createdAt?: Date | string
  }

  export type ReporteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    razon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    casoId?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    razon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConstelacionCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    servidores?: ServidorUnitarioCreateNestedManyWithoutConstelacionInput
  }

  export type ConstelacionUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    servidores?: ServidorUnitarioUncheckedCreateNestedManyWithoutConstelacionInput
  }

  export type ConstelacionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    servidores?: ServidorUnitarioUpdateManyWithoutConstelacionNestedInput
  }

  export type ConstelacionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    servidores?: ServidorUnitarioUncheckedUpdateManyWithoutConstelacionNestedInput
  }

  export type ConstelacionCreateManyInput = {
    id?: string
    nombre: string
    descripcion?: string | null
  }

  export type ConstelacionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConstelacionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeccionCreateInput = {
    id?: string
    tipo: $Enums.SeccionTipo
    titulo: string
    contenido: string
    orden: number
    servidor: ServidorUnitarioCreateNestedOneWithoutSeccionesInput
  }

  export type SeccionUncheckedCreateInput = {
    id?: string
    servidorId: string
    tipo: $Enums.SeccionTipo
    titulo: string
    contenido: string
    orden: number
  }

  export type SeccionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumSeccionTipoFieldUpdateOperationsInput | $Enums.SeccionTipo
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutSeccionesNestedInput
  }

  export type SeccionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumSeccionTipoFieldUpdateOperationsInput | $Enums.SeccionTipo
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type SeccionCreateManyInput = {
    id?: string
    servidorId: string
    tipo: $Enums.SeccionTipo
    titulo: string
    contenido: string
    orden: number
  }

  export type SeccionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumSeccionTipoFieldUpdateOperationsInput | $Enums.SeccionTipo
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type SeccionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumSeccionTipoFieldUpdateOperationsInput | $Enums.SeccionTipo
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
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

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type ClienteListRelationFilter = {
    every?: ClienteWhereInput
    some?: ClienteWhereInput
    none?: ClienteWhereInput
  }

  export type ProfesionalListRelationFilter = {
    every?: ProfesionalWhereInput
    some?: ProfesionalWhereInput
    none?: ProfesionalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfesionalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
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

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type ConstelacionScalarRelationFilter = {
    is?: ConstelacionWhereInput
    isNot?: ConstelacionWhereInput
  }

  export type SeccionListRelationFilter = {
    every?: SeccionWhereInput
    some?: SeccionWhereInput
    none?: SeccionWhereInput
  }

  export type NoticiasConfigNullableScalarRelationFilter = {
    is?: NoticiasConfigWhereInput | null
    isNot?: NoticiasConfigWhereInput | null
  }

  export type FuenteAutomaticaListRelationFilter = {
    every?: FuenteAutomaticaWhereInput
    some?: FuenteAutomaticaWhereInput
    none?: FuenteAutomaticaWhereInput
  }

  export type ManualArticleListRelationFilter = {
    every?: ManualArticleWhereInput
    some?: ManualArticleWhereInput
    none?: ManualArticleWhereInput
  }

  export type CasoListRelationFilter = {
    every?: CasoWhereInput
    some?: CasoWhereInput
    none?: CasoWhereInput
  }

  export type SeccionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FuenteAutomaticaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManualArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CasoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServidorUnitarioCountOrderByAggregateInput = {
    id?: SortOrder
    dominio?: SortOrder
    nombre?: SortOrder
    apiToken?: SortOrder
    requiereActualizacion?: SortOrder
    constelacionId?: SortOrder
  }

  export type ServidorUnitarioMaxOrderByAggregateInput = {
    id?: SortOrder
    dominio?: SortOrder
    nombre?: SortOrder
    apiToken?: SortOrder
    requiereActualizacion?: SortOrder
    constelacionId?: SortOrder
  }

  export type ServidorUnitarioMinOrderByAggregateInput = {
    id?: SortOrder
    dominio?: SortOrder
    nombre?: SortOrder
    apiToken?: SortOrder
    requiereActualizacion?: SortOrder
    constelacionId?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ServidorUnitarioScalarRelationFilter = {
    is?: ServidorUnitarioWhereInput
    isNot?: ServidorUnitarioWhereInput
  }

  export type ArchivoListRelationFilter = {
    every?: ArchivoWhereInput
    some?: ArchivoWhereInput
    none?: ArchivoWhereInput
  }

  export type ReporteListRelationFilter = {
    every?: ReporteWhereInput
    some?: ReporteWhereInput
    none?: ReporteWhereInput
  }

  export type ArchivoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReporteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servidorId?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servidorId?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servidorId?: SortOrder
  }

  export type ProfesionalCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servidorId?: SortOrder
  }

  export type ProfesionalMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servidorId?: SortOrder
  }

  export type ProfesionalMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servidorId?: SortOrder
  }

  export type EnumCasoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CasoStatus | EnumCasoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasoStatus[] | ListEnumCasoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasoStatus[] | ListEnumCasoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasoStatusFilter<$PrismaModel> | $Enums.CasoStatus
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type ProfesionalScalarRelationFilter = {
    is?: ProfesionalWhereInput
    isNot?: ProfesionalWhereInput
  }

  export type ChatNullableScalarRelationFilter = {
    is?: ChatWhereInput | null
    isNot?: ChatWhereInput | null
  }

  export type CasoCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    profesionalId?: SortOrder
    servidorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CasoMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    profesionalId?: SortOrder
    servidorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CasoMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    profesionalId?: SortOrder
    servidorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCasoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasoStatus | EnumCasoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasoStatus[] | ListEnumCasoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasoStatus[] | ListEnumCasoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasoStatusWithAggregatesFilter<$PrismaModel> | $Enums.CasoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCasoStatusFilter<$PrismaModel>
    _max?: NestedEnumCasoStatusFilter<$PrismaModel>
  }

  export type CasoScalarRelationFilter = {
    is?: CasoWhereInput
    isNot?: CasoWhereInput
  }

  export type MensajeListRelationFilter = {
    every?: MensajeWhereInput
    some?: MensajeWhereInput
    none?: MensajeWhereInput
  }

  export type MensajeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
  }

  export type EnumRemitenteFilter<$PrismaModel = never> = {
    equals?: $Enums.Remitente | EnumRemitenteFieldRefInput<$PrismaModel>
    in?: $Enums.Remitente[] | ListEnumRemitenteFieldRefInput<$PrismaModel>
    notIn?: $Enums.Remitente[] | ListEnumRemitenteFieldRefInput<$PrismaModel>
    not?: NestedEnumRemitenteFilter<$PrismaModel> | $Enums.Remitente
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MensajeCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    remitente?: SortOrder
    contenido?: SortOrder
    fecha?: SortOrder
  }

  export type MensajeMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    remitente?: SortOrder
    contenido?: SortOrder
    fecha?: SortOrder
  }

  export type MensajeMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    remitente?: SortOrder
    contenido?: SortOrder
    fecha?: SortOrder
  }

  export type EnumRemitenteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Remitente | EnumRemitenteFieldRefInput<$PrismaModel>
    in?: $Enums.Remitente[] | ListEnumRemitenteFieldRefInput<$PrismaModel>
    notIn?: $Enums.Remitente[] | ListEnumRemitenteFieldRefInput<$PrismaModel>
    not?: NestedEnumRemitenteWithAggregatesFilter<$PrismaModel> | $Enums.Remitente
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRemitenteFilter<$PrismaModel>
    _max?: NestedEnumRemitenteFilter<$PrismaModel>
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

  export type NoticiasConfigCountOrderByAggregateInput = {
    id?: SortOrder
    servidorId?: SortOrder
    palabraClave?: SortOrder
    limite?: SortOrder
  }

  export type NoticiasConfigAvgOrderByAggregateInput = {
    limite?: SortOrder
  }

  export type NoticiasConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    servidorId?: SortOrder
    palabraClave?: SortOrder
    limite?: SortOrder
  }

  export type NoticiasConfigMinOrderByAggregateInput = {
    id?: SortOrder
    servidorId?: SortOrder
    palabraClave?: SortOrder
    limite?: SortOrder
  }

  export type NoticiasConfigSumOrderByAggregateInput = {
    limite?: SortOrder
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

  export type FuenteAutomaticaCountOrderByAggregateInput = {
    id?: SortOrder
    servidorId?: SortOrder
    nombre?: SortOrder
    url?: SortOrder
    tipo?: SortOrder
  }

  export type FuenteAutomaticaMaxOrderByAggregateInput = {
    id?: SortOrder
    servidorId?: SortOrder
    nombre?: SortOrder
    url?: SortOrder
    tipo?: SortOrder
  }

  export type FuenteAutomaticaMinOrderByAggregateInput = {
    id?: SortOrder
    servidorId?: SortOrder
    nombre?: SortOrder
    url?: SortOrder
    tipo?: SortOrder
  }

  export type ManualArticleCountOrderByAggregateInput = {
    id?: SortOrder
    servidorId?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    publishedAt?: SortOrder
  }

  export type ManualArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    servidorId?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    publishedAt?: SortOrder
  }

  export type ManualArticleMinOrderByAggregateInput = {
    id?: SortOrder
    servidorId?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    publishedAt?: SortOrder
  }

  export type ClienteNullableScalarRelationFilter = {
    is?: ClienteWhereInput | null
    isNot?: ClienteWhereInput | null
  }

  export type ProfesionalNullableScalarRelationFilter = {
    is?: ProfesionalWhereInput | null
    isNot?: ProfesionalWhereInput | null
  }

  export type ArchivoCountOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    clienteId?: SortOrder
    profesionalId?: SortOrder
    nombre?: SortOrder
    url?: SortOrder
    tipo?: SortOrder
    fecha?: SortOrder
  }

  export type ArchivoMaxOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    clienteId?: SortOrder
    profesionalId?: SortOrder
    nombre?: SortOrder
    url?: SortOrder
    tipo?: SortOrder
    fecha?: SortOrder
  }

  export type ArchivoMinOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    clienteId?: SortOrder
    profesionalId?: SortOrder
    nombre?: SortOrder
    url?: SortOrder
    tipo?: SortOrder
    fecha?: SortOrder
  }

  export type ReporteCountOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    clienteId?: SortOrder
    razon?: SortOrder
    createdAt?: SortOrder
  }

  export type ReporteMaxOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    clienteId?: SortOrder
    razon?: SortOrder
    createdAt?: SortOrder
  }

  export type ReporteMinOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    clienteId?: SortOrder
    razon?: SortOrder
    createdAt?: SortOrder
  }

  export type ServidorUnitarioListRelationFilter = {
    every?: ServidorUnitarioWhereInput
    some?: ServidorUnitarioWhereInput
    none?: ServidorUnitarioWhereInput
  }

  export type ServidorUnitarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConstelacionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type ConstelacionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type ConstelacionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type EnumSeccionTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.SeccionTipo | EnumSeccionTipoFieldRefInput<$PrismaModel>
    in?: $Enums.SeccionTipo[] | ListEnumSeccionTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeccionTipo[] | ListEnumSeccionTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumSeccionTipoFilter<$PrismaModel> | $Enums.SeccionTipo
  }

  export type SeccionCountOrderByAggregateInput = {
    id?: SortOrder
    servidorId?: SortOrder
    tipo?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    orden?: SortOrder
  }

  export type SeccionAvgOrderByAggregateInput = {
    orden?: SortOrder
  }

  export type SeccionMaxOrderByAggregateInput = {
    id?: SortOrder
    servidorId?: SortOrder
    tipo?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    orden?: SortOrder
  }

  export type SeccionMinOrderByAggregateInput = {
    id?: SortOrder
    servidorId?: SortOrder
    tipo?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    orden?: SortOrder
  }

  export type SeccionSumOrderByAggregateInput = {
    orden?: SortOrder
  }

  export type EnumSeccionTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeccionTipo | EnumSeccionTipoFieldRefInput<$PrismaModel>
    in?: $Enums.SeccionTipo[] | ListEnumSeccionTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeccionTipo[] | ListEnumSeccionTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumSeccionTipoWithAggregatesFilter<$PrismaModel> | $Enums.SeccionTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeccionTipoFilter<$PrismaModel>
    _max?: NestedEnumSeccionTipoFilter<$PrismaModel>
  }

  export type ClienteCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ClienteCreateWithoutUsuarioInput, ClienteUncheckedCreateWithoutUsuarioInput> | ClienteCreateWithoutUsuarioInput[] | ClienteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutUsuarioInput | ClienteCreateOrConnectWithoutUsuarioInput[]
    createMany?: ClienteCreateManyUsuarioInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ProfesionalCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProfesionalCreateWithoutUsuarioInput, ProfesionalUncheckedCreateWithoutUsuarioInput> | ProfesionalCreateWithoutUsuarioInput[] | ProfesionalUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutUsuarioInput | ProfesionalCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProfesionalCreateManyUsuarioInputEnvelope
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ClienteCreateWithoutUsuarioInput, ClienteUncheckedCreateWithoutUsuarioInput> | ClienteCreateWithoutUsuarioInput[] | ClienteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutUsuarioInput | ClienteCreateOrConnectWithoutUsuarioInput[]
    createMany?: ClienteCreateManyUsuarioInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ProfesionalUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProfesionalCreateWithoutUsuarioInput, ProfesionalUncheckedCreateWithoutUsuarioInput> | ProfesionalCreateWithoutUsuarioInput[] | ProfesionalUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutUsuarioInput | ProfesionalCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProfesionalCreateManyUsuarioInputEnvelope
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClienteUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ClienteCreateWithoutUsuarioInput, ClienteUncheckedCreateWithoutUsuarioInput> | ClienteCreateWithoutUsuarioInput[] | ClienteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutUsuarioInput | ClienteCreateOrConnectWithoutUsuarioInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutUsuarioInput | ClienteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ClienteCreateManyUsuarioInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutUsuarioInput | ClienteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutUsuarioInput | ClienteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ProfesionalUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProfesionalCreateWithoutUsuarioInput, ProfesionalUncheckedCreateWithoutUsuarioInput> | ProfesionalCreateWithoutUsuarioInput[] | ProfesionalUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutUsuarioInput | ProfesionalCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProfesionalUpsertWithWhereUniqueWithoutUsuarioInput | ProfesionalUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProfesionalCreateManyUsuarioInputEnvelope
    set?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    disconnect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    delete?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    update?: ProfesionalUpdateWithWhereUniqueWithoutUsuarioInput | ProfesionalUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProfesionalUpdateManyWithWhereWithoutUsuarioInput | ProfesionalUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProfesionalScalarWhereInput | ProfesionalScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ClienteCreateWithoutUsuarioInput, ClienteUncheckedCreateWithoutUsuarioInput> | ClienteCreateWithoutUsuarioInput[] | ClienteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutUsuarioInput | ClienteCreateOrConnectWithoutUsuarioInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutUsuarioInput | ClienteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ClienteCreateManyUsuarioInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutUsuarioInput | ClienteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutUsuarioInput | ClienteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ProfesionalUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProfesionalCreateWithoutUsuarioInput, ProfesionalUncheckedCreateWithoutUsuarioInput> | ProfesionalCreateWithoutUsuarioInput[] | ProfesionalUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutUsuarioInput | ProfesionalCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProfesionalUpsertWithWhereUniqueWithoutUsuarioInput | ProfesionalUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProfesionalCreateManyUsuarioInputEnvelope
    set?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    disconnect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    delete?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    update?: ProfesionalUpdateWithWhereUniqueWithoutUsuarioInput | ProfesionalUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProfesionalUpdateManyWithWhereWithoutUsuarioInput | ProfesionalUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProfesionalScalarWhereInput | ProfesionalScalarWhereInput[]
  }

  export type ConstelacionCreateNestedOneWithoutServidoresInput = {
    create?: XOR<ConstelacionCreateWithoutServidoresInput, ConstelacionUncheckedCreateWithoutServidoresInput>
    connectOrCreate?: ConstelacionCreateOrConnectWithoutServidoresInput
    connect?: ConstelacionWhereUniqueInput
  }

  export type SeccionCreateNestedManyWithoutServidorInput = {
    create?: XOR<SeccionCreateWithoutServidorInput, SeccionUncheckedCreateWithoutServidorInput> | SeccionCreateWithoutServidorInput[] | SeccionUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: SeccionCreateOrConnectWithoutServidorInput | SeccionCreateOrConnectWithoutServidorInput[]
    createMany?: SeccionCreateManyServidorInputEnvelope
    connect?: SeccionWhereUniqueInput | SeccionWhereUniqueInput[]
  }

  export type NoticiasConfigCreateNestedOneWithoutServidorInput = {
    create?: XOR<NoticiasConfigCreateWithoutServidorInput, NoticiasConfigUncheckedCreateWithoutServidorInput>
    connectOrCreate?: NoticiasConfigCreateOrConnectWithoutServidorInput
    connect?: NoticiasConfigWhereUniqueInput
  }

  export type FuenteAutomaticaCreateNestedManyWithoutServidorInput = {
    create?: XOR<FuenteAutomaticaCreateWithoutServidorInput, FuenteAutomaticaUncheckedCreateWithoutServidorInput> | FuenteAutomaticaCreateWithoutServidorInput[] | FuenteAutomaticaUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: FuenteAutomaticaCreateOrConnectWithoutServidorInput | FuenteAutomaticaCreateOrConnectWithoutServidorInput[]
    createMany?: FuenteAutomaticaCreateManyServidorInputEnvelope
    connect?: FuenteAutomaticaWhereUniqueInput | FuenteAutomaticaWhereUniqueInput[]
  }

  export type ManualArticleCreateNestedManyWithoutServidorInput = {
    create?: XOR<ManualArticleCreateWithoutServidorInput, ManualArticleUncheckedCreateWithoutServidorInput> | ManualArticleCreateWithoutServidorInput[] | ManualArticleUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ManualArticleCreateOrConnectWithoutServidorInput | ManualArticleCreateOrConnectWithoutServidorInput[]
    createMany?: ManualArticleCreateManyServidorInputEnvelope
    connect?: ManualArticleWhereUniqueInput | ManualArticleWhereUniqueInput[]
  }

  export type ClienteCreateNestedManyWithoutServidorInput = {
    create?: XOR<ClienteCreateWithoutServidorInput, ClienteUncheckedCreateWithoutServidorInput> | ClienteCreateWithoutServidorInput[] | ClienteUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutServidorInput | ClienteCreateOrConnectWithoutServidorInput[]
    createMany?: ClienteCreateManyServidorInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ProfesionalCreateNestedManyWithoutServidorInput = {
    create?: XOR<ProfesionalCreateWithoutServidorInput, ProfesionalUncheckedCreateWithoutServidorInput> | ProfesionalCreateWithoutServidorInput[] | ProfesionalUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutServidorInput | ProfesionalCreateOrConnectWithoutServidorInput[]
    createMany?: ProfesionalCreateManyServidorInputEnvelope
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
  }

  export type CasoCreateNestedManyWithoutServidorInput = {
    create?: XOR<CasoCreateWithoutServidorInput, CasoUncheckedCreateWithoutServidorInput> | CasoCreateWithoutServidorInput[] | CasoUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutServidorInput | CasoCreateOrConnectWithoutServidorInput[]
    createMany?: CasoCreateManyServidorInputEnvelope
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
  }

  export type SeccionUncheckedCreateNestedManyWithoutServidorInput = {
    create?: XOR<SeccionCreateWithoutServidorInput, SeccionUncheckedCreateWithoutServidorInput> | SeccionCreateWithoutServidorInput[] | SeccionUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: SeccionCreateOrConnectWithoutServidorInput | SeccionCreateOrConnectWithoutServidorInput[]
    createMany?: SeccionCreateManyServidorInputEnvelope
    connect?: SeccionWhereUniqueInput | SeccionWhereUniqueInput[]
  }

  export type NoticiasConfigUncheckedCreateNestedOneWithoutServidorInput = {
    create?: XOR<NoticiasConfigCreateWithoutServidorInput, NoticiasConfigUncheckedCreateWithoutServidorInput>
    connectOrCreate?: NoticiasConfigCreateOrConnectWithoutServidorInput
    connect?: NoticiasConfigWhereUniqueInput
  }

  export type FuenteAutomaticaUncheckedCreateNestedManyWithoutServidorInput = {
    create?: XOR<FuenteAutomaticaCreateWithoutServidorInput, FuenteAutomaticaUncheckedCreateWithoutServidorInput> | FuenteAutomaticaCreateWithoutServidorInput[] | FuenteAutomaticaUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: FuenteAutomaticaCreateOrConnectWithoutServidorInput | FuenteAutomaticaCreateOrConnectWithoutServidorInput[]
    createMany?: FuenteAutomaticaCreateManyServidorInputEnvelope
    connect?: FuenteAutomaticaWhereUniqueInput | FuenteAutomaticaWhereUniqueInput[]
  }

  export type ManualArticleUncheckedCreateNestedManyWithoutServidorInput = {
    create?: XOR<ManualArticleCreateWithoutServidorInput, ManualArticleUncheckedCreateWithoutServidorInput> | ManualArticleCreateWithoutServidorInput[] | ManualArticleUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ManualArticleCreateOrConnectWithoutServidorInput | ManualArticleCreateOrConnectWithoutServidorInput[]
    createMany?: ManualArticleCreateManyServidorInputEnvelope
    connect?: ManualArticleWhereUniqueInput | ManualArticleWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutServidorInput = {
    create?: XOR<ClienteCreateWithoutServidorInput, ClienteUncheckedCreateWithoutServidorInput> | ClienteCreateWithoutServidorInput[] | ClienteUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutServidorInput | ClienteCreateOrConnectWithoutServidorInput[]
    createMany?: ClienteCreateManyServidorInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ProfesionalUncheckedCreateNestedManyWithoutServidorInput = {
    create?: XOR<ProfesionalCreateWithoutServidorInput, ProfesionalUncheckedCreateWithoutServidorInput> | ProfesionalCreateWithoutServidorInput[] | ProfesionalUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutServidorInput | ProfesionalCreateOrConnectWithoutServidorInput[]
    createMany?: ProfesionalCreateManyServidorInputEnvelope
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
  }

  export type CasoUncheckedCreateNestedManyWithoutServidorInput = {
    create?: XOR<CasoCreateWithoutServidorInput, CasoUncheckedCreateWithoutServidorInput> | CasoCreateWithoutServidorInput[] | CasoUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutServidorInput | CasoCreateOrConnectWithoutServidorInput[]
    createMany?: CasoCreateManyServidorInputEnvelope
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
  }

  export type ConstelacionUpdateOneRequiredWithoutServidoresNestedInput = {
    create?: XOR<ConstelacionCreateWithoutServidoresInput, ConstelacionUncheckedCreateWithoutServidoresInput>
    connectOrCreate?: ConstelacionCreateOrConnectWithoutServidoresInput
    upsert?: ConstelacionUpsertWithoutServidoresInput
    connect?: ConstelacionWhereUniqueInput
    update?: XOR<XOR<ConstelacionUpdateToOneWithWhereWithoutServidoresInput, ConstelacionUpdateWithoutServidoresInput>, ConstelacionUncheckedUpdateWithoutServidoresInput>
  }

  export type SeccionUpdateManyWithoutServidorNestedInput = {
    create?: XOR<SeccionCreateWithoutServidorInput, SeccionUncheckedCreateWithoutServidorInput> | SeccionCreateWithoutServidorInput[] | SeccionUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: SeccionCreateOrConnectWithoutServidorInput | SeccionCreateOrConnectWithoutServidorInput[]
    upsert?: SeccionUpsertWithWhereUniqueWithoutServidorInput | SeccionUpsertWithWhereUniqueWithoutServidorInput[]
    createMany?: SeccionCreateManyServidorInputEnvelope
    set?: SeccionWhereUniqueInput | SeccionWhereUniqueInput[]
    disconnect?: SeccionWhereUniqueInput | SeccionWhereUniqueInput[]
    delete?: SeccionWhereUniqueInput | SeccionWhereUniqueInput[]
    connect?: SeccionWhereUniqueInput | SeccionWhereUniqueInput[]
    update?: SeccionUpdateWithWhereUniqueWithoutServidorInput | SeccionUpdateWithWhereUniqueWithoutServidorInput[]
    updateMany?: SeccionUpdateManyWithWhereWithoutServidorInput | SeccionUpdateManyWithWhereWithoutServidorInput[]
    deleteMany?: SeccionScalarWhereInput | SeccionScalarWhereInput[]
  }

  export type NoticiasConfigUpdateOneWithoutServidorNestedInput = {
    create?: XOR<NoticiasConfigCreateWithoutServidorInput, NoticiasConfigUncheckedCreateWithoutServidorInput>
    connectOrCreate?: NoticiasConfigCreateOrConnectWithoutServidorInput
    upsert?: NoticiasConfigUpsertWithoutServidorInput
    disconnect?: NoticiasConfigWhereInput | boolean
    delete?: NoticiasConfigWhereInput | boolean
    connect?: NoticiasConfigWhereUniqueInput
    update?: XOR<XOR<NoticiasConfigUpdateToOneWithWhereWithoutServidorInput, NoticiasConfigUpdateWithoutServidorInput>, NoticiasConfigUncheckedUpdateWithoutServidorInput>
  }

  export type FuenteAutomaticaUpdateManyWithoutServidorNestedInput = {
    create?: XOR<FuenteAutomaticaCreateWithoutServidorInput, FuenteAutomaticaUncheckedCreateWithoutServidorInput> | FuenteAutomaticaCreateWithoutServidorInput[] | FuenteAutomaticaUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: FuenteAutomaticaCreateOrConnectWithoutServidorInput | FuenteAutomaticaCreateOrConnectWithoutServidorInput[]
    upsert?: FuenteAutomaticaUpsertWithWhereUniqueWithoutServidorInput | FuenteAutomaticaUpsertWithWhereUniqueWithoutServidorInput[]
    createMany?: FuenteAutomaticaCreateManyServidorInputEnvelope
    set?: FuenteAutomaticaWhereUniqueInput | FuenteAutomaticaWhereUniqueInput[]
    disconnect?: FuenteAutomaticaWhereUniqueInput | FuenteAutomaticaWhereUniqueInput[]
    delete?: FuenteAutomaticaWhereUniqueInput | FuenteAutomaticaWhereUniqueInput[]
    connect?: FuenteAutomaticaWhereUniqueInput | FuenteAutomaticaWhereUniqueInput[]
    update?: FuenteAutomaticaUpdateWithWhereUniqueWithoutServidorInput | FuenteAutomaticaUpdateWithWhereUniqueWithoutServidorInput[]
    updateMany?: FuenteAutomaticaUpdateManyWithWhereWithoutServidorInput | FuenteAutomaticaUpdateManyWithWhereWithoutServidorInput[]
    deleteMany?: FuenteAutomaticaScalarWhereInput | FuenteAutomaticaScalarWhereInput[]
  }

  export type ManualArticleUpdateManyWithoutServidorNestedInput = {
    create?: XOR<ManualArticleCreateWithoutServidorInput, ManualArticleUncheckedCreateWithoutServidorInput> | ManualArticleCreateWithoutServidorInput[] | ManualArticleUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ManualArticleCreateOrConnectWithoutServidorInput | ManualArticleCreateOrConnectWithoutServidorInput[]
    upsert?: ManualArticleUpsertWithWhereUniqueWithoutServidorInput | ManualArticleUpsertWithWhereUniqueWithoutServidorInput[]
    createMany?: ManualArticleCreateManyServidorInputEnvelope
    set?: ManualArticleWhereUniqueInput | ManualArticleWhereUniqueInput[]
    disconnect?: ManualArticleWhereUniqueInput | ManualArticleWhereUniqueInput[]
    delete?: ManualArticleWhereUniqueInput | ManualArticleWhereUniqueInput[]
    connect?: ManualArticleWhereUniqueInput | ManualArticleWhereUniqueInput[]
    update?: ManualArticleUpdateWithWhereUniqueWithoutServidorInput | ManualArticleUpdateWithWhereUniqueWithoutServidorInput[]
    updateMany?: ManualArticleUpdateManyWithWhereWithoutServidorInput | ManualArticleUpdateManyWithWhereWithoutServidorInput[]
    deleteMany?: ManualArticleScalarWhereInput | ManualArticleScalarWhereInput[]
  }

  export type ClienteUpdateManyWithoutServidorNestedInput = {
    create?: XOR<ClienteCreateWithoutServidorInput, ClienteUncheckedCreateWithoutServidorInput> | ClienteCreateWithoutServidorInput[] | ClienteUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutServidorInput | ClienteCreateOrConnectWithoutServidorInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutServidorInput | ClienteUpsertWithWhereUniqueWithoutServidorInput[]
    createMany?: ClienteCreateManyServidorInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutServidorInput | ClienteUpdateWithWhereUniqueWithoutServidorInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutServidorInput | ClienteUpdateManyWithWhereWithoutServidorInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ProfesionalUpdateManyWithoutServidorNestedInput = {
    create?: XOR<ProfesionalCreateWithoutServidorInput, ProfesionalUncheckedCreateWithoutServidorInput> | ProfesionalCreateWithoutServidorInput[] | ProfesionalUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutServidorInput | ProfesionalCreateOrConnectWithoutServidorInput[]
    upsert?: ProfesionalUpsertWithWhereUniqueWithoutServidorInput | ProfesionalUpsertWithWhereUniqueWithoutServidorInput[]
    createMany?: ProfesionalCreateManyServidorInputEnvelope
    set?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    disconnect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    delete?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    update?: ProfesionalUpdateWithWhereUniqueWithoutServidorInput | ProfesionalUpdateWithWhereUniqueWithoutServidorInput[]
    updateMany?: ProfesionalUpdateManyWithWhereWithoutServidorInput | ProfesionalUpdateManyWithWhereWithoutServidorInput[]
    deleteMany?: ProfesionalScalarWhereInput | ProfesionalScalarWhereInput[]
  }

  export type CasoUpdateManyWithoutServidorNestedInput = {
    create?: XOR<CasoCreateWithoutServidorInput, CasoUncheckedCreateWithoutServidorInput> | CasoCreateWithoutServidorInput[] | CasoUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutServidorInput | CasoCreateOrConnectWithoutServidorInput[]
    upsert?: CasoUpsertWithWhereUniqueWithoutServidorInput | CasoUpsertWithWhereUniqueWithoutServidorInput[]
    createMany?: CasoCreateManyServidorInputEnvelope
    set?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    disconnect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    delete?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    update?: CasoUpdateWithWhereUniqueWithoutServidorInput | CasoUpdateWithWhereUniqueWithoutServidorInput[]
    updateMany?: CasoUpdateManyWithWhereWithoutServidorInput | CasoUpdateManyWithWhereWithoutServidorInput[]
    deleteMany?: CasoScalarWhereInput | CasoScalarWhereInput[]
  }

  export type SeccionUncheckedUpdateManyWithoutServidorNestedInput = {
    create?: XOR<SeccionCreateWithoutServidorInput, SeccionUncheckedCreateWithoutServidorInput> | SeccionCreateWithoutServidorInput[] | SeccionUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: SeccionCreateOrConnectWithoutServidorInput | SeccionCreateOrConnectWithoutServidorInput[]
    upsert?: SeccionUpsertWithWhereUniqueWithoutServidorInput | SeccionUpsertWithWhereUniqueWithoutServidorInput[]
    createMany?: SeccionCreateManyServidorInputEnvelope
    set?: SeccionWhereUniqueInput | SeccionWhereUniqueInput[]
    disconnect?: SeccionWhereUniqueInput | SeccionWhereUniqueInput[]
    delete?: SeccionWhereUniqueInput | SeccionWhereUniqueInput[]
    connect?: SeccionWhereUniqueInput | SeccionWhereUniqueInput[]
    update?: SeccionUpdateWithWhereUniqueWithoutServidorInput | SeccionUpdateWithWhereUniqueWithoutServidorInput[]
    updateMany?: SeccionUpdateManyWithWhereWithoutServidorInput | SeccionUpdateManyWithWhereWithoutServidorInput[]
    deleteMany?: SeccionScalarWhereInput | SeccionScalarWhereInput[]
  }

  export type NoticiasConfigUncheckedUpdateOneWithoutServidorNestedInput = {
    create?: XOR<NoticiasConfigCreateWithoutServidorInput, NoticiasConfigUncheckedCreateWithoutServidorInput>
    connectOrCreate?: NoticiasConfigCreateOrConnectWithoutServidorInput
    upsert?: NoticiasConfigUpsertWithoutServidorInput
    disconnect?: NoticiasConfigWhereInput | boolean
    delete?: NoticiasConfigWhereInput | boolean
    connect?: NoticiasConfigWhereUniqueInput
    update?: XOR<XOR<NoticiasConfigUpdateToOneWithWhereWithoutServidorInput, NoticiasConfigUpdateWithoutServidorInput>, NoticiasConfigUncheckedUpdateWithoutServidorInput>
  }

  export type FuenteAutomaticaUncheckedUpdateManyWithoutServidorNestedInput = {
    create?: XOR<FuenteAutomaticaCreateWithoutServidorInput, FuenteAutomaticaUncheckedCreateWithoutServidorInput> | FuenteAutomaticaCreateWithoutServidorInput[] | FuenteAutomaticaUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: FuenteAutomaticaCreateOrConnectWithoutServidorInput | FuenteAutomaticaCreateOrConnectWithoutServidorInput[]
    upsert?: FuenteAutomaticaUpsertWithWhereUniqueWithoutServidorInput | FuenteAutomaticaUpsertWithWhereUniqueWithoutServidorInput[]
    createMany?: FuenteAutomaticaCreateManyServidorInputEnvelope
    set?: FuenteAutomaticaWhereUniqueInput | FuenteAutomaticaWhereUniqueInput[]
    disconnect?: FuenteAutomaticaWhereUniqueInput | FuenteAutomaticaWhereUniqueInput[]
    delete?: FuenteAutomaticaWhereUniqueInput | FuenteAutomaticaWhereUniqueInput[]
    connect?: FuenteAutomaticaWhereUniqueInput | FuenteAutomaticaWhereUniqueInput[]
    update?: FuenteAutomaticaUpdateWithWhereUniqueWithoutServidorInput | FuenteAutomaticaUpdateWithWhereUniqueWithoutServidorInput[]
    updateMany?: FuenteAutomaticaUpdateManyWithWhereWithoutServidorInput | FuenteAutomaticaUpdateManyWithWhereWithoutServidorInput[]
    deleteMany?: FuenteAutomaticaScalarWhereInput | FuenteAutomaticaScalarWhereInput[]
  }

  export type ManualArticleUncheckedUpdateManyWithoutServidorNestedInput = {
    create?: XOR<ManualArticleCreateWithoutServidorInput, ManualArticleUncheckedCreateWithoutServidorInput> | ManualArticleCreateWithoutServidorInput[] | ManualArticleUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ManualArticleCreateOrConnectWithoutServidorInput | ManualArticleCreateOrConnectWithoutServidorInput[]
    upsert?: ManualArticleUpsertWithWhereUniqueWithoutServidorInput | ManualArticleUpsertWithWhereUniqueWithoutServidorInput[]
    createMany?: ManualArticleCreateManyServidorInputEnvelope
    set?: ManualArticleWhereUniqueInput | ManualArticleWhereUniqueInput[]
    disconnect?: ManualArticleWhereUniqueInput | ManualArticleWhereUniqueInput[]
    delete?: ManualArticleWhereUniqueInput | ManualArticleWhereUniqueInput[]
    connect?: ManualArticleWhereUniqueInput | ManualArticleWhereUniqueInput[]
    update?: ManualArticleUpdateWithWhereUniqueWithoutServidorInput | ManualArticleUpdateWithWhereUniqueWithoutServidorInput[]
    updateMany?: ManualArticleUpdateManyWithWhereWithoutServidorInput | ManualArticleUpdateManyWithWhereWithoutServidorInput[]
    deleteMany?: ManualArticleScalarWhereInput | ManualArticleScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutServidorNestedInput = {
    create?: XOR<ClienteCreateWithoutServidorInput, ClienteUncheckedCreateWithoutServidorInput> | ClienteCreateWithoutServidorInput[] | ClienteUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutServidorInput | ClienteCreateOrConnectWithoutServidorInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutServidorInput | ClienteUpsertWithWhereUniqueWithoutServidorInput[]
    createMany?: ClienteCreateManyServidorInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutServidorInput | ClienteUpdateWithWhereUniqueWithoutServidorInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutServidorInput | ClienteUpdateManyWithWhereWithoutServidorInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ProfesionalUncheckedUpdateManyWithoutServidorNestedInput = {
    create?: XOR<ProfesionalCreateWithoutServidorInput, ProfesionalUncheckedCreateWithoutServidorInput> | ProfesionalCreateWithoutServidorInput[] | ProfesionalUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutServidorInput | ProfesionalCreateOrConnectWithoutServidorInput[]
    upsert?: ProfesionalUpsertWithWhereUniqueWithoutServidorInput | ProfesionalUpsertWithWhereUniqueWithoutServidorInput[]
    createMany?: ProfesionalCreateManyServidorInputEnvelope
    set?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    disconnect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    delete?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    update?: ProfesionalUpdateWithWhereUniqueWithoutServidorInput | ProfesionalUpdateWithWhereUniqueWithoutServidorInput[]
    updateMany?: ProfesionalUpdateManyWithWhereWithoutServidorInput | ProfesionalUpdateManyWithWhereWithoutServidorInput[]
    deleteMany?: ProfesionalScalarWhereInput | ProfesionalScalarWhereInput[]
  }

  export type CasoUncheckedUpdateManyWithoutServidorNestedInput = {
    create?: XOR<CasoCreateWithoutServidorInput, CasoUncheckedCreateWithoutServidorInput> | CasoCreateWithoutServidorInput[] | CasoUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutServidorInput | CasoCreateOrConnectWithoutServidorInput[]
    upsert?: CasoUpsertWithWhereUniqueWithoutServidorInput | CasoUpsertWithWhereUniqueWithoutServidorInput[]
    createMany?: CasoCreateManyServidorInputEnvelope
    set?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    disconnect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    delete?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    update?: CasoUpdateWithWhereUniqueWithoutServidorInput | CasoUpdateWithWhereUniqueWithoutServidorInput[]
    updateMany?: CasoUpdateManyWithWhereWithoutServidorInput | CasoUpdateManyWithWhereWithoutServidorInput[]
    deleteMany?: CasoScalarWhereInput | CasoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutClientesInput = {
    create?: XOR<UsuarioCreateWithoutClientesInput, UsuarioUncheckedCreateWithoutClientesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutClientesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ServidorUnitarioCreateNestedOneWithoutClientesInput = {
    create?: XOR<ServidorUnitarioCreateWithoutClientesInput, ServidorUnitarioUncheckedCreateWithoutClientesInput>
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutClientesInput
    connect?: ServidorUnitarioWhereUniqueInput
  }

  export type CasoCreateNestedManyWithoutClienteInput = {
    create?: XOR<CasoCreateWithoutClienteInput, CasoUncheckedCreateWithoutClienteInput> | CasoCreateWithoutClienteInput[] | CasoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutClienteInput | CasoCreateOrConnectWithoutClienteInput[]
    createMany?: CasoCreateManyClienteInputEnvelope
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
  }

  export type ArchivoCreateNestedManyWithoutClienteInput = {
    create?: XOR<ArchivoCreateWithoutClienteInput, ArchivoUncheckedCreateWithoutClienteInput> | ArchivoCreateWithoutClienteInput[] | ArchivoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutClienteInput | ArchivoCreateOrConnectWithoutClienteInput[]
    createMany?: ArchivoCreateManyClienteInputEnvelope
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
  }

  export type ReporteCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReporteCreateWithoutClienteInput, ReporteUncheckedCreateWithoutClienteInput> | ReporteCreateWithoutClienteInput[] | ReporteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutClienteInput | ReporteCreateOrConnectWithoutClienteInput[]
    createMany?: ReporteCreateManyClienteInputEnvelope
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
  }

  export type CasoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<CasoCreateWithoutClienteInput, CasoUncheckedCreateWithoutClienteInput> | CasoCreateWithoutClienteInput[] | CasoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutClienteInput | CasoCreateOrConnectWithoutClienteInput[]
    createMany?: CasoCreateManyClienteInputEnvelope
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
  }

  export type ArchivoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ArchivoCreateWithoutClienteInput, ArchivoUncheckedCreateWithoutClienteInput> | ArchivoCreateWithoutClienteInput[] | ArchivoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutClienteInput | ArchivoCreateOrConnectWithoutClienteInput[]
    createMany?: ArchivoCreateManyClienteInputEnvelope
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
  }

  export type ReporteUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReporteCreateWithoutClienteInput, ReporteUncheckedCreateWithoutClienteInput> | ReporteCreateWithoutClienteInput[] | ReporteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutClienteInput | ReporteCreateOrConnectWithoutClienteInput[]
    createMany?: ReporteCreateManyClienteInputEnvelope
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<UsuarioCreateWithoutClientesInput, UsuarioUncheckedCreateWithoutClientesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutClientesInput
    upsert?: UsuarioUpsertWithoutClientesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutClientesInput, UsuarioUpdateWithoutClientesInput>, UsuarioUncheckedUpdateWithoutClientesInput>
  }

  export type ServidorUnitarioUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<ServidorUnitarioCreateWithoutClientesInput, ServidorUnitarioUncheckedCreateWithoutClientesInput>
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutClientesInput
    upsert?: ServidorUnitarioUpsertWithoutClientesInput
    connect?: ServidorUnitarioWhereUniqueInput
    update?: XOR<XOR<ServidorUnitarioUpdateToOneWithWhereWithoutClientesInput, ServidorUnitarioUpdateWithoutClientesInput>, ServidorUnitarioUncheckedUpdateWithoutClientesInput>
  }

  export type CasoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CasoCreateWithoutClienteInput, CasoUncheckedCreateWithoutClienteInput> | CasoCreateWithoutClienteInput[] | CasoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutClienteInput | CasoCreateOrConnectWithoutClienteInput[]
    upsert?: CasoUpsertWithWhereUniqueWithoutClienteInput | CasoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CasoCreateManyClienteInputEnvelope
    set?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    disconnect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    delete?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    update?: CasoUpdateWithWhereUniqueWithoutClienteInput | CasoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CasoUpdateManyWithWhereWithoutClienteInput | CasoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CasoScalarWhereInput | CasoScalarWhereInput[]
  }

  export type ArchivoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ArchivoCreateWithoutClienteInput, ArchivoUncheckedCreateWithoutClienteInput> | ArchivoCreateWithoutClienteInput[] | ArchivoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutClienteInput | ArchivoCreateOrConnectWithoutClienteInput[]
    upsert?: ArchivoUpsertWithWhereUniqueWithoutClienteInput | ArchivoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ArchivoCreateManyClienteInputEnvelope
    set?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    disconnect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    delete?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    update?: ArchivoUpdateWithWhereUniqueWithoutClienteInput | ArchivoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ArchivoUpdateManyWithWhereWithoutClienteInput | ArchivoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ArchivoScalarWhereInput | ArchivoScalarWhereInput[]
  }

  export type ReporteUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ReporteCreateWithoutClienteInput, ReporteUncheckedCreateWithoutClienteInput> | ReporteCreateWithoutClienteInput[] | ReporteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutClienteInput | ReporteCreateOrConnectWithoutClienteInput[]
    upsert?: ReporteUpsertWithWhereUniqueWithoutClienteInput | ReporteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ReporteCreateManyClienteInputEnvelope
    set?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    disconnect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    delete?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    update?: ReporteUpdateWithWhereUniqueWithoutClienteInput | ReporteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ReporteUpdateManyWithWhereWithoutClienteInput | ReporteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
  }

  export type CasoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CasoCreateWithoutClienteInput, CasoUncheckedCreateWithoutClienteInput> | CasoCreateWithoutClienteInput[] | CasoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutClienteInput | CasoCreateOrConnectWithoutClienteInput[]
    upsert?: CasoUpsertWithWhereUniqueWithoutClienteInput | CasoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CasoCreateManyClienteInputEnvelope
    set?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    disconnect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    delete?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    update?: CasoUpdateWithWhereUniqueWithoutClienteInput | CasoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CasoUpdateManyWithWhereWithoutClienteInput | CasoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CasoScalarWhereInput | CasoScalarWhereInput[]
  }

  export type ArchivoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ArchivoCreateWithoutClienteInput, ArchivoUncheckedCreateWithoutClienteInput> | ArchivoCreateWithoutClienteInput[] | ArchivoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutClienteInput | ArchivoCreateOrConnectWithoutClienteInput[]
    upsert?: ArchivoUpsertWithWhereUniqueWithoutClienteInput | ArchivoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ArchivoCreateManyClienteInputEnvelope
    set?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    disconnect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    delete?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    update?: ArchivoUpdateWithWhereUniqueWithoutClienteInput | ArchivoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ArchivoUpdateManyWithWhereWithoutClienteInput | ArchivoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ArchivoScalarWhereInput | ArchivoScalarWhereInput[]
  }

  export type ReporteUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ReporteCreateWithoutClienteInput, ReporteUncheckedCreateWithoutClienteInput> | ReporteCreateWithoutClienteInput[] | ReporteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutClienteInput | ReporteCreateOrConnectWithoutClienteInput[]
    upsert?: ReporteUpsertWithWhereUniqueWithoutClienteInput | ReporteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ReporteCreateManyClienteInputEnvelope
    set?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    disconnect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    delete?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    update?: ReporteUpdateWithWhereUniqueWithoutClienteInput | ReporteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ReporteUpdateManyWithWhereWithoutClienteInput | ReporteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutProfesionalesInput = {
    create?: XOR<UsuarioCreateWithoutProfesionalesInput, UsuarioUncheckedCreateWithoutProfesionalesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfesionalesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ServidorUnitarioCreateNestedOneWithoutProfesionalesInput = {
    create?: XOR<ServidorUnitarioCreateWithoutProfesionalesInput, ServidorUnitarioUncheckedCreateWithoutProfesionalesInput>
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutProfesionalesInput
    connect?: ServidorUnitarioWhereUniqueInput
  }

  export type CasoCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<CasoCreateWithoutProfesionalInput, CasoUncheckedCreateWithoutProfesionalInput> | CasoCreateWithoutProfesionalInput[] | CasoUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutProfesionalInput | CasoCreateOrConnectWithoutProfesionalInput[]
    createMany?: CasoCreateManyProfesionalInputEnvelope
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
  }

  export type ArchivoCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<ArchivoCreateWithoutProfesionalInput, ArchivoUncheckedCreateWithoutProfesionalInput> | ArchivoCreateWithoutProfesionalInput[] | ArchivoUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutProfesionalInput | ArchivoCreateOrConnectWithoutProfesionalInput[]
    createMany?: ArchivoCreateManyProfesionalInputEnvelope
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
  }

  export type CasoUncheckedCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<CasoCreateWithoutProfesionalInput, CasoUncheckedCreateWithoutProfesionalInput> | CasoCreateWithoutProfesionalInput[] | CasoUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutProfesionalInput | CasoCreateOrConnectWithoutProfesionalInput[]
    createMany?: CasoCreateManyProfesionalInputEnvelope
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
  }

  export type ArchivoUncheckedCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<ArchivoCreateWithoutProfesionalInput, ArchivoUncheckedCreateWithoutProfesionalInput> | ArchivoCreateWithoutProfesionalInput[] | ArchivoUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutProfesionalInput | ArchivoCreateOrConnectWithoutProfesionalInput[]
    createMany?: ArchivoCreateManyProfesionalInputEnvelope
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutProfesionalesNestedInput = {
    create?: XOR<UsuarioCreateWithoutProfesionalesInput, UsuarioUncheckedCreateWithoutProfesionalesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfesionalesInput
    upsert?: UsuarioUpsertWithoutProfesionalesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProfesionalesInput, UsuarioUpdateWithoutProfesionalesInput>, UsuarioUncheckedUpdateWithoutProfesionalesInput>
  }

  export type ServidorUnitarioUpdateOneRequiredWithoutProfesionalesNestedInput = {
    create?: XOR<ServidorUnitarioCreateWithoutProfesionalesInput, ServidorUnitarioUncheckedCreateWithoutProfesionalesInput>
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutProfesionalesInput
    upsert?: ServidorUnitarioUpsertWithoutProfesionalesInput
    connect?: ServidorUnitarioWhereUniqueInput
    update?: XOR<XOR<ServidorUnitarioUpdateToOneWithWhereWithoutProfesionalesInput, ServidorUnitarioUpdateWithoutProfesionalesInput>, ServidorUnitarioUncheckedUpdateWithoutProfesionalesInput>
  }

  export type CasoUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<CasoCreateWithoutProfesionalInput, CasoUncheckedCreateWithoutProfesionalInput> | CasoCreateWithoutProfesionalInput[] | CasoUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutProfesionalInput | CasoCreateOrConnectWithoutProfesionalInput[]
    upsert?: CasoUpsertWithWhereUniqueWithoutProfesionalInput | CasoUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: CasoCreateManyProfesionalInputEnvelope
    set?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    disconnect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    delete?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    update?: CasoUpdateWithWhereUniqueWithoutProfesionalInput | CasoUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: CasoUpdateManyWithWhereWithoutProfesionalInput | CasoUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: CasoScalarWhereInput | CasoScalarWhereInput[]
  }

  export type ArchivoUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<ArchivoCreateWithoutProfesionalInput, ArchivoUncheckedCreateWithoutProfesionalInput> | ArchivoCreateWithoutProfesionalInput[] | ArchivoUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutProfesionalInput | ArchivoCreateOrConnectWithoutProfesionalInput[]
    upsert?: ArchivoUpsertWithWhereUniqueWithoutProfesionalInput | ArchivoUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: ArchivoCreateManyProfesionalInputEnvelope
    set?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    disconnect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    delete?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    update?: ArchivoUpdateWithWhereUniqueWithoutProfesionalInput | ArchivoUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: ArchivoUpdateManyWithWhereWithoutProfesionalInput | ArchivoUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: ArchivoScalarWhereInput | ArchivoScalarWhereInput[]
  }

  export type CasoUncheckedUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<CasoCreateWithoutProfesionalInput, CasoUncheckedCreateWithoutProfesionalInput> | CasoCreateWithoutProfesionalInput[] | CasoUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutProfesionalInput | CasoCreateOrConnectWithoutProfesionalInput[]
    upsert?: CasoUpsertWithWhereUniqueWithoutProfesionalInput | CasoUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: CasoCreateManyProfesionalInputEnvelope
    set?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    disconnect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    delete?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    update?: CasoUpdateWithWhereUniqueWithoutProfesionalInput | CasoUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: CasoUpdateManyWithWhereWithoutProfesionalInput | CasoUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: CasoScalarWhereInput | CasoScalarWhereInput[]
  }

  export type ArchivoUncheckedUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<ArchivoCreateWithoutProfesionalInput, ArchivoUncheckedCreateWithoutProfesionalInput> | ArchivoCreateWithoutProfesionalInput[] | ArchivoUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutProfesionalInput | ArchivoCreateOrConnectWithoutProfesionalInput[]
    upsert?: ArchivoUpsertWithWhereUniqueWithoutProfesionalInput | ArchivoUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: ArchivoCreateManyProfesionalInputEnvelope
    set?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    disconnect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    delete?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    update?: ArchivoUpdateWithWhereUniqueWithoutProfesionalInput | ArchivoUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: ArchivoUpdateManyWithWhereWithoutProfesionalInput | ArchivoUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: ArchivoScalarWhereInput | ArchivoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutCasosInput = {
    create?: XOR<ClienteCreateWithoutCasosInput, ClienteUncheckedCreateWithoutCasosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutCasosInput
    connect?: ClienteWhereUniqueInput
  }

  export type ProfesionalCreateNestedOneWithoutCasosInput = {
    create?: XOR<ProfesionalCreateWithoutCasosInput, ProfesionalUncheckedCreateWithoutCasosInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutCasosInput
    connect?: ProfesionalWhereUniqueInput
  }

  export type ServidorUnitarioCreateNestedOneWithoutCasosInput = {
    create?: XOR<ServidorUnitarioCreateWithoutCasosInput, ServidorUnitarioUncheckedCreateWithoutCasosInput>
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutCasosInput
    connect?: ServidorUnitarioWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutCasoInput = {
    create?: XOR<ChatCreateWithoutCasoInput, ChatUncheckedCreateWithoutCasoInput>
    connectOrCreate?: ChatCreateOrConnectWithoutCasoInput
    connect?: ChatWhereUniqueInput
  }

  export type ArchivoCreateNestedManyWithoutCasoInput = {
    create?: XOR<ArchivoCreateWithoutCasoInput, ArchivoUncheckedCreateWithoutCasoInput> | ArchivoCreateWithoutCasoInput[] | ArchivoUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutCasoInput | ArchivoCreateOrConnectWithoutCasoInput[]
    createMany?: ArchivoCreateManyCasoInputEnvelope
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
  }

  export type ReporteCreateNestedManyWithoutCasoInput = {
    create?: XOR<ReporteCreateWithoutCasoInput, ReporteUncheckedCreateWithoutCasoInput> | ReporteCreateWithoutCasoInput[] | ReporteUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutCasoInput | ReporteCreateOrConnectWithoutCasoInput[]
    createMany?: ReporteCreateManyCasoInputEnvelope
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedOneWithoutCasoInput = {
    create?: XOR<ChatCreateWithoutCasoInput, ChatUncheckedCreateWithoutCasoInput>
    connectOrCreate?: ChatCreateOrConnectWithoutCasoInput
    connect?: ChatWhereUniqueInput
  }

  export type ArchivoUncheckedCreateNestedManyWithoutCasoInput = {
    create?: XOR<ArchivoCreateWithoutCasoInput, ArchivoUncheckedCreateWithoutCasoInput> | ArchivoCreateWithoutCasoInput[] | ArchivoUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutCasoInput | ArchivoCreateOrConnectWithoutCasoInput[]
    createMany?: ArchivoCreateManyCasoInputEnvelope
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
  }

  export type ReporteUncheckedCreateNestedManyWithoutCasoInput = {
    create?: XOR<ReporteCreateWithoutCasoInput, ReporteUncheckedCreateWithoutCasoInput> | ReporteCreateWithoutCasoInput[] | ReporteUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutCasoInput | ReporteCreateOrConnectWithoutCasoInput[]
    createMany?: ReporteCreateManyCasoInputEnvelope
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
  }

  export type EnumCasoStatusFieldUpdateOperationsInput = {
    set?: $Enums.CasoStatus
  }

  export type ClienteUpdateOneRequiredWithoutCasosNestedInput = {
    create?: XOR<ClienteCreateWithoutCasosInput, ClienteUncheckedCreateWithoutCasosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutCasosInput
    upsert?: ClienteUpsertWithoutCasosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutCasosInput, ClienteUpdateWithoutCasosInput>, ClienteUncheckedUpdateWithoutCasosInput>
  }

  export type ProfesionalUpdateOneRequiredWithoutCasosNestedInput = {
    create?: XOR<ProfesionalCreateWithoutCasosInput, ProfesionalUncheckedCreateWithoutCasosInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutCasosInput
    upsert?: ProfesionalUpsertWithoutCasosInput
    connect?: ProfesionalWhereUniqueInput
    update?: XOR<XOR<ProfesionalUpdateToOneWithWhereWithoutCasosInput, ProfesionalUpdateWithoutCasosInput>, ProfesionalUncheckedUpdateWithoutCasosInput>
  }

  export type ServidorUnitarioUpdateOneRequiredWithoutCasosNestedInput = {
    create?: XOR<ServidorUnitarioCreateWithoutCasosInput, ServidorUnitarioUncheckedCreateWithoutCasosInput>
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutCasosInput
    upsert?: ServidorUnitarioUpsertWithoutCasosInput
    connect?: ServidorUnitarioWhereUniqueInput
    update?: XOR<XOR<ServidorUnitarioUpdateToOneWithWhereWithoutCasosInput, ServidorUnitarioUpdateWithoutCasosInput>, ServidorUnitarioUncheckedUpdateWithoutCasosInput>
  }

  export type ChatUpdateOneWithoutCasoNestedInput = {
    create?: XOR<ChatCreateWithoutCasoInput, ChatUncheckedCreateWithoutCasoInput>
    connectOrCreate?: ChatCreateOrConnectWithoutCasoInput
    upsert?: ChatUpsertWithoutCasoInput
    disconnect?: ChatWhereInput | boolean
    delete?: ChatWhereInput | boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutCasoInput, ChatUpdateWithoutCasoInput>, ChatUncheckedUpdateWithoutCasoInput>
  }

  export type ArchivoUpdateManyWithoutCasoNestedInput = {
    create?: XOR<ArchivoCreateWithoutCasoInput, ArchivoUncheckedCreateWithoutCasoInput> | ArchivoCreateWithoutCasoInput[] | ArchivoUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutCasoInput | ArchivoCreateOrConnectWithoutCasoInput[]
    upsert?: ArchivoUpsertWithWhereUniqueWithoutCasoInput | ArchivoUpsertWithWhereUniqueWithoutCasoInput[]
    createMany?: ArchivoCreateManyCasoInputEnvelope
    set?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    disconnect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    delete?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    update?: ArchivoUpdateWithWhereUniqueWithoutCasoInput | ArchivoUpdateWithWhereUniqueWithoutCasoInput[]
    updateMany?: ArchivoUpdateManyWithWhereWithoutCasoInput | ArchivoUpdateManyWithWhereWithoutCasoInput[]
    deleteMany?: ArchivoScalarWhereInput | ArchivoScalarWhereInput[]
  }

  export type ReporteUpdateManyWithoutCasoNestedInput = {
    create?: XOR<ReporteCreateWithoutCasoInput, ReporteUncheckedCreateWithoutCasoInput> | ReporteCreateWithoutCasoInput[] | ReporteUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutCasoInput | ReporteCreateOrConnectWithoutCasoInput[]
    upsert?: ReporteUpsertWithWhereUniqueWithoutCasoInput | ReporteUpsertWithWhereUniqueWithoutCasoInput[]
    createMany?: ReporteCreateManyCasoInputEnvelope
    set?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    disconnect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    delete?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    update?: ReporteUpdateWithWhereUniqueWithoutCasoInput | ReporteUpdateWithWhereUniqueWithoutCasoInput[]
    updateMany?: ReporteUpdateManyWithWhereWithoutCasoInput | ReporteUpdateManyWithWhereWithoutCasoInput[]
    deleteMany?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
  }

  export type ChatUncheckedUpdateOneWithoutCasoNestedInput = {
    create?: XOR<ChatCreateWithoutCasoInput, ChatUncheckedCreateWithoutCasoInput>
    connectOrCreate?: ChatCreateOrConnectWithoutCasoInput
    upsert?: ChatUpsertWithoutCasoInput
    disconnect?: ChatWhereInput | boolean
    delete?: ChatWhereInput | boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutCasoInput, ChatUpdateWithoutCasoInput>, ChatUncheckedUpdateWithoutCasoInput>
  }

  export type ArchivoUncheckedUpdateManyWithoutCasoNestedInput = {
    create?: XOR<ArchivoCreateWithoutCasoInput, ArchivoUncheckedCreateWithoutCasoInput> | ArchivoCreateWithoutCasoInput[] | ArchivoUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutCasoInput | ArchivoCreateOrConnectWithoutCasoInput[]
    upsert?: ArchivoUpsertWithWhereUniqueWithoutCasoInput | ArchivoUpsertWithWhereUniqueWithoutCasoInput[]
    createMany?: ArchivoCreateManyCasoInputEnvelope
    set?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    disconnect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    delete?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    update?: ArchivoUpdateWithWhereUniqueWithoutCasoInput | ArchivoUpdateWithWhereUniqueWithoutCasoInput[]
    updateMany?: ArchivoUpdateManyWithWhereWithoutCasoInput | ArchivoUpdateManyWithWhereWithoutCasoInput[]
    deleteMany?: ArchivoScalarWhereInput | ArchivoScalarWhereInput[]
  }

  export type ReporteUncheckedUpdateManyWithoutCasoNestedInput = {
    create?: XOR<ReporteCreateWithoutCasoInput, ReporteUncheckedCreateWithoutCasoInput> | ReporteCreateWithoutCasoInput[] | ReporteUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutCasoInput | ReporteCreateOrConnectWithoutCasoInput[]
    upsert?: ReporteUpsertWithWhereUniqueWithoutCasoInput | ReporteUpsertWithWhereUniqueWithoutCasoInput[]
    createMany?: ReporteCreateManyCasoInputEnvelope
    set?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    disconnect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    delete?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    update?: ReporteUpdateWithWhereUniqueWithoutCasoInput | ReporteUpdateWithWhereUniqueWithoutCasoInput[]
    updateMany?: ReporteUpdateManyWithWhereWithoutCasoInput | ReporteUpdateManyWithWhereWithoutCasoInput[]
    deleteMany?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
  }

  export type CasoCreateNestedOneWithoutChatInput = {
    create?: XOR<CasoCreateWithoutChatInput, CasoUncheckedCreateWithoutChatInput>
    connectOrCreate?: CasoCreateOrConnectWithoutChatInput
    connect?: CasoWhereUniqueInput
  }

  export type MensajeCreateNestedManyWithoutChatInput = {
    create?: XOR<MensajeCreateWithoutChatInput, MensajeUncheckedCreateWithoutChatInput> | MensajeCreateWithoutChatInput[] | MensajeUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutChatInput | MensajeCreateOrConnectWithoutChatInput[]
    createMany?: MensajeCreateManyChatInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type MensajeUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MensajeCreateWithoutChatInput, MensajeUncheckedCreateWithoutChatInput> | MensajeCreateWithoutChatInput[] | MensajeUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutChatInput | MensajeCreateOrConnectWithoutChatInput[]
    createMany?: MensajeCreateManyChatInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type CasoUpdateOneRequiredWithoutChatNestedInput = {
    create?: XOR<CasoCreateWithoutChatInput, CasoUncheckedCreateWithoutChatInput>
    connectOrCreate?: CasoCreateOrConnectWithoutChatInput
    upsert?: CasoUpsertWithoutChatInput
    connect?: CasoWhereUniqueInput
    update?: XOR<XOR<CasoUpdateToOneWithWhereWithoutChatInput, CasoUpdateWithoutChatInput>, CasoUncheckedUpdateWithoutChatInput>
  }

  export type MensajeUpdateManyWithoutChatNestedInput = {
    create?: XOR<MensajeCreateWithoutChatInput, MensajeUncheckedCreateWithoutChatInput> | MensajeCreateWithoutChatInput[] | MensajeUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutChatInput | MensajeCreateOrConnectWithoutChatInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutChatInput | MensajeUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MensajeCreateManyChatInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutChatInput | MensajeUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutChatInput | MensajeUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type MensajeUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MensajeCreateWithoutChatInput, MensajeUncheckedCreateWithoutChatInput> | MensajeCreateWithoutChatInput[] | MensajeUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutChatInput | MensajeCreateOrConnectWithoutChatInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutChatInput | MensajeUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MensajeCreateManyChatInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutChatInput | MensajeUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutChatInput | MensajeUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutMensajesInput = {
    create?: XOR<ChatCreateWithoutMensajesInput, ChatUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMensajesInput
    connect?: ChatWhereUniqueInput
  }

  export type EnumRemitenteFieldUpdateOperationsInput = {
    set?: $Enums.Remitente
  }

  export type ChatUpdateOneRequiredWithoutMensajesNestedInput = {
    create?: XOR<ChatCreateWithoutMensajesInput, ChatUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMensajesInput
    upsert?: ChatUpsertWithoutMensajesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMensajesInput, ChatUpdateWithoutMensajesInput>, ChatUncheckedUpdateWithoutMensajesInput>
  }

  export type ServidorUnitarioCreateNestedOneWithoutNoticiasConfigInput = {
    create?: XOR<ServidorUnitarioCreateWithoutNoticiasConfigInput, ServidorUnitarioUncheckedCreateWithoutNoticiasConfigInput>
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutNoticiasConfigInput
    connect?: ServidorUnitarioWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServidorUnitarioUpdateOneRequiredWithoutNoticiasConfigNestedInput = {
    create?: XOR<ServidorUnitarioCreateWithoutNoticiasConfigInput, ServidorUnitarioUncheckedCreateWithoutNoticiasConfigInput>
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutNoticiasConfigInput
    upsert?: ServidorUnitarioUpsertWithoutNoticiasConfigInput
    connect?: ServidorUnitarioWhereUniqueInput
    update?: XOR<XOR<ServidorUnitarioUpdateToOneWithWhereWithoutNoticiasConfigInput, ServidorUnitarioUpdateWithoutNoticiasConfigInput>, ServidorUnitarioUncheckedUpdateWithoutNoticiasConfigInput>
  }

  export type ServidorUnitarioCreateNestedOneWithoutFuentesAutomaticasInput = {
    create?: XOR<ServidorUnitarioCreateWithoutFuentesAutomaticasInput, ServidorUnitarioUncheckedCreateWithoutFuentesAutomaticasInput>
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutFuentesAutomaticasInput
    connect?: ServidorUnitarioWhereUniqueInput
  }

  export type ServidorUnitarioUpdateOneRequiredWithoutFuentesAutomaticasNestedInput = {
    create?: XOR<ServidorUnitarioCreateWithoutFuentesAutomaticasInput, ServidorUnitarioUncheckedCreateWithoutFuentesAutomaticasInput>
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutFuentesAutomaticasInput
    upsert?: ServidorUnitarioUpsertWithoutFuentesAutomaticasInput
    connect?: ServidorUnitarioWhereUniqueInput
    update?: XOR<XOR<ServidorUnitarioUpdateToOneWithWhereWithoutFuentesAutomaticasInput, ServidorUnitarioUpdateWithoutFuentesAutomaticasInput>, ServidorUnitarioUncheckedUpdateWithoutFuentesAutomaticasInput>
  }

  export type ServidorUnitarioCreateNestedOneWithoutManualArticlesInput = {
    create?: XOR<ServidorUnitarioCreateWithoutManualArticlesInput, ServidorUnitarioUncheckedCreateWithoutManualArticlesInput>
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutManualArticlesInput
    connect?: ServidorUnitarioWhereUniqueInput
  }

  export type ServidorUnitarioUpdateOneRequiredWithoutManualArticlesNestedInput = {
    create?: XOR<ServidorUnitarioCreateWithoutManualArticlesInput, ServidorUnitarioUncheckedCreateWithoutManualArticlesInput>
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutManualArticlesInput
    upsert?: ServidorUnitarioUpsertWithoutManualArticlesInput
    connect?: ServidorUnitarioWhereUniqueInput
    update?: XOR<XOR<ServidorUnitarioUpdateToOneWithWhereWithoutManualArticlesInput, ServidorUnitarioUpdateWithoutManualArticlesInput>, ServidorUnitarioUncheckedUpdateWithoutManualArticlesInput>
  }

  export type CasoCreateNestedOneWithoutArchivosInput = {
    create?: XOR<CasoCreateWithoutArchivosInput, CasoUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: CasoCreateOrConnectWithoutArchivosInput
    connect?: CasoWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutArchivosInput = {
    create?: XOR<ClienteCreateWithoutArchivosInput, ClienteUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutArchivosInput
    connect?: ClienteWhereUniqueInput
  }

  export type ProfesionalCreateNestedOneWithoutArchivosInput = {
    create?: XOR<ProfesionalCreateWithoutArchivosInput, ProfesionalUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutArchivosInput
    connect?: ProfesionalWhereUniqueInput
  }

  export type CasoUpdateOneRequiredWithoutArchivosNestedInput = {
    create?: XOR<CasoCreateWithoutArchivosInput, CasoUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: CasoCreateOrConnectWithoutArchivosInput
    upsert?: CasoUpsertWithoutArchivosInput
    connect?: CasoWhereUniqueInput
    update?: XOR<XOR<CasoUpdateToOneWithWhereWithoutArchivosInput, CasoUpdateWithoutArchivosInput>, CasoUncheckedUpdateWithoutArchivosInput>
  }

  export type ClienteUpdateOneWithoutArchivosNestedInput = {
    create?: XOR<ClienteCreateWithoutArchivosInput, ClienteUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutArchivosInput
    upsert?: ClienteUpsertWithoutArchivosInput
    disconnect?: ClienteWhereInput | boolean
    delete?: ClienteWhereInput | boolean
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutArchivosInput, ClienteUpdateWithoutArchivosInput>, ClienteUncheckedUpdateWithoutArchivosInput>
  }

  export type ProfesionalUpdateOneWithoutArchivosNestedInput = {
    create?: XOR<ProfesionalCreateWithoutArchivosInput, ProfesionalUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutArchivosInput
    upsert?: ProfesionalUpsertWithoutArchivosInput
    disconnect?: ProfesionalWhereInput | boolean
    delete?: ProfesionalWhereInput | boolean
    connect?: ProfesionalWhereUniqueInput
    update?: XOR<XOR<ProfesionalUpdateToOneWithWhereWithoutArchivosInput, ProfesionalUpdateWithoutArchivosInput>, ProfesionalUncheckedUpdateWithoutArchivosInput>
  }

  export type CasoCreateNestedOneWithoutReportesInput = {
    create?: XOR<CasoCreateWithoutReportesInput, CasoUncheckedCreateWithoutReportesInput>
    connectOrCreate?: CasoCreateOrConnectWithoutReportesInput
    connect?: CasoWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutReportesInput = {
    create?: XOR<ClienteCreateWithoutReportesInput, ClienteUncheckedCreateWithoutReportesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutReportesInput
    connect?: ClienteWhereUniqueInput
  }

  export type CasoUpdateOneRequiredWithoutReportesNestedInput = {
    create?: XOR<CasoCreateWithoutReportesInput, CasoUncheckedCreateWithoutReportesInput>
    connectOrCreate?: CasoCreateOrConnectWithoutReportesInput
    upsert?: CasoUpsertWithoutReportesInput
    connect?: CasoWhereUniqueInput
    update?: XOR<XOR<CasoUpdateToOneWithWhereWithoutReportesInput, CasoUpdateWithoutReportesInput>, CasoUncheckedUpdateWithoutReportesInput>
  }

  export type ClienteUpdateOneRequiredWithoutReportesNestedInput = {
    create?: XOR<ClienteCreateWithoutReportesInput, ClienteUncheckedCreateWithoutReportesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutReportesInput
    upsert?: ClienteUpsertWithoutReportesInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutReportesInput, ClienteUpdateWithoutReportesInput>, ClienteUncheckedUpdateWithoutReportesInput>
  }

  export type ServidorUnitarioCreateNestedManyWithoutConstelacionInput = {
    create?: XOR<ServidorUnitarioCreateWithoutConstelacionInput, ServidorUnitarioUncheckedCreateWithoutConstelacionInput> | ServidorUnitarioCreateWithoutConstelacionInput[] | ServidorUnitarioUncheckedCreateWithoutConstelacionInput[]
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutConstelacionInput | ServidorUnitarioCreateOrConnectWithoutConstelacionInput[]
    createMany?: ServidorUnitarioCreateManyConstelacionInputEnvelope
    connect?: ServidorUnitarioWhereUniqueInput | ServidorUnitarioWhereUniqueInput[]
  }

  export type ServidorUnitarioUncheckedCreateNestedManyWithoutConstelacionInput = {
    create?: XOR<ServidorUnitarioCreateWithoutConstelacionInput, ServidorUnitarioUncheckedCreateWithoutConstelacionInput> | ServidorUnitarioCreateWithoutConstelacionInput[] | ServidorUnitarioUncheckedCreateWithoutConstelacionInput[]
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutConstelacionInput | ServidorUnitarioCreateOrConnectWithoutConstelacionInput[]
    createMany?: ServidorUnitarioCreateManyConstelacionInputEnvelope
    connect?: ServidorUnitarioWhereUniqueInput | ServidorUnitarioWhereUniqueInput[]
  }

  export type ServidorUnitarioUpdateManyWithoutConstelacionNestedInput = {
    create?: XOR<ServidorUnitarioCreateWithoutConstelacionInput, ServidorUnitarioUncheckedCreateWithoutConstelacionInput> | ServidorUnitarioCreateWithoutConstelacionInput[] | ServidorUnitarioUncheckedCreateWithoutConstelacionInput[]
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutConstelacionInput | ServidorUnitarioCreateOrConnectWithoutConstelacionInput[]
    upsert?: ServidorUnitarioUpsertWithWhereUniqueWithoutConstelacionInput | ServidorUnitarioUpsertWithWhereUniqueWithoutConstelacionInput[]
    createMany?: ServidorUnitarioCreateManyConstelacionInputEnvelope
    set?: ServidorUnitarioWhereUniqueInput | ServidorUnitarioWhereUniqueInput[]
    disconnect?: ServidorUnitarioWhereUniqueInput | ServidorUnitarioWhereUniqueInput[]
    delete?: ServidorUnitarioWhereUniqueInput | ServidorUnitarioWhereUniqueInput[]
    connect?: ServidorUnitarioWhereUniqueInput | ServidorUnitarioWhereUniqueInput[]
    update?: ServidorUnitarioUpdateWithWhereUniqueWithoutConstelacionInput | ServidorUnitarioUpdateWithWhereUniqueWithoutConstelacionInput[]
    updateMany?: ServidorUnitarioUpdateManyWithWhereWithoutConstelacionInput | ServidorUnitarioUpdateManyWithWhereWithoutConstelacionInput[]
    deleteMany?: ServidorUnitarioScalarWhereInput | ServidorUnitarioScalarWhereInput[]
  }

  export type ServidorUnitarioUncheckedUpdateManyWithoutConstelacionNestedInput = {
    create?: XOR<ServidorUnitarioCreateWithoutConstelacionInput, ServidorUnitarioUncheckedCreateWithoutConstelacionInput> | ServidorUnitarioCreateWithoutConstelacionInput[] | ServidorUnitarioUncheckedCreateWithoutConstelacionInput[]
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutConstelacionInput | ServidorUnitarioCreateOrConnectWithoutConstelacionInput[]
    upsert?: ServidorUnitarioUpsertWithWhereUniqueWithoutConstelacionInput | ServidorUnitarioUpsertWithWhereUniqueWithoutConstelacionInput[]
    createMany?: ServidorUnitarioCreateManyConstelacionInputEnvelope
    set?: ServidorUnitarioWhereUniqueInput | ServidorUnitarioWhereUniqueInput[]
    disconnect?: ServidorUnitarioWhereUniqueInput | ServidorUnitarioWhereUniqueInput[]
    delete?: ServidorUnitarioWhereUniqueInput | ServidorUnitarioWhereUniqueInput[]
    connect?: ServidorUnitarioWhereUniqueInput | ServidorUnitarioWhereUniqueInput[]
    update?: ServidorUnitarioUpdateWithWhereUniqueWithoutConstelacionInput | ServidorUnitarioUpdateWithWhereUniqueWithoutConstelacionInput[]
    updateMany?: ServidorUnitarioUpdateManyWithWhereWithoutConstelacionInput | ServidorUnitarioUpdateManyWithWhereWithoutConstelacionInput[]
    deleteMany?: ServidorUnitarioScalarWhereInput | ServidorUnitarioScalarWhereInput[]
  }

  export type ServidorUnitarioCreateNestedOneWithoutSeccionesInput = {
    create?: XOR<ServidorUnitarioCreateWithoutSeccionesInput, ServidorUnitarioUncheckedCreateWithoutSeccionesInput>
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutSeccionesInput
    connect?: ServidorUnitarioWhereUniqueInput
  }

  export type EnumSeccionTipoFieldUpdateOperationsInput = {
    set?: $Enums.SeccionTipo
  }

  export type ServidorUnitarioUpdateOneRequiredWithoutSeccionesNestedInput = {
    create?: XOR<ServidorUnitarioCreateWithoutSeccionesInput, ServidorUnitarioUncheckedCreateWithoutSeccionesInput>
    connectOrCreate?: ServidorUnitarioCreateOrConnectWithoutSeccionesInput
    upsert?: ServidorUnitarioUpsertWithoutSeccionesInput
    connect?: ServidorUnitarioWhereUniqueInput
    update?: XOR<XOR<ServidorUnitarioUpdateToOneWithWhereWithoutSeccionesInput, ServidorUnitarioUpdateWithoutSeccionesInput>, ServidorUnitarioUncheckedUpdateWithoutSeccionesInput>
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

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedEnumCasoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CasoStatus | EnumCasoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasoStatus[] | ListEnumCasoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasoStatus[] | ListEnumCasoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasoStatusFilter<$PrismaModel> | $Enums.CasoStatus
  }

  export type NestedEnumCasoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasoStatus | EnumCasoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasoStatus[] | ListEnumCasoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasoStatus[] | ListEnumCasoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasoStatusWithAggregatesFilter<$PrismaModel> | $Enums.CasoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCasoStatusFilter<$PrismaModel>
    _max?: NestedEnumCasoStatusFilter<$PrismaModel>
  }

  export type NestedEnumRemitenteFilter<$PrismaModel = never> = {
    equals?: $Enums.Remitente | EnumRemitenteFieldRefInput<$PrismaModel>
    in?: $Enums.Remitente[] | ListEnumRemitenteFieldRefInput<$PrismaModel>
    notIn?: $Enums.Remitente[] | ListEnumRemitenteFieldRefInput<$PrismaModel>
    not?: NestedEnumRemitenteFilter<$PrismaModel> | $Enums.Remitente
  }

  export type NestedEnumRemitenteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Remitente | EnumRemitenteFieldRefInput<$PrismaModel>
    in?: $Enums.Remitente[] | ListEnumRemitenteFieldRefInput<$PrismaModel>
    notIn?: $Enums.Remitente[] | ListEnumRemitenteFieldRefInput<$PrismaModel>
    not?: NestedEnumRemitenteWithAggregatesFilter<$PrismaModel> | $Enums.Remitente
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRemitenteFilter<$PrismaModel>
    _max?: NestedEnumRemitenteFilter<$PrismaModel>
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

  export type NestedEnumSeccionTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.SeccionTipo | EnumSeccionTipoFieldRefInput<$PrismaModel>
    in?: $Enums.SeccionTipo[] | ListEnumSeccionTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeccionTipo[] | ListEnumSeccionTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumSeccionTipoFilter<$PrismaModel> | $Enums.SeccionTipo
  }

  export type NestedEnumSeccionTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeccionTipo | EnumSeccionTipoFieldRefInput<$PrismaModel>
    in?: $Enums.SeccionTipo[] | ListEnumSeccionTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeccionTipo[] | ListEnumSeccionTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumSeccionTipoWithAggregatesFilter<$PrismaModel> | $Enums.SeccionTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeccionTipoFilter<$PrismaModel>
    _max?: NestedEnumSeccionTipoFilter<$PrismaModel>
  }

  export type ClienteCreateWithoutUsuarioInput = {
    id?: string
    servidor: ServidorUnitarioCreateNestedOneWithoutClientesInput
    casos?: CasoCreateNestedManyWithoutClienteInput
    archivos?: ArchivoCreateNestedManyWithoutClienteInput
    reportes?: ReporteCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutUsuarioInput = {
    id?: string
    servidorId: string
    casos?: CasoUncheckedCreateNestedManyWithoutClienteInput
    archivos?: ArchivoUncheckedCreateNestedManyWithoutClienteInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutUsuarioInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutUsuarioInput, ClienteUncheckedCreateWithoutUsuarioInput>
  }

  export type ClienteCreateManyUsuarioInputEnvelope = {
    data: ClienteCreateManyUsuarioInput | ClienteCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ProfesionalCreateWithoutUsuarioInput = {
    id?: string
    servidor: ServidorUnitarioCreateNestedOneWithoutProfesionalesInput
    casos?: CasoCreateNestedManyWithoutProfesionalInput
    archivos?: ArchivoCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateWithoutUsuarioInput = {
    id?: string
    servidorId: string
    casos?: CasoUncheckedCreateNestedManyWithoutProfesionalInput
    archivos?: ArchivoUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalCreateOrConnectWithoutUsuarioInput = {
    where: ProfesionalWhereUniqueInput
    create: XOR<ProfesionalCreateWithoutUsuarioInput, ProfesionalUncheckedCreateWithoutUsuarioInput>
  }

  export type ProfesionalCreateManyUsuarioInputEnvelope = {
    data: ProfesionalCreateManyUsuarioInput | ProfesionalCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutUsuarioInput, ClienteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ClienteCreateWithoutUsuarioInput, ClienteUncheckedCreateWithoutUsuarioInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutUsuarioInput, ClienteUncheckedUpdateWithoutUsuarioInput>
  }

  export type ClienteUpdateManyWithWhereWithoutUsuarioInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ClienteScalarWhereInput = {
    AND?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    OR?: ClienteScalarWhereInput[]
    NOT?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    id?: StringFilter<"Cliente"> | string
    usuarioId?: StringFilter<"Cliente"> | string
    servidorId?: StringFilter<"Cliente"> | string
  }

  export type ProfesionalUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ProfesionalWhereUniqueInput
    update: XOR<ProfesionalUpdateWithoutUsuarioInput, ProfesionalUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProfesionalCreateWithoutUsuarioInput, ProfesionalUncheckedCreateWithoutUsuarioInput>
  }

  export type ProfesionalUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ProfesionalWhereUniqueInput
    data: XOR<ProfesionalUpdateWithoutUsuarioInput, ProfesionalUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProfesionalUpdateManyWithWhereWithoutUsuarioInput = {
    where: ProfesionalScalarWhereInput
    data: XOR<ProfesionalUpdateManyMutationInput, ProfesionalUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ProfesionalScalarWhereInput = {
    AND?: ProfesionalScalarWhereInput | ProfesionalScalarWhereInput[]
    OR?: ProfesionalScalarWhereInput[]
    NOT?: ProfesionalScalarWhereInput | ProfesionalScalarWhereInput[]
    id?: StringFilter<"Profesional"> | string
    usuarioId?: StringFilter<"Profesional"> | string
    servidorId?: StringFilter<"Profesional"> | string
  }

  export type ConstelacionCreateWithoutServidoresInput = {
    id?: string
    nombre: string
    descripcion?: string | null
  }

  export type ConstelacionUncheckedCreateWithoutServidoresInput = {
    id?: string
    nombre: string
    descripcion?: string | null
  }

  export type ConstelacionCreateOrConnectWithoutServidoresInput = {
    where: ConstelacionWhereUniqueInput
    create: XOR<ConstelacionCreateWithoutServidoresInput, ConstelacionUncheckedCreateWithoutServidoresInput>
  }

  export type SeccionCreateWithoutServidorInput = {
    id?: string
    tipo: $Enums.SeccionTipo
    titulo: string
    contenido: string
    orden: number
  }

  export type SeccionUncheckedCreateWithoutServidorInput = {
    id?: string
    tipo: $Enums.SeccionTipo
    titulo: string
    contenido: string
    orden: number
  }

  export type SeccionCreateOrConnectWithoutServidorInput = {
    where: SeccionWhereUniqueInput
    create: XOR<SeccionCreateWithoutServidorInput, SeccionUncheckedCreateWithoutServidorInput>
  }

  export type SeccionCreateManyServidorInputEnvelope = {
    data: SeccionCreateManyServidorInput | SeccionCreateManyServidorInput[]
    skipDuplicates?: boolean
  }

  export type NoticiasConfigCreateWithoutServidorInput = {
    id?: string
    palabraClave: string
    limite?: number
  }

  export type NoticiasConfigUncheckedCreateWithoutServidorInput = {
    id?: string
    palabraClave: string
    limite?: number
  }

  export type NoticiasConfigCreateOrConnectWithoutServidorInput = {
    where: NoticiasConfigWhereUniqueInput
    create: XOR<NoticiasConfigCreateWithoutServidorInput, NoticiasConfigUncheckedCreateWithoutServidorInput>
  }

  export type FuenteAutomaticaCreateWithoutServidorInput = {
    id?: string
    nombre: string
    url: string
    tipo: string
  }

  export type FuenteAutomaticaUncheckedCreateWithoutServidorInput = {
    id?: string
    nombre: string
    url: string
    tipo: string
  }

  export type FuenteAutomaticaCreateOrConnectWithoutServidorInput = {
    where: FuenteAutomaticaWhereUniqueInput
    create: XOR<FuenteAutomaticaCreateWithoutServidorInput, FuenteAutomaticaUncheckedCreateWithoutServidorInput>
  }

  export type FuenteAutomaticaCreateManyServidorInputEnvelope = {
    data: FuenteAutomaticaCreateManyServidorInput | FuenteAutomaticaCreateManyServidorInput[]
    skipDuplicates?: boolean
  }

  export type ManualArticleCreateWithoutServidorInput = {
    id?: string
    titulo: string
    contenido: string
    publishedAt: Date | string
  }

  export type ManualArticleUncheckedCreateWithoutServidorInput = {
    id?: string
    titulo: string
    contenido: string
    publishedAt: Date | string
  }

  export type ManualArticleCreateOrConnectWithoutServidorInput = {
    where: ManualArticleWhereUniqueInput
    create: XOR<ManualArticleCreateWithoutServidorInput, ManualArticleUncheckedCreateWithoutServidorInput>
  }

  export type ManualArticleCreateManyServidorInputEnvelope = {
    data: ManualArticleCreateManyServidorInput | ManualArticleCreateManyServidorInput[]
    skipDuplicates?: boolean
  }

  export type ClienteCreateWithoutServidorInput = {
    id?: string
    usuario: UsuarioCreateNestedOneWithoutClientesInput
    casos?: CasoCreateNestedManyWithoutClienteInput
    archivos?: ArchivoCreateNestedManyWithoutClienteInput
    reportes?: ReporteCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutServidorInput = {
    id?: string
    usuarioId: string
    casos?: CasoUncheckedCreateNestedManyWithoutClienteInput
    archivos?: ArchivoUncheckedCreateNestedManyWithoutClienteInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutServidorInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutServidorInput, ClienteUncheckedCreateWithoutServidorInput>
  }

  export type ClienteCreateManyServidorInputEnvelope = {
    data: ClienteCreateManyServidorInput | ClienteCreateManyServidorInput[]
    skipDuplicates?: boolean
  }

  export type ProfesionalCreateWithoutServidorInput = {
    id?: string
    usuario: UsuarioCreateNestedOneWithoutProfesionalesInput
    casos?: CasoCreateNestedManyWithoutProfesionalInput
    archivos?: ArchivoCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateWithoutServidorInput = {
    id?: string
    usuarioId: string
    casos?: CasoUncheckedCreateNestedManyWithoutProfesionalInput
    archivos?: ArchivoUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalCreateOrConnectWithoutServidorInput = {
    where: ProfesionalWhereUniqueInput
    create: XOR<ProfesionalCreateWithoutServidorInput, ProfesionalUncheckedCreateWithoutServidorInput>
  }

  export type ProfesionalCreateManyServidorInputEnvelope = {
    data: ProfesionalCreateManyServidorInput | ProfesionalCreateManyServidorInput[]
    skipDuplicates?: boolean
  }

  export type CasoCreateWithoutServidorInput = {
    id?: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutCasosInput
    profesional: ProfesionalCreateNestedOneWithoutCasosInput
    chat?: ChatCreateNestedOneWithoutCasoInput
    archivos?: ArchivoCreateNestedManyWithoutCasoInput
    reportes?: ReporteCreateNestedManyWithoutCasoInput
  }

  export type CasoUncheckedCreateWithoutServidorInput = {
    id?: string
    clienteId: string
    profesionalId: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    chat?: ChatUncheckedCreateNestedOneWithoutCasoInput
    archivos?: ArchivoUncheckedCreateNestedManyWithoutCasoInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutCasoInput
  }

  export type CasoCreateOrConnectWithoutServidorInput = {
    where: CasoWhereUniqueInput
    create: XOR<CasoCreateWithoutServidorInput, CasoUncheckedCreateWithoutServidorInput>
  }

  export type CasoCreateManyServidorInputEnvelope = {
    data: CasoCreateManyServidorInput | CasoCreateManyServidorInput[]
    skipDuplicates?: boolean
  }

  export type ConstelacionUpsertWithoutServidoresInput = {
    update: XOR<ConstelacionUpdateWithoutServidoresInput, ConstelacionUncheckedUpdateWithoutServidoresInput>
    create: XOR<ConstelacionCreateWithoutServidoresInput, ConstelacionUncheckedCreateWithoutServidoresInput>
    where?: ConstelacionWhereInput
  }

  export type ConstelacionUpdateToOneWithWhereWithoutServidoresInput = {
    where?: ConstelacionWhereInput
    data: XOR<ConstelacionUpdateWithoutServidoresInput, ConstelacionUncheckedUpdateWithoutServidoresInput>
  }

  export type ConstelacionUpdateWithoutServidoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConstelacionUncheckedUpdateWithoutServidoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeccionUpsertWithWhereUniqueWithoutServidorInput = {
    where: SeccionWhereUniqueInput
    update: XOR<SeccionUpdateWithoutServidorInput, SeccionUncheckedUpdateWithoutServidorInput>
    create: XOR<SeccionCreateWithoutServidorInput, SeccionUncheckedCreateWithoutServidorInput>
  }

  export type SeccionUpdateWithWhereUniqueWithoutServidorInput = {
    where: SeccionWhereUniqueInput
    data: XOR<SeccionUpdateWithoutServidorInput, SeccionUncheckedUpdateWithoutServidorInput>
  }

  export type SeccionUpdateManyWithWhereWithoutServidorInput = {
    where: SeccionScalarWhereInput
    data: XOR<SeccionUpdateManyMutationInput, SeccionUncheckedUpdateManyWithoutServidorInput>
  }

  export type SeccionScalarWhereInput = {
    AND?: SeccionScalarWhereInput | SeccionScalarWhereInput[]
    OR?: SeccionScalarWhereInput[]
    NOT?: SeccionScalarWhereInput | SeccionScalarWhereInput[]
    id?: StringFilter<"Seccion"> | string
    servidorId?: StringFilter<"Seccion"> | string
    tipo?: EnumSeccionTipoFilter<"Seccion"> | $Enums.SeccionTipo
    titulo?: StringFilter<"Seccion"> | string
    contenido?: StringFilter<"Seccion"> | string
    orden?: IntFilter<"Seccion"> | number
  }

  export type NoticiasConfigUpsertWithoutServidorInput = {
    update: XOR<NoticiasConfigUpdateWithoutServidorInput, NoticiasConfigUncheckedUpdateWithoutServidorInput>
    create: XOR<NoticiasConfigCreateWithoutServidorInput, NoticiasConfigUncheckedCreateWithoutServidorInput>
    where?: NoticiasConfigWhereInput
  }

  export type NoticiasConfigUpdateToOneWithWhereWithoutServidorInput = {
    where?: NoticiasConfigWhereInput
    data: XOR<NoticiasConfigUpdateWithoutServidorInput, NoticiasConfigUncheckedUpdateWithoutServidorInput>
  }

  export type NoticiasConfigUpdateWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    palabraClave?: StringFieldUpdateOperationsInput | string
    limite?: IntFieldUpdateOperationsInput | number
  }

  export type NoticiasConfigUncheckedUpdateWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    palabraClave?: StringFieldUpdateOperationsInput | string
    limite?: IntFieldUpdateOperationsInput | number
  }

  export type FuenteAutomaticaUpsertWithWhereUniqueWithoutServidorInput = {
    where: FuenteAutomaticaWhereUniqueInput
    update: XOR<FuenteAutomaticaUpdateWithoutServidorInput, FuenteAutomaticaUncheckedUpdateWithoutServidorInput>
    create: XOR<FuenteAutomaticaCreateWithoutServidorInput, FuenteAutomaticaUncheckedCreateWithoutServidorInput>
  }

  export type FuenteAutomaticaUpdateWithWhereUniqueWithoutServidorInput = {
    where: FuenteAutomaticaWhereUniqueInput
    data: XOR<FuenteAutomaticaUpdateWithoutServidorInput, FuenteAutomaticaUncheckedUpdateWithoutServidorInput>
  }

  export type FuenteAutomaticaUpdateManyWithWhereWithoutServidorInput = {
    where: FuenteAutomaticaScalarWhereInput
    data: XOR<FuenteAutomaticaUpdateManyMutationInput, FuenteAutomaticaUncheckedUpdateManyWithoutServidorInput>
  }

  export type FuenteAutomaticaScalarWhereInput = {
    AND?: FuenteAutomaticaScalarWhereInput | FuenteAutomaticaScalarWhereInput[]
    OR?: FuenteAutomaticaScalarWhereInput[]
    NOT?: FuenteAutomaticaScalarWhereInput | FuenteAutomaticaScalarWhereInput[]
    id?: StringFilter<"FuenteAutomatica"> | string
    servidorId?: StringFilter<"FuenteAutomatica"> | string
    nombre?: StringFilter<"FuenteAutomatica"> | string
    url?: StringFilter<"FuenteAutomatica"> | string
    tipo?: StringFilter<"FuenteAutomatica"> | string
  }

  export type ManualArticleUpsertWithWhereUniqueWithoutServidorInput = {
    where: ManualArticleWhereUniqueInput
    update: XOR<ManualArticleUpdateWithoutServidorInput, ManualArticleUncheckedUpdateWithoutServidorInput>
    create: XOR<ManualArticleCreateWithoutServidorInput, ManualArticleUncheckedCreateWithoutServidorInput>
  }

  export type ManualArticleUpdateWithWhereUniqueWithoutServidorInput = {
    where: ManualArticleWhereUniqueInput
    data: XOR<ManualArticleUpdateWithoutServidorInput, ManualArticleUncheckedUpdateWithoutServidorInput>
  }

  export type ManualArticleUpdateManyWithWhereWithoutServidorInput = {
    where: ManualArticleScalarWhereInput
    data: XOR<ManualArticleUpdateManyMutationInput, ManualArticleUncheckedUpdateManyWithoutServidorInput>
  }

  export type ManualArticleScalarWhereInput = {
    AND?: ManualArticleScalarWhereInput | ManualArticleScalarWhereInput[]
    OR?: ManualArticleScalarWhereInput[]
    NOT?: ManualArticleScalarWhereInput | ManualArticleScalarWhereInput[]
    id?: StringFilter<"ManualArticle"> | string
    servidorId?: StringFilter<"ManualArticle"> | string
    titulo?: StringFilter<"ManualArticle"> | string
    contenido?: StringFilter<"ManualArticle"> | string
    publishedAt?: DateTimeFilter<"ManualArticle"> | Date | string
  }

  export type ClienteUpsertWithWhereUniqueWithoutServidorInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutServidorInput, ClienteUncheckedUpdateWithoutServidorInput>
    create: XOR<ClienteCreateWithoutServidorInput, ClienteUncheckedCreateWithoutServidorInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutServidorInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutServidorInput, ClienteUncheckedUpdateWithoutServidorInput>
  }

  export type ClienteUpdateManyWithWhereWithoutServidorInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutServidorInput>
  }

  export type ProfesionalUpsertWithWhereUniqueWithoutServidorInput = {
    where: ProfesionalWhereUniqueInput
    update: XOR<ProfesionalUpdateWithoutServidorInput, ProfesionalUncheckedUpdateWithoutServidorInput>
    create: XOR<ProfesionalCreateWithoutServidorInput, ProfesionalUncheckedCreateWithoutServidorInput>
  }

  export type ProfesionalUpdateWithWhereUniqueWithoutServidorInput = {
    where: ProfesionalWhereUniqueInput
    data: XOR<ProfesionalUpdateWithoutServidorInput, ProfesionalUncheckedUpdateWithoutServidorInput>
  }

  export type ProfesionalUpdateManyWithWhereWithoutServidorInput = {
    where: ProfesionalScalarWhereInput
    data: XOR<ProfesionalUpdateManyMutationInput, ProfesionalUncheckedUpdateManyWithoutServidorInput>
  }

  export type CasoUpsertWithWhereUniqueWithoutServidorInput = {
    where: CasoWhereUniqueInput
    update: XOR<CasoUpdateWithoutServidorInput, CasoUncheckedUpdateWithoutServidorInput>
    create: XOR<CasoCreateWithoutServidorInput, CasoUncheckedCreateWithoutServidorInput>
  }

  export type CasoUpdateWithWhereUniqueWithoutServidorInput = {
    where: CasoWhereUniqueInput
    data: XOR<CasoUpdateWithoutServidorInput, CasoUncheckedUpdateWithoutServidorInput>
  }

  export type CasoUpdateManyWithWhereWithoutServidorInput = {
    where: CasoScalarWhereInput
    data: XOR<CasoUpdateManyMutationInput, CasoUncheckedUpdateManyWithoutServidorInput>
  }

  export type CasoScalarWhereInput = {
    AND?: CasoScalarWhereInput | CasoScalarWhereInput[]
    OR?: CasoScalarWhereInput[]
    NOT?: CasoScalarWhereInput | CasoScalarWhereInput[]
    id?: StringFilter<"Caso"> | string
    clienteId?: StringFilter<"Caso"> | string
    profesionalId?: StringFilter<"Caso"> | string
    servidorId?: StringFilter<"Caso"> | string
    status?: EnumCasoStatusFilter<"Caso"> | $Enums.CasoStatus
    createdAt?: DateTimeFilter<"Caso"> | Date | string
    updatedAt?: DateTimeFilter<"Caso"> | Date | string
  }

  export type UsuarioCreateWithoutClientesInput = {
    id?: string
    email: string
    rol: $Enums.Rol
    firstName: string
    lastName: string
    telefono?: string | null
    direccion?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    Profesionales?: ProfesionalCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutClientesInput = {
    id?: string
    email: string
    rol: $Enums.Rol
    firstName: string
    lastName: string
    telefono?: string | null
    direccion?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    Profesionales?: ProfesionalUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutClientesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutClientesInput, UsuarioUncheckedCreateWithoutClientesInput>
  }

  export type ServidorUnitarioCreateWithoutClientesInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacion: ConstelacionCreateNestedOneWithoutServidoresInput
    secciones?: SeccionCreateNestedManyWithoutServidorInput
    noticiasConfig?: NoticiasConfigCreateNestedOneWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaCreateNestedManyWithoutServidorInput
    manualArticles?: ManualArticleCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalCreateNestedManyWithoutServidorInput
    casos?: CasoCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioUncheckedCreateWithoutClientesInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacionId: string
    secciones?: SeccionUncheckedCreateNestedManyWithoutServidorInput
    noticiasConfig?: NoticiasConfigUncheckedCreateNestedOneWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedCreateNestedManyWithoutServidorInput
    manualArticles?: ManualArticleUncheckedCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalUncheckedCreateNestedManyWithoutServidorInput
    casos?: CasoUncheckedCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioCreateOrConnectWithoutClientesInput = {
    where: ServidorUnitarioWhereUniqueInput
    create: XOR<ServidorUnitarioCreateWithoutClientesInput, ServidorUnitarioUncheckedCreateWithoutClientesInput>
  }

  export type CasoCreateWithoutClienteInput = {
    id?: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profesional: ProfesionalCreateNestedOneWithoutCasosInput
    servidor: ServidorUnitarioCreateNestedOneWithoutCasosInput
    chat?: ChatCreateNestedOneWithoutCasoInput
    archivos?: ArchivoCreateNestedManyWithoutCasoInput
    reportes?: ReporteCreateNestedManyWithoutCasoInput
  }

  export type CasoUncheckedCreateWithoutClienteInput = {
    id?: string
    profesionalId: string
    servidorId: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    chat?: ChatUncheckedCreateNestedOneWithoutCasoInput
    archivos?: ArchivoUncheckedCreateNestedManyWithoutCasoInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutCasoInput
  }

  export type CasoCreateOrConnectWithoutClienteInput = {
    where: CasoWhereUniqueInput
    create: XOR<CasoCreateWithoutClienteInput, CasoUncheckedCreateWithoutClienteInput>
  }

  export type CasoCreateManyClienteInputEnvelope = {
    data: CasoCreateManyClienteInput | CasoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ArchivoCreateWithoutClienteInput = {
    id?: string
    nombre: string
    url: string
    tipo: string
    fecha?: Date | string
    caso: CasoCreateNestedOneWithoutArchivosInput
    profesional?: ProfesionalCreateNestedOneWithoutArchivosInput
  }

  export type ArchivoUncheckedCreateWithoutClienteInput = {
    id?: string
    casoId: string
    profesionalId?: string | null
    nombre: string
    url: string
    tipo: string
    fecha?: Date | string
  }

  export type ArchivoCreateOrConnectWithoutClienteInput = {
    where: ArchivoWhereUniqueInput
    create: XOR<ArchivoCreateWithoutClienteInput, ArchivoUncheckedCreateWithoutClienteInput>
  }

  export type ArchivoCreateManyClienteInputEnvelope = {
    data: ArchivoCreateManyClienteInput | ArchivoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ReporteCreateWithoutClienteInput = {
    id?: string
    razon: string
    createdAt?: Date | string
    caso: CasoCreateNestedOneWithoutReportesInput
  }

  export type ReporteUncheckedCreateWithoutClienteInput = {
    id?: string
    casoId: string
    razon: string
    createdAt?: Date | string
  }

  export type ReporteCreateOrConnectWithoutClienteInput = {
    where: ReporteWhereUniqueInput
    create: XOR<ReporteCreateWithoutClienteInput, ReporteUncheckedCreateWithoutClienteInput>
  }

  export type ReporteCreateManyClienteInputEnvelope = {
    data: ReporteCreateManyClienteInput | ReporteCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutClientesInput = {
    update: XOR<UsuarioUpdateWithoutClientesInput, UsuarioUncheckedUpdateWithoutClientesInput>
    create: XOR<UsuarioCreateWithoutClientesInput, UsuarioUncheckedCreateWithoutClientesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutClientesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutClientesInput, UsuarioUncheckedUpdateWithoutClientesInput>
  }

  export type UsuarioUpdateWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Profesionales?: ProfesionalUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Profesionales?: ProfesionalUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ServidorUnitarioUpsertWithoutClientesInput = {
    update: XOR<ServidorUnitarioUpdateWithoutClientesInput, ServidorUnitarioUncheckedUpdateWithoutClientesInput>
    create: XOR<ServidorUnitarioCreateWithoutClientesInput, ServidorUnitarioUncheckedCreateWithoutClientesInput>
    where?: ServidorUnitarioWhereInput
  }

  export type ServidorUnitarioUpdateToOneWithWhereWithoutClientesInput = {
    where?: ServidorUnitarioWhereInput
    data: XOR<ServidorUnitarioUpdateWithoutClientesInput, ServidorUnitarioUncheckedUpdateWithoutClientesInput>
  }

  export type ServidorUnitarioUpdateWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacion?: ConstelacionUpdateOneRequiredWithoutServidoresNestedInput
    secciones?: SeccionUpdateManyWithoutServidorNestedInput
    noticiasConfig?: NoticiasConfigUpdateOneWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUpdateManyWithoutServidorNestedInput
    manualArticles?: ManualArticleUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUpdateManyWithoutServidorNestedInput
    casos?: CasoUpdateManyWithoutServidorNestedInput
  }

  export type ServidorUnitarioUncheckedUpdateWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacionId?: StringFieldUpdateOperationsInput | string
    secciones?: SeccionUncheckedUpdateManyWithoutServidorNestedInput
    noticiasConfig?: NoticiasConfigUncheckedUpdateOneWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedUpdateManyWithoutServidorNestedInput
    manualArticles?: ManualArticleUncheckedUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUncheckedUpdateManyWithoutServidorNestedInput
    casos?: CasoUncheckedUpdateManyWithoutServidorNestedInput
  }

  export type CasoUpsertWithWhereUniqueWithoutClienteInput = {
    where: CasoWhereUniqueInput
    update: XOR<CasoUpdateWithoutClienteInput, CasoUncheckedUpdateWithoutClienteInput>
    create: XOR<CasoCreateWithoutClienteInput, CasoUncheckedCreateWithoutClienteInput>
  }

  export type CasoUpdateWithWhereUniqueWithoutClienteInput = {
    where: CasoWhereUniqueInput
    data: XOR<CasoUpdateWithoutClienteInput, CasoUncheckedUpdateWithoutClienteInput>
  }

  export type CasoUpdateManyWithWhereWithoutClienteInput = {
    where: CasoScalarWhereInput
    data: XOR<CasoUpdateManyMutationInput, CasoUncheckedUpdateManyWithoutClienteInput>
  }

  export type ArchivoUpsertWithWhereUniqueWithoutClienteInput = {
    where: ArchivoWhereUniqueInput
    update: XOR<ArchivoUpdateWithoutClienteInput, ArchivoUncheckedUpdateWithoutClienteInput>
    create: XOR<ArchivoCreateWithoutClienteInput, ArchivoUncheckedCreateWithoutClienteInput>
  }

  export type ArchivoUpdateWithWhereUniqueWithoutClienteInput = {
    where: ArchivoWhereUniqueInput
    data: XOR<ArchivoUpdateWithoutClienteInput, ArchivoUncheckedUpdateWithoutClienteInput>
  }

  export type ArchivoUpdateManyWithWhereWithoutClienteInput = {
    where: ArchivoScalarWhereInput
    data: XOR<ArchivoUpdateManyMutationInput, ArchivoUncheckedUpdateManyWithoutClienteInput>
  }

  export type ArchivoScalarWhereInput = {
    AND?: ArchivoScalarWhereInput | ArchivoScalarWhereInput[]
    OR?: ArchivoScalarWhereInput[]
    NOT?: ArchivoScalarWhereInput | ArchivoScalarWhereInput[]
    id?: StringFilter<"Archivo"> | string
    casoId?: StringFilter<"Archivo"> | string
    clienteId?: StringNullableFilter<"Archivo"> | string | null
    profesionalId?: StringNullableFilter<"Archivo"> | string | null
    nombre?: StringFilter<"Archivo"> | string
    url?: StringFilter<"Archivo"> | string
    tipo?: StringFilter<"Archivo"> | string
    fecha?: DateTimeFilter<"Archivo"> | Date | string
  }

  export type ReporteUpsertWithWhereUniqueWithoutClienteInput = {
    where: ReporteWhereUniqueInput
    update: XOR<ReporteUpdateWithoutClienteInput, ReporteUncheckedUpdateWithoutClienteInput>
    create: XOR<ReporteCreateWithoutClienteInput, ReporteUncheckedCreateWithoutClienteInput>
  }

  export type ReporteUpdateWithWhereUniqueWithoutClienteInput = {
    where: ReporteWhereUniqueInput
    data: XOR<ReporteUpdateWithoutClienteInput, ReporteUncheckedUpdateWithoutClienteInput>
  }

  export type ReporteUpdateManyWithWhereWithoutClienteInput = {
    where: ReporteScalarWhereInput
    data: XOR<ReporteUpdateManyMutationInput, ReporteUncheckedUpdateManyWithoutClienteInput>
  }

  export type ReporteScalarWhereInput = {
    AND?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
    OR?: ReporteScalarWhereInput[]
    NOT?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
    id?: StringFilter<"Reporte"> | string
    casoId?: StringFilter<"Reporte"> | string
    clienteId?: StringFilter<"Reporte"> | string
    razon?: StringFilter<"Reporte"> | string
    createdAt?: DateTimeFilter<"Reporte"> | Date | string
  }

  export type UsuarioCreateWithoutProfesionalesInput = {
    id?: string
    email: string
    rol: $Enums.Rol
    firstName: string
    lastName: string
    telefono?: string | null
    direccion?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    Clientes?: ClienteCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutProfesionalesInput = {
    id?: string
    email: string
    rol: $Enums.Rol
    firstName: string
    lastName: string
    telefono?: string | null
    direccion?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    Clientes?: ClienteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutProfesionalesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProfesionalesInput, UsuarioUncheckedCreateWithoutProfesionalesInput>
  }

  export type ServidorUnitarioCreateWithoutProfesionalesInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacion: ConstelacionCreateNestedOneWithoutServidoresInput
    secciones?: SeccionCreateNestedManyWithoutServidorInput
    noticiasConfig?: NoticiasConfigCreateNestedOneWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaCreateNestedManyWithoutServidorInput
    manualArticles?: ManualArticleCreateNestedManyWithoutServidorInput
    clientes?: ClienteCreateNestedManyWithoutServidorInput
    casos?: CasoCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioUncheckedCreateWithoutProfesionalesInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacionId: string
    secciones?: SeccionUncheckedCreateNestedManyWithoutServidorInput
    noticiasConfig?: NoticiasConfigUncheckedCreateNestedOneWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedCreateNestedManyWithoutServidorInput
    manualArticles?: ManualArticleUncheckedCreateNestedManyWithoutServidorInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutServidorInput
    casos?: CasoUncheckedCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioCreateOrConnectWithoutProfesionalesInput = {
    where: ServidorUnitarioWhereUniqueInput
    create: XOR<ServidorUnitarioCreateWithoutProfesionalesInput, ServidorUnitarioUncheckedCreateWithoutProfesionalesInput>
  }

  export type CasoCreateWithoutProfesionalInput = {
    id?: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutCasosInput
    servidor: ServidorUnitarioCreateNestedOneWithoutCasosInput
    chat?: ChatCreateNestedOneWithoutCasoInput
    archivos?: ArchivoCreateNestedManyWithoutCasoInput
    reportes?: ReporteCreateNestedManyWithoutCasoInput
  }

  export type CasoUncheckedCreateWithoutProfesionalInput = {
    id?: string
    clienteId: string
    servidorId: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    chat?: ChatUncheckedCreateNestedOneWithoutCasoInput
    archivos?: ArchivoUncheckedCreateNestedManyWithoutCasoInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutCasoInput
  }

  export type CasoCreateOrConnectWithoutProfesionalInput = {
    where: CasoWhereUniqueInput
    create: XOR<CasoCreateWithoutProfesionalInput, CasoUncheckedCreateWithoutProfesionalInput>
  }

  export type CasoCreateManyProfesionalInputEnvelope = {
    data: CasoCreateManyProfesionalInput | CasoCreateManyProfesionalInput[]
    skipDuplicates?: boolean
  }

  export type ArchivoCreateWithoutProfesionalInput = {
    id?: string
    nombre: string
    url: string
    tipo: string
    fecha?: Date | string
    caso: CasoCreateNestedOneWithoutArchivosInput
    cliente?: ClienteCreateNestedOneWithoutArchivosInput
  }

  export type ArchivoUncheckedCreateWithoutProfesionalInput = {
    id?: string
    casoId: string
    clienteId?: string | null
    nombre: string
    url: string
    tipo: string
    fecha?: Date | string
  }

  export type ArchivoCreateOrConnectWithoutProfesionalInput = {
    where: ArchivoWhereUniqueInput
    create: XOR<ArchivoCreateWithoutProfesionalInput, ArchivoUncheckedCreateWithoutProfesionalInput>
  }

  export type ArchivoCreateManyProfesionalInputEnvelope = {
    data: ArchivoCreateManyProfesionalInput | ArchivoCreateManyProfesionalInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutProfesionalesInput = {
    update: XOR<UsuarioUpdateWithoutProfesionalesInput, UsuarioUncheckedUpdateWithoutProfesionalesInput>
    create: XOR<UsuarioCreateWithoutProfesionalesInput, UsuarioUncheckedCreateWithoutProfesionalesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProfesionalesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProfesionalesInput, UsuarioUncheckedUpdateWithoutProfesionalesInput>
  }

  export type UsuarioUpdateWithoutProfesionalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Clientes?: ClienteUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProfesionalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Clientes?: ClienteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ServidorUnitarioUpsertWithoutProfesionalesInput = {
    update: XOR<ServidorUnitarioUpdateWithoutProfesionalesInput, ServidorUnitarioUncheckedUpdateWithoutProfesionalesInput>
    create: XOR<ServidorUnitarioCreateWithoutProfesionalesInput, ServidorUnitarioUncheckedCreateWithoutProfesionalesInput>
    where?: ServidorUnitarioWhereInput
  }

  export type ServidorUnitarioUpdateToOneWithWhereWithoutProfesionalesInput = {
    where?: ServidorUnitarioWhereInput
    data: XOR<ServidorUnitarioUpdateWithoutProfesionalesInput, ServidorUnitarioUncheckedUpdateWithoutProfesionalesInput>
  }

  export type ServidorUnitarioUpdateWithoutProfesionalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacion?: ConstelacionUpdateOneRequiredWithoutServidoresNestedInput
    secciones?: SeccionUpdateManyWithoutServidorNestedInput
    noticiasConfig?: NoticiasConfigUpdateOneWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUpdateManyWithoutServidorNestedInput
    manualArticles?: ManualArticleUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUpdateManyWithoutServidorNestedInput
    casos?: CasoUpdateManyWithoutServidorNestedInput
  }

  export type ServidorUnitarioUncheckedUpdateWithoutProfesionalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacionId?: StringFieldUpdateOperationsInput | string
    secciones?: SeccionUncheckedUpdateManyWithoutServidorNestedInput
    noticiasConfig?: NoticiasConfigUncheckedUpdateOneWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedUpdateManyWithoutServidorNestedInput
    manualArticles?: ManualArticleUncheckedUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutServidorNestedInput
    casos?: CasoUncheckedUpdateManyWithoutServidorNestedInput
  }

  export type CasoUpsertWithWhereUniqueWithoutProfesionalInput = {
    where: CasoWhereUniqueInput
    update: XOR<CasoUpdateWithoutProfesionalInput, CasoUncheckedUpdateWithoutProfesionalInput>
    create: XOR<CasoCreateWithoutProfesionalInput, CasoUncheckedCreateWithoutProfesionalInput>
  }

  export type CasoUpdateWithWhereUniqueWithoutProfesionalInput = {
    where: CasoWhereUniqueInput
    data: XOR<CasoUpdateWithoutProfesionalInput, CasoUncheckedUpdateWithoutProfesionalInput>
  }

  export type CasoUpdateManyWithWhereWithoutProfesionalInput = {
    where: CasoScalarWhereInput
    data: XOR<CasoUpdateManyMutationInput, CasoUncheckedUpdateManyWithoutProfesionalInput>
  }

  export type ArchivoUpsertWithWhereUniqueWithoutProfesionalInput = {
    where: ArchivoWhereUniqueInput
    update: XOR<ArchivoUpdateWithoutProfesionalInput, ArchivoUncheckedUpdateWithoutProfesionalInput>
    create: XOR<ArchivoCreateWithoutProfesionalInput, ArchivoUncheckedCreateWithoutProfesionalInput>
  }

  export type ArchivoUpdateWithWhereUniqueWithoutProfesionalInput = {
    where: ArchivoWhereUniqueInput
    data: XOR<ArchivoUpdateWithoutProfesionalInput, ArchivoUncheckedUpdateWithoutProfesionalInput>
  }

  export type ArchivoUpdateManyWithWhereWithoutProfesionalInput = {
    where: ArchivoScalarWhereInput
    data: XOR<ArchivoUpdateManyMutationInput, ArchivoUncheckedUpdateManyWithoutProfesionalInput>
  }

  export type ClienteCreateWithoutCasosInput = {
    id?: string
    usuario: UsuarioCreateNestedOneWithoutClientesInput
    servidor: ServidorUnitarioCreateNestedOneWithoutClientesInput
    archivos?: ArchivoCreateNestedManyWithoutClienteInput
    reportes?: ReporteCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutCasosInput = {
    id?: string
    usuarioId: string
    servidorId: string
    archivos?: ArchivoUncheckedCreateNestedManyWithoutClienteInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutCasosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutCasosInput, ClienteUncheckedCreateWithoutCasosInput>
  }

  export type ProfesionalCreateWithoutCasosInput = {
    id?: string
    usuario: UsuarioCreateNestedOneWithoutProfesionalesInput
    servidor: ServidorUnitarioCreateNestedOneWithoutProfesionalesInput
    archivos?: ArchivoCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateWithoutCasosInput = {
    id?: string
    usuarioId: string
    servidorId: string
    archivos?: ArchivoUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalCreateOrConnectWithoutCasosInput = {
    where: ProfesionalWhereUniqueInput
    create: XOR<ProfesionalCreateWithoutCasosInput, ProfesionalUncheckedCreateWithoutCasosInput>
  }

  export type ServidorUnitarioCreateWithoutCasosInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacion: ConstelacionCreateNestedOneWithoutServidoresInput
    secciones?: SeccionCreateNestedManyWithoutServidorInput
    noticiasConfig?: NoticiasConfigCreateNestedOneWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaCreateNestedManyWithoutServidorInput
    manualArticles?: ManualArticleCreateNestedManyWithoutServidorInput
    clientes?: ClienteCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioUncheckedCreateWithoutCasosInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacionId: string
    secciones?: SeccionUncheckedCreateNestedManyWithoutServidorInput
    noticiasConfig?: NoticiasConfigUncheckedCreateNestedOneWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedCreateNestedManyWithoutServidorInput
    manualArticles?: ManualArticleUncheckedCreateNestedManyWithoutServidorInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalUncheckedCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioCreateOrConnectWithoutCasosInput = {
    where: ServidorUnitarioWhereUniqueInput
    create: XOR<ServidorUnitarioCreateWithoutCasosInput, ServidorUnitarioUncheckedCreateWithoutCasosInput>
  }

  export type ChatCreateWithoutCasoInput = {
    id?: string
    mensajes?: MensajeCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutCasoInput = {
    id?: string
    mensajes?: MensajeUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutCasoInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutCasoInput, ChatUncheckedCreateWithoutCasoInput>
  }

  export type ArchivoCreateWithoutCasoInput = {
    id?: string
    nombre: string
    url: string
    tipo: string
    fecha?: Date | string
    cliente?: ClienteCreateNestedOneWithoutArchivosInput
    profesional?: ProfesionalCreateNestedOneWithoutArchivosInput
  }

  export type ArchivoUncheckedCreateWithoutCasoInput = {
    id?: string
    clienteId?: string | null
    profesionalId?: string | null
    nombre: string
    url: string
    tipo: string
    fecha?: Date | string
  }

  export type ArchivoCreateOrConnectWithoutCasoInput = {
    where: ArchivoWhereUniqueInput
    create: XOR<ArchivoCreateWithoutCasoInput, ArchivoUncheckedCreateWithoutCasoInput>
  }

  export type ArchivoCreateManyCasoInputEnvelope = {
    data: ArchivoCreateManyCasoInput | ArchivoCreateManyCasoInput[]
    skipDuplicates?: boolean
  }

  export type ReporteCreateWithoutCasoInput = {
    id?: string
    razon: string
    createdAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutReportesInput
  }

  export type ReporteUncheckedCreateWithoutCasoInput = {
    id?: string
    clienteId: string
    razon: string
    createdAt?: Date | string
  }

  export type ReporteCreateOrConnectWithoutCasoInput = {
    where: ReporteWhereUniqueInput
    create: XOR<ReporteCreateWithoutCasoInput, ReporteUncheckedCreateWithoutCasoInput>
  }

  export type ReporteCreateManyCasoInputEnvelope = {
    data: ReporteCreateManyCasoInput | ReporteCreateManyCasoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutCasosInput = {
    update: XOR<ClienteUpdateWithoutCasosInput, ClienteUncheckedUpdateWithoutCasosInput>
    create: XOR<ClienteCreateWithoutCasosInput, ClienteUncheckedCreateWithoutCasosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutCasosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutCasosInput, ClienteUncheckedUpdateWithoutCasosInput>
  }

  export type ClienteUpdateWithoutCasosInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutClientesNestedInput
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutClientesNestedInput
    archivos?: ArchivoUpdateManyWithoutClienteNestedInput
    reportes?: ReporteUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutCasosInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    archivos?: ArchivoUncheckedUpdateManyWithoutClienteNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ProfesionalUpsertWithoutCasosInput = {
    update: XOR<ProfesionalUpdateWithoutCasosInput, ProfesionalUncheckedUpdateWithoutCasosInput>
    create: XOR<ProfesionalCreateWithoutCasosInput, ProfesionalUncheckedCreateWithoutCasosInput>
    where?: ProfesionalWhereInput
  }

  export type ProfesionalUpdateToOneWithWhereWithoutCasosInput = {
    where?: ProfesionalWhereInput
    data: XOR<ProfesionalUpdateWithoutCasosInput, ProfesionalUncheckedUpdateWithoutCasosInput>
  }

  export type ProfesionalUpdateWithoutCasosInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutProfesionalesNestedInput
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutProfesionalesNestedInput
    archivos?: ArchivoUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateWithoutCasosInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    archivos?: ArchivoUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type ServidorUnitarioUpsertWithoutCasosInput = {
    update: XOR<ServidorUnitarioUpdateWithoutCasosInput, ServidorUnitarioUncheckedUpdateWithoutCasosInput>
    create: XOR<ServidorUnitarioCreateWithoutCasosInput, ServidorUnitarioUncheckedCreateWithoutCasosInput>
    where?: ServidorUnitarioWhereInput
  }

  export type ServidorUnitarioUpdateToOneWithWhereWithoutCasosInput = {
    where?: ServidorUnitarioWhereInput
    data: XOR<ServidorUnitarioUpdateWithoutCasosInput, ServidorUnitarioUncheckedUpdateWithoutCasosInput>
  }

  export type ServidorUnitarioUpdateWithoutCasosInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacion?: ConstelacionUpdateOneRequiredWithoutServidoresNestedInput
    secciones?: SeccionUpdateManyWithoutServidorNestedInput
    noticiasConfig?: NoticiasConfigUpdateOneWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUpdateManyWithoutServidorNestedInput
    manualArticles?: ManualArticleUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUpdateManyWithoutServidorNestedInput
  }

  export type ServidorUnitarioUncheckedUpdateWithoutCasosInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacionId?: StringFieldUpdateOperationsInput | string
    secciones?: SeccionUncheckedUpdateManyWithoutServidorNestedInput
    noticiasConfig?: NoticiasConfigUncheckedUpdateOneWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedUpdateManyWithoutServidorNestedInput
    manualArticles?: ManualArticleUncheckedUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUncheckedUpdateManyWithoutServidorNestedInput
  }

  export type ChatUpsertWithoutCasoInput = {
    update: XOR<ChatUpdateWithoutCasoInput, ChatUncheckedUpdateWithoutCasoInput>
    create: XOR<ChatCreateWithoutCasoInput, ChatUncheckedCreateWithoutCasoInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutCasoInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutCasoInput, ChatUncheckedUpdateWithoutCasoInput>
  }

  export type ChatUpdateWithoutCasoInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensajes?: MensajeUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutCasoInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensajes?: MensajeUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ArchivoUpsertWithWhereUniqueWithoutCasoInput = {
    where: ArchivoWhereUniqueInput
    update: XOR<ArchivoUpdateWithoutCasoInput, ArchivoUncheckedUpdateWithoutCasoInput>
    create: XOR<ArchivoCreateWithoutCasoInput, ArchivoUncheckedCreateWithoutCasoInput>
  }

  export type ArchivoUpdateWithWhereUniqueWithoutCasoInput = {
    where: ArchivoWhereUniqueInput
    data: XOR<ArchivoUpdateWithoutCasoInput, ArchivoUncheckedUpdateWithoutCasoInput>
  }

  export type ArchivoUpdateManyWithWhereWithoutCasoInput = {
    where: ArchivoScalarWhereInput
    data: XOR<ArchivoUpdateManyMutationInput, ArchivoUncheckedUpdateManyWithoutCasoInput>
  }

  export type ReporteUpsertWithWhereUniqueWithoutCasoInput = {
    where: ReporteWhereUniqueInput
    update: XOR<ReporteUpdateWithoutCasoInput, ReporteUncheckedUpdateWithoutCasoInput>
    create: XOR<ReporteCreateWithoutCasoInput, ReporteUncheckedCreateWithoutCasoInput>
  }

  export type ReporteUpdateWithWhereUniqueWithoutCasoInput = {
    where: ReporteWhereUniqueInput
    data: XOR<ReporteUpdateWithoutCasoInput, ReporteUncheckedUpdateWithoutCasoInput>
  }

  export type ReporteUpdateManyWithWhereWithoutCasoInput = {
    where: ReporteScalarWhereInput
    data: XOR<ReporteUpdateManyMutationInput, ReporteUncheckedUpdateManyWithoutCasoInput>
  }

  export type CasoCreateWithoutChatInput = {
    id?: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutCasosInput
    profesional: ProfesionalCreateNestedOneWithoutCasosInput
    servidor: ServidorUnitarioCreateNestedOneWithoutCasosInput
    archivos?: ArchivoCreateNestedManyWithoutCasoInput
    reportes?: ReporteCreateNestedManyWithoutCasoInput
  }

  export type CasoUncheckedCreateWithoutChatInput = {
    id?: string
    clienteId: string
    profesionalId: string
    servidorId: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    archivos?: ArchivoUncheckedCreateNestedManyWithoutCasoInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutCasoInput
  }

  export type CasoCreateOrConnectWithoutChatInput = {
    where: CasoWhereUniqueInput
    create: XOR<CasoCreateWithoutChatInput, CasoUncheckedCreateWithoutChatInput>
  }

  export type MensajeCreateWithoutChatInput = {
    id?: string
    remitente: $Enums.Remitente
    contenido: string
    fecha?: Date | string
  }

  export type MensajeUncheckedCreateWithoutChatInput = {
    id?: string
    remitente: $Enums.Remitente
    contenido: string
    fecha?: Date | string
  }

  export type MensajeCreateOrConnectWithoutChatInput = {
    where: MensajeWhereUniqueInput
    create: XOR<MensajeCreateWithoutChatInput, MensajeUncheckedCreateWithoutChatInput>
  }

  export type MensajeCreateManyChatInputEnvelope = {
    data: MensajeCreateManyChatInput | MensajeCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type CasoUpsertWithoutChatInput = {
    update: XOR<CasoUpdateWithoutChatInput, CasoUncheckedUpdateWithoutChatInput>
    create: XOR<CasoCreateWithoutChatInput, CasoUncheckedCreateWithoutChatInput>
    where?: CasoWhereInput
  }

  export type CasoUpdateToOneWithWhereWithoutChatInput = {
    where?: CasoWhereInput
    data: XOR<CasoUpdateWithoutChatInput, CasoUncheckedUpdateWithoutChatInput>
  }

  export type CasoUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutCasosNestedInput
    profesional?: ProfesionalUpdateOneRequiredWithoutCasosNestedInput
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutCasosNestedInput
    archivos?: ArchivoUpdateManyWithoutCasoNestedInput
    reportes?: ReporteUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    profesionalId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivos?: ArchivoUncheckedUpdateManyWithoutCasoNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutCasoNestedInput
  }

  export type MensajeUpsertWithWhereUniqueWithoutChatInput = {
    where: MensajeWhereUniqueInput
    update: XOR<MensajeUpdateWithoutChatInput, MensajeUncheckedUpdateWithoutChatInput>
    create: XOR<MensajeCreateWithoutChatInput, MensajeUncheckedCreateWithoutChatInput>
  }

  export type MensajeUpdateWithWhereUniqueWithoutChatInput = {
    where: MensajeWhereUniqueInput
    data: XOR<MensajeUpdateWithoutChatInput, MensajeUncheckedUpdateWithoutChatInput>
  }

  export type MensajeUpdateManyWithWhereWithoutChatInput = {
    where: MensajeScalarWhereInput
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyWithoutChatInput>
  }

  export type MensajeScalarWhereInput = {
    AND?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
    OR?: MensajeScalarWhereInput[]
    NOT?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
    id?: StringFilter<"Mensaje"> | string
    chatId?: StringFilter<"Mensaje"> | string
    remitente?: EnumRemitenteFilter<"Mensaje"> | $Enums.Remitente
    contenido?: StringFilter<"Mensaje"> | string
    fecha?: DateTimeFilter<"Mensaje"> | Date | string
  }

  export type ChatCreateWithoutMensajesInput = {
    id?: string
    caso: CasoCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMensajesInput = {
    id?: string
    casoId: string
  }

  export type ChatCreateOrConnectWithoutMensajesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMensajesInput, ChatUncheckedCreateWithoutMensajesInput>
  }

  export type ChatUpsertWithoutMensajesInput = {
    update: XOR<ChatUpdateWithoutMensajesInput, ChatUncheckedUpdateWithoutMensajesInput>
    create: XOR<ChatCreateWithoutMensajesInput, ChatUncheckedCreateWithoutMensajesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMensajesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMensajesInput, ChatUncheckedUpdateWithoutMensajesInput>
  }

  export type ChatUpdateWithoutMensajesInput = {
    id?: StringFieldUpdateOperationsInput | string
    caso?: CasoUpdateOneRequiredWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMensajesInput = {
    id?: StringFieldUpdateOperationsInput | string
    casoId?: StringFieldUpdateOperationsInput | string
  }

  export type ServidorUnitarioCreateWithoutNoticiasConfigInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacion: ConstelacionCreateNestedOneWithoutServidoresInput
    secciones?: SeccionCreateNestedManyWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaCreateNestedManyWithoutServidorInput
    manualArticles?: ManualArticleCreateNestedManyWithoutServidorInput
    clientes?: ClienteCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalCreateNestedManyWithoutServidorInput
    casos?: CasoCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioUncheckedCreateWithoutNoticiasConfigInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacionId: string
    secciones?: SeccionUncheckedCreateNestedManyWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedCreateNestedManyWithoutServidorInput
    manualArticles?: ManualArticleUncheckedCreateNestedManyWithoutServidorInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalUncheckedCreateNestedManyWithoutServidorInput
    casos?: CasoUncheckedCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioCreateOrConnectWithoutNoticiasConfigInput = {
    where: ServidorUnitarioWhereUniqueInput
    create: XOR<ServidorUnitarioCreateWithoutNoticiasConfigInput, ServidorUnitarioUncheckedCreateWithoutNoticiasConfigInput>
  }

  export type ServidorUnitarioUpsertWithoutNoticiasConfigInput = {
    update: XOR<ServidorUnitarioUpdateWithoutNoticiasConfigInput, ServidorUnitarioUncheckedUpdateWithoutNoticiasConfigInput>
    create: XOR<ServidorUnitarioCreateWithoutNoticiasConfigInput, ServidorUnitarioUncheckedCreateWithoutNoticiasConfigInput>
    where?: ServidorUnitarioWhereInput
  }

  export type ServidorUnitarioUpdateToOneWithWhereWithoutNoticiasConfigInput = {
    where?: ServidorUnitarioWhereInput
    data: XOR<ServidorUnitarioUpdateWithoutNoticiasConfigInput, ServidorUnitarioUncheckedUpdateWithoutNoticiasConfigInput>
  }

  export type ServidorUnitarioUpdateWithoutNoticiasConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacion?: ConstelacionUpdateOneRequiredWithoutServidoresNestedInput
    secciones?: SeccionUpdateManyWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUpdateManyWithoutServidorNestedInput
    manualArticles?: ManualArticleUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUpdateManyWithoutServidorNestedInput
    casos?: CasoUpdateManyWithoutServidorNestedInput
  }

  export type ServidorUnitarioUncheckedUpdateWithoutNoticiasConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacionId?: StringFieldUpdateOperationsInput | string
    secciones?: SeccionUncheckedUpdateManyWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedUpdateManyWithoutServidorNestedInput
    manualArticles?: ManualArticleUncheckedUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUncheckedUpdateManyWithoutServidorNestedInput
    casos?: CasoUncheckedUpdateManyWithoutServidorNestedInput
  }

  export type ServidorUnitarioCreateWithoutFuentesAutomaticasInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacion: ConstelacionCreateNestedOneWithoutServidoresInput
    secciones?: SeccionCreateNestedManyWithoutServidorInput
    noticiasConfig?: NoticiasConfigCreateNestedOneWithoutServidorInput
    manualArticles?: ManualArticleCreateNestedManyWithoutServidorInput
    clientes?: ClienteCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalCreateNestedManyWithoutServidorInput
    casos?: CasoCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioUncheckedCreateWithoutFuentesAutomaticasInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacionId: string
    secciones?: SeccionUncheckedCreateNestedManyWithoutServidorInput
    noticiasConfig?: NoticiasConfigUncheckedCreateNestedOneWithoutServidorInput
    manualArticles?: ManualArticleUncheckedCreateNestedManyWithoutServidorInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalUncheckedCreateNestedManyWithoutServidorInput
    casos?: CasoUncheckedCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioCreateOrConnectWithoutFuentesAutomaticasInput = {
    where: ServidorUnitarioWhereUniqueInput
    create: XOR<ServidorUnitarioCreateWithoutFuentesAutomaticasInput, ServidorUnitarioUncheckedCreateWithoutFuentesAutomaticasInput>
  }

  export type ServidorUnitarioUpsertWithoutFuentesAutomaticasInput = {
    update: XOR<ServidorUnitarioUpdateWithoutFuentesAutomaticasInput, ServidorUnitarioUncheckedUpdateWithoutFuentesAutomaticasInput>
    create: XOR<ServidorUnitarioCreateWithoutFuentesAutomaticasInput, ServidorUnitarioUncheckedCreateWithoutFuentesAutomaticasInput>
    where?: ServidorUnitarioWhereInput
  }

  export type ServidorUnitarioUpdateToOneWithWhereWithoutFuentesAutomaticasInput = {
    where?: ServidorUnitarioWhereInput
    data: XOR<ServidorUnitarioUpdateWithoutFuentesAutomaticasInput, ServidorUnitarioUncheckedUpdateWithoutFuentesAutomaticasInput>
  }

  export type ServidorUnitarioUpdateWithoutFuentesAutomaticasInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacion?: ConstelacionUpdateOneRequiredWithoutServidoresNestedInput
    secciones?: SeccionUpdateManyWithoutServidorNestedInput
    noticiasConfig?: NoticiasConfigUpdateOneWithoutServidorNestedInput
    manualArticles?: ManualArticleUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUpdateManyWithoutServidorNestedInput
    casos?: CasoUpdateManyWithoutServidorNestedInput
  }

  export type ServidorUnitarioUncheckedUpdateWithoutFuentesAutomaticasInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacionId?: StringFieldUpdateOperationsInput | string
    secciones?: SeccionUncheckedUpdateManyWithoutServidorNestedInput
    noticiasConfig?: NoticiasConfigUncheckedUpdateOneWithoutServidorNestedInput
    manualArticles?: ManualArticleUncheckedUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUncheckedUpdateManyWithoutServidorNestedInput
    casos?: CasoUncheckedUpdateManyWithoutServidorNestedInput
  }

  export type ServidorUnitarioCreateWithoutManualArticlesInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacion: ConstelacionCreateNestedOneWithoutServidoresInput
    secciones?: SeccionCreateNestedManyWithoutServidorInput
    noticiasConfig?: NoticiasConfigCreateNestedOneWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaCreateNestedManyWithoutServidorInput
    clientes?: ClienteCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalCreateNestedManyWithoutServidorInput
    casos?: CasoCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioUncheckedCreateWithoutManualArticlesInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacionId: string
    secciones?: SeccionUncheckedCreateNestedManyWithoutServidorInput
    noticiasConfig?: NoticiasConfigUncheckedCreateNestedOneWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedCreateNestedManyWithoutServidorInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalUncheckedCreateNestedManyWithoutServidorInput
    casos?: CasoUncheckedCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioCreateOrConnectWithoutManualArticlesInput = {
    where: ServidorUnitarioWhereUniqueInput
    create: XOR<ServidorUnitarioCreateWithoutManualArticlesInput, ServidorUnitarioUncheckedCreateWithoutManualArticlesInput>
  }

  export type ServidorUnitarioUpsertWithoutManualArticlesInput = {
    update: XOR<ServidorUnitarioUpdateWithoutManualArticlesInput, ServidorUnitarioUncheckedUpdateWithoutManualArticlesInput>
    create: XOR<ServidorUnitarioCreateWithoutManualArticlesInput, ServidorUnitarioUncheckedCreateWithoutManualArticlesInput>
    where?: ServidorUnitarioWhereInput
  }

  export type ServidorUnitarioUpdateToOneWithWhereWithoutManualArticlesInput = {
    where?: ServidorUnitarioWhereInput
    data: XOR<ServidorUnitarioUpdateWithoutManualArticlesInput, ServidorUnitarioUncheckedUpdateWithoutManualArticlesInput>
  }

  export type ServidorUnitarioUpdateWithoutManualArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacion?: ConstelacionUpdateOneRequiredWithoutServidoresNestedInput
    secciones?: SeccionUpdateManyWithoutServidorNestedInput
    noticiasConfig?: NoticiasConfigUpdateOneWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUpdateManyWithoutServidorNestedInput
    casos?: CasoUpdateManyWithoutServidorNestedInput
  }

  export type ServidorUnitarioUncheckedUpdateWithoutManualArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacionId?: StringFieldUpdateOperationsInput | string
    secciones?: SeccionUncheckedUpdateManyWithoutServidorNestedInput
    noticiasConfig?: NoticiasConfigUncheckedUpdateOneWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUncheckedUpdateManyWithoutServidorNestedInput
    casos?: CasoUncheckedUpdateManyWithoutServidorNestedInput
  }

  export type CasoCreateWithoutArchivosInput = {
    id?: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutCasosInput
    profesional: ProfesionalCreateNestedOneWithoutCasosInput
    servidor: ServidorUnitarioCreateNestedOneWithoutCasosInput
    chat?: ChatCreateNestedOneWithoutCasoInput
    reportes?: ReporteCreateNestedManyWithoutCasoInput
  }

  export type CasoUncheckedCreateWithoutArchivosInput = {
    id?: string
    clienteId: string
    profesionalId: string
    servidorId: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    chat?: ChatUncheckedCreateNestedOneWithoutCasoInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutCasoInput
  }

  export type CasoCreateOrConnectWithoutArchivosInput = {
    where: CasoWhereUniqueInput
    create: XOR<CasoCreateWithoutArchivosInput, CasoUncheckedCreateWithoutArchivosInput>
  }

  export type ClienteCreateWithoutArchivosInput = {
    id?: string
    usuario: UsuarioCreateNestedOneWithoutClientesInput
    servidor: ServidorUnitarioCreateNestedOneWithoutClientesInput
    casos?: CasoCreateNestedManyWithoutClienteInput
    reportes?: ReporteCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutArchivosInput = {
    id?: string
    usuarioId: string
    servidorId: string
    casos?: CasoUncheckedCreateNestedManyWithoutClienteInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutArchivosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutArchivosInput, ClienteUncheckedCreateWithoutArchivosInput>
  }

  export type ProfesionalCreateWithoutArchivosInput = {
    id?: string
    usuario: UsuarioCreateNestedOneWithoutProfesionalesInput
    servidor: ServidorUnitarioCreateNestedOneWithoutProfesionalesInput
    casos?: CasoCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateWithoutArchivosInput = {
    id?: string
    usuarioId: string
    servidorId: string
    casos?: CasoUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalCreateOrConnectWithoutArchivosInput = {
    where: ProfesionalWhereUniqueInput
    create: XOR<ProfesionalCreateWithoutArchivosInput, ProfesionalUncheckedCreateWithoutArchivosInput>
  }

  export type CasoUpsertWithoutArchivosInput = {
    update: XOR<CasoUpdateWithoutArchivosInput, CasoUncheckedUpdateWithoutArchivosInput>
    create: XOR<CasoCreateWithoutArchivosInput, CasoUncheckedCreateWithoutArchivosInput>
    where?: CasoWhereInput
  }

  export type CasoUpdateToOneWithWhereWithoutArchivosInput = {
    where?: CasoWhereInput
    data: XOR<CasoUpdateWithoutArchivosInput, CasoUncheckedUpdateWithoutArchivosInput>
  }

  export type CasoUpdateWithoutArchivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutCasosNestedInput
    profesional?: ProfesionalUpdateOneRequiredWithoutCasosNestedInput
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutCasosNestedInput
    chat?: ChatUpdateOneWithoutCasoNestedInput
    reportes?: ReporteUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateWithoutArchivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    profesionalId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUncheckedUpdateOneWithoutCasoNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutCasoNestedInput
  }

  export type ClienteUpsertWithoutArchivosInput = {
    update: XOR<ClienteUpdateWithoutArchivosInput, ClienteUncheckedUpdateWithoutArchivosInput>
    create: XOR<ClienteCreateWithoutArchivosInput, ClienteUncheckedCreateWithoutArchivosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutArchivosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutArchivosInput, ClienteUncheckedUpdateWithoutArchivosInput>
  }

  export type ClienteUpdateWithoutArchivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutClientesNestedInput
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutClientesNestedInput
    casos?: CasoUpdateManyWithoutClienteNestedInput
    reportes?: ReporteUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutArchivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    casos?: CasoUncheckedUpdateManyWithoutClienteNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ProfesionalUpsertWithoutArchivosInput = {
    update: XOR<ProfesionalUpdateWithoutArchivosInput, ProfesionalUncheckedUpdateWithoutArchivosInput>
    create: XOR<ProfesionalCreateWithoutArchivosInput, ProfesionalUncheckedCreateWithoutArchivosInput>
    where?: ProfesionalWhereInput
  }

  export type ProfesionalUpdateToOneWithWhereWithoutArchivosInput = {
    where?: ProfesionalWhereInput
    data: XOR<ProfesionalUpdateWithoutArchivosInput, ProfesionalUncheckedUpdateWithoutArchivosInput>
  }

  export type ProfesionalUpdateWithoutArchivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutProfesionalesNestedInput
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutProfesionalesNestedInput
    casos?: CasoUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateWithoutArchivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    casos?: CasoUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type CasoCreateWithoutReportesInput = {
    id?: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutCasosInput
    profesional: ProfesionalCreateNestedOneWithoutCasosInput
    servidor: ServidorUnitarioCreateNestedOneWithoutCasosInput
    chat?: ChatCreateNestedOneWithoutCasoInput
    archivos?: ArchivoCreateNestedManyWithoutCasoInput
  }

  export type CasoUncheckedCreateWithoutReportesInput = {
    id?: string
    clienteId: string
    profesionalId: string
    servidorId: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    chat?: ChatUncheckedCreateNestedOneWithoutCasoInput
    archivos?: ArchivoUncheckedCreateNestedManyWithoutCasoInput
  }

  export type CasoCreateOrConnectWithoutReportesInput = {
    where: CasoWhereUniqueInput
    create: XOR<CasoCreateWithoutReportesInput, CasoUncheckedCreateWithoutReportesInput>
  }

  export type ClienteCreateWithoutReportesInput = {
    id?: string
    usuario: UsuarioCreateNestedOneWithoutClientesInput
    servidor: ServidorUnitarioCreateNestedOneWithoutClientesInput
    casos?: CasoCreateNestedManyWithoutClienteInput
    archivos?: ArchivoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutReportesInput = {
    id?: string
    usuarioId: string
    servidorId: string
    casos?: CasoUncheckedCreateNestedManyWithoutClienteInput
    archivos?: ArchivoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutReportesInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutReportesInput, ClienteUncheckedCreateWithoutReportesInput>
  }

  export type CasoUpsertWithoutReportesInput = {
    update: XOR<CasoUpdateWithoutReportesInput, CasoUncheckedUpdateWithoutReportesInput>
    create: XOR<CasoCreateWithoutReportesInput, CasoUncheckedCreateWithoutReportesInput>
    where?: CasoWhereInput
  }

  export type CasoUpdateToOneWithWhereWithoutReportesInput = {
    where?: CasoWhereInput
    data: XOR<CasoUpdateWithoutReportesInput, CasoUncheckedUpdateWithoutReportesInput>
  }

  export type CasoUpdateWithoutReportesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutCasosNestedInput
    profesional?: ProfesionalUpdateOneRequiredWithoutCasosNestedInput
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutCasosNestedInput
    chat?: ChatUpdateOneWithoutCasoNestedInput
    archivos?: ArchivoUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateWithoutReportesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    profesionalId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUncheckedUpdateOneWithoutCasoNestedInput
    archivos?: ArchivoUncheckedUpdateManyWithoutCasoNestedInput
  }

  export type ClienteUpsertWithoutReportesInput = {
    update: XOR<ClienteUpdateWithoutReportesInput, ClienteUncheckedUpdateWithoutReportesInput>
    create: XOR<ClienteCreateWithoutReportesInput, ClienteUncheckedCreateWithoutReportesInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutReportesInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutReportesInput, ClienteUncheckedUpdateWithoutReportesInput>
  }

  export type ClienteUpdateWithoutReportesInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutClientesNestedInput
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutClientesNestedInput
    casos?: CasoUpdateManyWithoutClienteNestedInput
    archivos?: ArchivoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutReportesInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    casos?: CasoUncheckedUpdateManyWithoutClienteNestedInput
    archivos?: ArchivoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ServidorUnitarioCreateWithoutConstelacionInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    secciones?: SeccionCreateNestedManyWithoutServidorInput
    noticiasConfig?: NoticiasConfigCreateNestedOneWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaCreateNestedManyWithoutServidorInput
    manualArticles?: ManualArticleCreateNestedManyWithoutServidorInput
    clientes?: ClienteCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalCreateNestedManyWithoutServidorInput
    casos?: CasoCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioUncheckedCreateWithoutConstelacionInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    secciones?: SeccionUncheckedCreateNestedManyWithoutServidorInput
    noticiasConfig?: NoticiasConfigUncheckedCreateNestedOneWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedCreateNestedManyWithoutServidorInput
    manualArticles?: ManualArticleUncheckedCreateNestedManyWithoutServidorInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalUncheckedCreateNestedManyWithoutServidorInput
    casos?: CasoUncheckedCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioCreateOrConnectWithoutConstelacionInput = {
    where: ServidorUnitarioWhereUniqueInput
    create: XOR<ServidorUnitarioCreateWithoutConstelacionInput, ServidorUnitarioUncheckedCreateWithoutConstelacionInput>
  }

  export type ServidorUnitarioCreateManyConstelacionInputEnvelope = {
    data: ServidorUnitarioCreateManyConstelacionInput | ServidorUnitarioCreateManyConstelacionInput[]
    skipDuplicates?: boolean
  }

  export type ServidorUnitarioUpsertWithWhereUniqueWithoutConstelacionInput = {
    where: ServidorUnitarioWhereUniqueInput
    update: XOR<ServidorUnitarioUpdateWithoutConstelacionInput, ServidorUnitarioUncheckedUpdateWithoutConstelacionInput>
    create: XOR<ServidorUnitarioCreateWithoutConstelacionInput, ServidorUnitarioUncheckedCreateWithoutConstelacionInput>
  }

  export type ServidorUnitarioUpdateWithWhereUniqueWithoutConstelacionInput = {
    where: ServidorUnitarioWhereUniqueInput
    data: XOR<ServidorUnitarioUpdateWithoutConstelacionInput, ServidorUnitarioUncheckedUpdateWithoutConstelacionInput>
  }

  export type ServidorUnitarioUpdateManyWithWhereWithoutConstelacionInput = {
    where: ServidorUnitarioScalarWhereInput
    data: XOR<ServidorUnitarioUpdateManyMutationInput, ServidorUnitarioUncheckedUpdateManyWithoutConstelacionInput>
  }

  export type ServidorUnitarioScalarWhereInput = {
    AND?: ServidorUnitarioScalarWhereInput | ServidorUnitarioScalarWhereInput[]
    OR?: ServidorUnitarioScalarWhereInput[]
    NOT?: ServidorUnitarioScalarWhereInput | ServidorUnitarioScalarWhereInput[]
    id?: StringFilter<"ServidorUnitario"> | string
    dominio?: StringFilter<"ServidorUnitario"> | string
    nombre?: StringFilter<"ServidorUnitario"> | string
    apiToken?: StringFilter<"ServidorUnitario"> | string
    requiereActualizacion?: BoolFilter<"ServidorUnitario"> | boolean
    constelacionId?: StringFilter<"ServidorUnitario"> | string
  }

  export type ServidorUnitarioCreateWithoutSeccionesInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacion: ConstelacionCreateNestedOneWithoutServidoresInput
    noticiasConfig?: NoticiasConfigCreateNestedOneWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaCreateNestedManyWithoutServidorInput
    manualArticles?: ManualArticleCreateNestedManyWithoutServidorInput
    clientes?: ClienteCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalCreateNestedManyWithoutServidorInput
    casos?: CasoCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioUncheckedCreateWithoutSeccionesInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
    constelacionId: string
    noticiasConfig?: NoticiasConfigUncheckedCreateNestedOneWithoutServidorInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedCreateNestedManyWithoutServidorInput
    manualArticles?: ManualArticleUncheckedCreateNestedManyWithoutServidorInput
    clientes?: ClienteUncheckedCreateNestedManyWithoutServidorInput
    profesionales?: ProfesionalUncheckedCreateNestedManyWithoutServidorInput
    casos?: CasoUncheckedCreateNestedManyWithoutServidorInput
  }

  export type ServidorUnitarioCreateOrConnectWithoutSeccionesInput = {
    where: ServidorUnitarioWhereUniqueInput
    create: XOR<ServidorUnitarioCreateWithoutSeccionesInput, ServidorUnitarioUncheckedCreateWithoutSeccionesInput>
  }

  export type ServidorUnitarioUpsertWithoutSeccionesInput = {
    update: XOR<ServidorUnitarioUpdateWithoutSeccionesInput, ServidorUnitarioUncheckedUpdateWithoutSeccionesInput>
    create: XOR<ServidorUnitarioCreateWithoutSeccionesInput, ServidorUnitarioUncheckedCreateWithoutSeccionesInput>
    where?: ServidorUnitarioWhereInput
  }

  export type ServidorUnitarioUpdateToOneWithWhereWithoutSeccionesInput = {
    where?: ServidorUnitarioWhereInput
    data: XOR<ServidorUnitarioUpdateWithoutSeccionesInput, ServidorUnitarioUncheckedUpdateWithoutSeccionesInput>
  }

  export type ServidorUnitarioUpdateWithoutSeccionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacion?: ConstelacionUpdateOneRequiredWithoutServidoresNestedInput
    noticiasConfig?: NoticiasConfigUpdateOneWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUpdateManyWithoutServidorNestedInput
    manualArticles?: ManualArticleUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUpdateManyWithoutServidorNestedInput
    casos?: CasoUpdateManyWithoutServidorNestedInput
  }

  export type ServidorUnitarioUncheckedUpdateWithoutSeccionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    constelacionId?: StringFieldUpdateOperationsInput | string
    noticiasConfig?: NoticiasConfigUncheckedUpdateOneWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedUpdateManyWithoutServidorNestedInput
    manualArticles?: ManualArticleUncheckedUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUncheckedUpdateManyWithoutServidorNestedInput
    casos?: CasoUncheckedUpdateManyWithoutServidorNestedInput
  }

  export type ClienteCreateManyUsuarioInput = {
    id?: string
    servidorId: string
  }

  export type ProfesionalCreateManyUsuarioInput = {
    id?: string
    servidorId: string
  }

  export type ClienteUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutClientesNestedInput
    casos?: CasoUpdateManyWithoutClienteNestedInput
    archivos?: ArchivoUpdateManyWithoutClienteNestedInput
    reportes?: ReporteUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    casos?: CasoUncheckedUpdateManyWithoutClienteNestedInput
    archivos?: ArchivoUncheckedUpdateManyWithoutClienteNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfesionalUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutProfesionalesNestedInput
    casos?: CasoUpdateManyWithoutProfesionalNestedInput
    archivos?: ArchivoUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    casos?: CasoUncheckedUpdateManyWithoutProfesionalNestedInput
    archivos?: ArchivoUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
  }

  export type SeccionCreateManyServidorInput = {
    id?: string
    tipo: $Enums.SeccionTipo
    titulo: string
    contenido: string
    orden: number
  }

  export type FuenteAutomaticaCreateManyServidorInput = {
    id?: string
    nombre: string
    url: string
    tipo: string
  }

  export type ManualArticleCreateManyServidorInput = {
    id?: string
    titulo: string
    contenido: string
    publishedAt: Date | string
  }

  export type ClienteCreateManyServidorInput = {
    id?: string
    usuarioId: string
  }

  export type ProfesionalCreateManyServidorInput = {
    id?: string
    usuarioId: string
  }

  export type CasoCreateManyServidorInput = {
    id?: string
    clienteId: string
    profesionalId: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeccionUpdateWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumSeccionTipoFieldUpdateOperationsInput | $Enums.SeccionTipo
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type SeccionUncheckedUpdateWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumSeccionTipoFieldUpdateOperationsInput | $Enums.SeccionTipo
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type SeccionUncheckedUpdateManyWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumSeccionTipoFieldUpdateOperationsInput | $Enums.SeccionTipo
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type FuenteAutomaticaUpdateWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type FuenteAutomaticaUncheckedUpdateWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type FuenteAutomaticaUncheckedUpdateManyWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type ManualArticleUpdateWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManualArticleUncheckedUpdateWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManualArticleUncheckedUpdateManyWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUpdateWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutClientesNestedInput
    casos?: CasoUpdateManyWithoutClienteNestedInput
    archivos?: ArchivoUpdateManyWithoutClienteNestedInput
    reportes?: ReporteUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    casos?: CasoUncheckedUpdateManyWithoutClienteNestedInput
    archivos?: ArchivoUncheckedUpdateManyWithoutClienteNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateManyWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfesionalUpdateWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutProfesionalesNestedInput
    casos?: CasoUpdateManyWithoutProfesionalNestedInput
    archivos?: ArchivoUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    casos?: CasoUncheckedUpdateManyWithoutProfesionalNestedInput
    archivos?: ArchivoUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateManyWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type CasoUpdateWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutCasosNestedInput
    profesional?: ProfesionalUpdateOneRequiredWithoutCasosNestedInput
    chat?: ChatUpdateOneWithoutCasoNestedInput
    archivos?: ArchivoUpdateManyWithoutCasoNestedInput
    reportes?: ReporteUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    profesionalId?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUncheckedUpdateOneWithoutCasoNestedInput
    archivos?: ArchivoUncheckedUpdateManyWithoutCasoNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateManyWithoutServidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    profesionalId?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasoCreateManyClienteInput = {
    id?: string
    profesionalId: string
    servidorId: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArchivoCreateManyClienteInput = {
    id?: string
    casoId: string
    profesionalId?: string | null
    nombre: string
    url: string
    tipo: string
    fecha?: Date | string
  }

  export type ReporteCreateManyClienteInput = {
    id?: string
    casoId: string
    razon: string
    createdAt?: Date | string
  }

  export type CasoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profesional?: ProfesionalUpdateOneRequiredWithoutCasosNestedInput
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutCasosNestedInput
    chat?: ChatUpdateOneWithoutCasoNestedInput
    archivos?: ArchivoUpdateManyWithoutCasoNestedInput
    reportes?: ReporteUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    profesionalId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUncheckedUpdateOneWithoutCasoNestedInput
    archivos?: ArchivoUncheckedUpdateManyWithoutCasoNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    profesionalId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneRequiredWithoutArchivosNestedInput
    profesional?: ProfesionalUpdateOneWithoutArchivosNestedInput
  }

  export type ArchivoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    casoId?: StringFieldUpdateOperationsInput | string
    profesionalId?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    casoId?: StringFieldUpdateOperationsInput | string
    profesionalId?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    razon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneRequiredWithoutReportesNestedInput
  }

  export type ReporteUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    casoId?: StringFieldUpdateOperationsInput | string
    razon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    casoId?: StringFieldUpdateOperationsInput | string
    razon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasoCreateManyProfesionalInput = {
    id?: string
    clienteId: string
    servidorId: string
    status?: $Enums.CasoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArchivoCreateManyProfesionalInput = {
    id?: string
    casoId: string
    clienteId?: string | null
    nombre: string
    url: string
    tipo: string
    fecha?: Date | string
  }

  export type CasoUpdateWithoutProfesionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutCasosNestedInput
    servidor?: ServidorUnitarioUpdateOneRequiredWithoutCasosNestedInput
    chat?: ChatUpdateOneWithoutCasoNestedInput
    archivos?: ArchivoUpdateManyWithoutCasoNestedInput
    reportes?: ReporteUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateWithoutProfesionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUncheckedUpdateOneWithoutCasoNestedInput
    archivos?: ArchivoUncheckedUpdateManyWithoutCasoNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateManyWithoutProfesionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    servidorId?: StringFieldUpdateOperationsInput | string
    status?: EnumCasoStatusFieldUpdateOperationsInput | $Enums.CasoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoUpdateWithoutProfesionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneRequiredWithoutArchivosNestedInput
    cliente?: ClienteUpdateOneWithoutArchivosNestedInput
  }

  export type ArchivoUncheckedUpdateWithoutProfesionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    casoId?: StringFieldUpdateOperationsInput | string
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoUncheckedUpdateManyWithoutProfesionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    casoId?: StringFieldUpdateOperationsInput | string
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoCreateManyCasoInput = {
    id?: string
    clienteId?: string | null
    profesionalId?: string | null
    nombre: string
    url: string
    tipo: string
    fecha?: Date | string
  }

  export type ReporteCreateManyCasoInput = {
    id?: string
    clienteId: string
    razon: string
    createdAt?: Date | string
  }

  export type ArchivoUpdateWithoutCasoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneWithoutArchivosNestedInput
    profesional?: ProfesionalUpdateOneWithoutArchivosNestedInput
  }

  export type ArchivoUncheckedUpdateWithoutCasoInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    profesionalId?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoUncheckedUpdateManyWithoutCasoInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    profesionalId?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteUpdateWithoutCasoInput = {
    id?: StringFieldUpdateOperationsInput | string
    razon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutReportesNestedInput
  }

  export type ReporteUncheckedUpdateWithoutCasoInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    razon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteUncheckedUpdateManyWithoutCasoInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    razon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeCreateManyChatInput = {
    id?: string
    remitente: $Enums.Remitente
    contenido: string
    fecha?: Date | string
  }

  export type MensajeUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    remitente?: EnumRemitenteFieldUpdateOperationsInput | $Enums.Remitente
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    remitente?: EnumRemitenteFieldUpdateOperationsInput | $Enums.Remitente
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    remitente?: EnumRemitenteFieldUpdateOperationsInput | $Enums.Remitente
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServidorUnitarioCreateManyConstelacionInput = {
    id?: string
    dominio: string
    nombre: string
    apiToken: string
    requiereActualizacion?: boolean
  }

  export type ServidorUnitarioUpdateWithoutConstelacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    secciones?: SeccionUpdateManyWithoutServidorNestedInput
    noticiasConfig?: NoticiasConfigUpdateOneWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUpdateManyWithoutServidorNestedInput
    manualArticles?: ManualArticleUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUpdateManyWithoutServidorNestedInput
    casos?: CasoUpdateManyWithoutServidorNestedInput
  }

  export type ServidorUnitarioUncheckedUpdateWithoutConstelacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
    secciones?: SeccionUncheckedUpdateManyWithoutServidorNestedInput
    noticiasConfig?: NoticiasConfigUncheckedUpdateOneWithoutServidorNestedInput
    fuentesAutomaticas?: FuenteAutomaticaUncheckedUpdateManyWithoutServidorNestedInput
    manualArticles?: ManualArticleUncheckedUpdateManyWithoutServidorNestedInput
    clientes?: ClienteUncheckedUpdateManyWithoutServidorNestedInput
    profesionales?: ProfesionalUncheckedUpdateManyWithoutServidorNestedInput
    casos?: CasoUncheckedUpdateManyWithoutServidorNestedInput
  }

  export type ServidorUnitarioUncheckedUpdateManyWithoutConstelacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    dominio?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    requiereActualizacion?: BoolFieldUpdateOperationsInput | boolean
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