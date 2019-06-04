// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
hello: string | null;
}

interface IMutation {
__typename: "Mutation";
register: boolean | null;
}

interface IRegisterOnMutationArguments {
firstName?: string | null;
middleName?: string | null;
lastName: string;
email: string;
password: string;
dob?: string | null;
phoneNo?: string | null;
}

interface IUser {
__typename: "User";
id: string;
firstName: string | null;
middleName: string | null;
lastName: string;
email: string;
phoneNo: string | null;
dob: string | null;
}
}

// tslint:enable