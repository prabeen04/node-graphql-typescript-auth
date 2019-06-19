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
forgotPassword: boolean;
login: Array<IError> | null;
register: Array<IError> | null;
verifyEmail: boolean;
}

interface IForgotPasswordOnMutationArguments {
email: string;
}

interface ILoginOnMutationArguments {
email: string;
password: string;
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

interface IVerifyEmailOnMutationArguments {
token: string;
}

interface IError {
__typename: "Error";
path: string;
message: string;
}

interface IMutataion {
__typename: "Mutataion";
changePassword: boolean;
}

interface IChangePasswordOnMutataionArguments {
oldPassword: string;
newPassword: string;
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
