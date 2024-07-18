import { registerEnumType } from "@nestjs/graphql";

export enum Message {
    SOMETHING_WENT_WRONG = ' Something Went Wrong!!!!!',
	NO_DATA_FOUND = 'Noo! Data Found!',
	CREATE_FAILED = 'Create FAILED!',
	UPDATE_FAILED = 'Update FAILED!',
	REMOVE_FAILED = 'Remove FAILED!',
	UPLOAD_FAILED = 'Upload FAILED!',
	BAD_REQUEST = 'Bad Request!!!',

	USED_MEMBER_NICK_OR_PHONE = "Alerday used member nick or phone!",
	NO_MEMBER_NICK = 'No member With that Nick!',
	BLOCKED_USER = 'Oh Sorry! You Have been Blocked!',
	WRONG_PASSWORD = 'Wrong Password, Try Another!',
	NOT_AUTHENTICATED = 'You are Not Authenticated, Please Login First!',
	TOKEN_NOT_EXIST = 'Bearer Token is Not Provided!',
	ONLY_SPESIFIC_ROLES_ALLOWED = 'Allowed Only For Members With Spesific Roles!',
	NOT_ALLOWED_REQUEST = 'Not Allowed Request!',
	PROVIDE_ALLOWED_FORMAT = 'Please Provide JPG, JPEG or PNG format Images!',
	SELF_SUBSCRIPTION_DENIED = 'You are trying Subscribe to Yourself, Self subscribtion is Denied!',
}

export enum Direction {
	ASC = 1,
	DESC = -1,

}

registerEnumType(Direction, {
	name: 'Direction',
});