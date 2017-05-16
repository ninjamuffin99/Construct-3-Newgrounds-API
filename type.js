"use strict";

{
	const PLUGIN_CLASS = SDK.Plugins.NewgroundsAPI;
	
	PLUGIN_CLASS.Type = class NewgroundsAPI extends SDK.ITypeBase
	{
		constructor(sdkPlugin, iObjectType)
		{
			super(sdkPlugin, iObjectType);
		}
	};
}