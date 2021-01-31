const Decimal = require("decimal.js");
const { AssetDiff } = require("./AssetDiff");
const { AssetEntry } = require("./AssetEntry");
const { AssetInfo } = require("./AssetInfo");
const { AssetMetadataRequest } = require("./AssetMetadataRequest");
const { AssetUploadData } = require("./AssetUploadData");
const {
	AssetVariantComputationTask,
} = require("./AssetVariantComputationTask");
const { BatchQuery } = require("./BatchQuery");
const { CancellationTokenSource } = require("./CancellationTokenSource");
const { CheckContactData } = require("./CheckContactData");
const { ChildRecordDiff } = require("./ChildRecordDiff");
const { StringBuilder } = require("./StringBuilder");
const { TimeSpan } = require("./TimeSpan");
const { Out } = require("./Out.js");
const { AuthenticationHeaderValue } = require("./AuthenticationHeaderValue");
const { HTTP_CLIENT } = require("./HTTP_CLIENT");
const { CloudResult } = require("./CloudResult");
const { UserTags } = require("./UserTags");
const { Uri } = require("./Uri");
const { Enumerable } = require("./Enumerable");
const { RecordId } = require("./RecordId");
const { MessageType } = require("./MessageType");
const { ServerStatus } = require("./ServerStatus");
const { AccountType } = require("./AccountType");
const { List } = require("./List");
const { Dictionary } = require("./Dictionary");
const { HashSet } = require("./HashSet");
const { Char } = require("./Char");
const { HttpMethod } = require("./HttpMethod");
const { OnlineStatus } = require("./OnlineStatus");
const { TransactionType } = require("./TransactionType");
const { AssetVariantEntityType } = require("./AssetVariantEntityType");
const { OwnerType } = require("./OwnerType");
const { FriendStatus } = require("./FriendStatus");
const { Path } = require("./Path");
const { AssetUtil } = require("./AssetUtil");
const { CloudXInterface } = require("./CloudXInterface");
const { MessageManager } = require("./MessageManager");
const { Member } = require("./Member");
const { FriendManager } = require("./FriendManager");
const { Endpoints } = require("./Endpoints");
const { Group } = require("./Group");
const { RecordUtil } = require("./RecordUtil");
const { Record } = require("./Record");
const { IdUtil } = require("./IdUtil");
const { User } = require("./User");
const { SearchParameters } = require("./SearchParameters");
const { Message } = require("./Message");
const { NeosSession } = require("./NeosSession");
const { UserStatus } = require("./UserStatus");
const { TransactionManager } = require("./TransactionManager");
const { CreditTransaction } = require("./CreditTransaction");
const { SearchQueryParser } = require("./SearchQueryParser");
const { SearchResults } = require("./SearchResults");
const { SessionInfo } = require("./SessionInfo");
const { OutputDevice } = require("./OutputDevice");
const CloudX = {
	Shared: {
		AccountType,
		AssetDiff,
		AssetEntry,
		AssetInfo,
		AssetMetadataRequest,
		AssetUploadData,
		AssetUtil,
		AssetVariantComputationTask,
		AssetVariantEntityType,
		AuthenticationHeaderValue,
		BatchQuery,
		CheckContactData,
		ChildRecordDiff,
		CloudResult,
		CloudXInterface,
		CreditTransaction,
		Endpoints,
		FriendManager,
		FriendStatus,
		Group,

		IdUtil,
		Member,
		Message,
		MessageManager,
		MessageType,
		NeosSession,
		OnlineStatus,
		OwnerType,
		Record,
		RecordId,
		RecordUtil,
		SearchParameters,
		SearchQueryParser,
		SearchResults,
		ServerStatus,
		SessionInfo,
		TransactionManager,
		TransactionType,
		User,
		UserStatus,
		UserTags,
		OutputDevice,
	},
	Util: {
		CancellationTokenSource,
		Char,
		Decimal,
		Dictionary,
		Enumerable,
		HTTP_CLIENT,
		HashSet,
		HttpMethod,
		List,
		Out,
		Path,
		StringBuilder,
		TimeSpan,
		Uri,
	},
};
module.exports = {
	CloudX,
};
