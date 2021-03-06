"use strict";
/**
 * @packageDocumentation
 * @module @taquito/beacon-wallet
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
// PATCHes
// Object.defineProperty(exports, "__esModule", { value: true });
var exports = window
exports.BeaconWallet = exports.MissingRequiredScopes = exports.BeaconWalletNotInitialized = void 0;
// var beacon_sdk_1 = require("@airgap/beacon-sdk");
// var taquito_1 = require("@taquito/taquito");
var beacon_sdk_1 = beacon;
var taquito_1 = taquito;
var BeaconWalletNotInitialized = /** @class */ (function () {
    function BeaconWalletNotInitialized() {
        this.name = 'BeaconWalletNotInitialized';
        this.message = 'You need to initialize BeaconWallet by calling beaconWallet.requestPermissions first';
    }
    return BeaconWalletNotInitialized;
}());
exports.BeaconWalletNotInitialized = BeaconWalletNotInitialized;
var MissingRequiredScopes = /** @class */ (function () {
    function MissingRequiredScopes(requiredScopes) {
        this.requiredScopes = requiredScopes;
        this.name = 'MissingRequiredScopes';
        this.message = "Required permissions scopes were not granted: " + requiredScopes.join(',');
    }
    return MissingRequiredScopes;
}());
exports.MissingRequiredScopes = MissingRequiredScopes;
var BeaconWallet = /** @class */ (function () {
    function BeaconWallet(options) {
        this.client = new beacon_sdk_1.DAppClient(options);
    }
    BeaconWallet.prototype.validateRequiredScopesOrFail = function (permissionScopes, requiredScopes) {
        var e_1, _a;
        var mandatoryScope = new Set(requiredScopes);
        try {
            for (var permissionScopes_1 = __values(permissionScopes), permissionScopes_1_1 = permissionScopes_1.next(); !permissionScopes_1_1.done; permissionScopes_1_1 = permissionScopes_1.next()) {
                var scope = permissionScopes_1_1.value;
                if (mandatoryScope.has(scope)) {
                    mandatoryScope.delete(scope);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (permissionScopes_1_1 && !permissionScopes_1_1.done && (_a = permissionScopes_1.return)) _a.call(permissionScopes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (mandatoryScope.size > 0) {
            throw new MissingRequiredScopes(Array.from(mandatoryScope));
        }
    };
    BeaconWallet.prototype.requestPermissions = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.requestPermissions(request)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BeaconWallet.prototype.removeFeeAndLimit = function (op) {
        var fee = op.fee, gas_limit = op.gas_limit, storage_limit = op.storage_limit, rest = __rest(op, ["fee", "gas_limit", "storage_limit"]);
        return rest;
    };
    BeaconWallet.prototype.getPKH = function () {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.getActiveAccount()];
                    case 1:
                        account = _a.sent();
                        if (!account) {
                            throw new BeaconWalletNotInitialized();
                        }
                        return [2 /*return*/, account.address];
                }
            });
        });
    };
    BeaconWallet.prototype.mapTransferParamsToWalletParams = function (params) {
        return taquito_1.createTransferOperation(params);
    };
    BeaconWallet.prototype.mapOriginateParamsToWalletParams = function (params) {
        return taquito_1.createOriginationOperation(params);
    };
    BeaconWallet.prototype.mapDelegateParamsToWalletParams = function (params) {
        return taquito_1.createSetDelegateOperation(params);
    };
    BeaconWallet.prototype.sendOperations = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var account, permissions, transactionHash;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.getActiveAccount()];
                    case 1:
                        account = _a.sent();
                        if (!account) {
                            throw new BeaconWalletNotInitialized();
                        }
                        permissions = account.scopes;
                        this.validateRequiredScopesOrFail(permissions, [beacon_sdk_1.PermissionScope.OPERATION_REQUEST]);
                        return [4 /*yield*/, this.client.requestOperation({
                                operationDetails: params.map(function (op) { return (__assign({}, _this.removeFeeAndLimit(op))); }),
                            })];
                    case 2:
                        transactionHash = (_a.sent()).transactionHash;
                        return [2 /*return*/, transactionHash];
                }
            });
        });
    };
    /**
     *
     * @description Removes all beacon values from the storage. After using this method, this instance is no longer usable.
     * You will have to instanciate a new BeaconWallet.
     */
    BeaconWallet.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.destroy()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @description This method removes the active account from local storage by setting it to undefined.
     */
    BeaconWallet.prototype.clearActiveAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.setActiveAccount()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return BeaconWallet;
}());
exports.BeaconWallet = BeaconWallet;
//# sourceMappingURL=taquito-beacon-wallet.js.map