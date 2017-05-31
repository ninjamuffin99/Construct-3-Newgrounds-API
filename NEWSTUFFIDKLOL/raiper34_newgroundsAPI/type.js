"use strict";

{
	const PLUGIN_CLASS = SDK.Plugins.NewgroundsAPI;

	PLUGIN_CLASS.Type = class NewgroundsAPIType extends SDK.ITypeBase
	{
		constructor(sdkPlugin, iObjectType)
		{
			super(sdkPlugin, iObjectType);
		}
	};
}
