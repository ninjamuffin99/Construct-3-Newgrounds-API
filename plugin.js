"use strict";

{
	////////////////////////////////////////////
	// The plugin ID is how Construct identifies different kinds of plugins.
	// *** NEVER CHANGE THE PLUGIN ID! ***
	// If you change the plugin ID after releasing the plugin, Construct will think it is an entirely different
	// plugin and assume it is incompatible with the old one, and YOU WILL BREAK ALL EXISTING PROJECTS USING THE PLUGIN.
	// Only the plugin name is displayed in the editor, so to rename your plugin change the name but NOT the ID.
	// If you want to completely replace a plugin, make it deprecated (it will be hidden but old projects keep working),
	// and create an entirely new plugin with a different plugin ID.
	const PLUGIN_ID = "NewgroundsAPI";
	////////////////////////////////////////////
	
	const PLUGIN_VERSION = "1.0.0.0";
	const PLUGIN_CATEGORY = "platform-specific";
	
	let app = null;
	
	const PLUGIN_CLASS = SDK.Plugins.NewgroundsAPI = class NewgroundsAPI extends SDK.IPluginBase
	{
		constructor()
		{
			super(PLUGIN_ID);
			
			SDK.Lang.PushContext("plugins.mycustomplugin");
			
			this._info.SetName(lang(".name"));
			this._info.SetDescription(lang(".description"));
			this._info.SetVersion(PLUGIN_VERSION);
			this._info.SetCategory(PLUGIN_CATEGORY);
			this._info.SetAuthor("Scirra");
			this._info.SetHelpUrl(lang(".help-url"));
			this._info.SetIsSingleGlobal(true);
			this._info.SetIcon("Icon.png");
			
			SDK.Lang.PushContext(".properties");
			
			this._info.SetProperties([
				new SDK.PluginProperty("integer", "test-property", 0)
				
				new SDK.PluginProperty("text", "API KEY", "I have no idea what I'm doing")
				
				new SDK.PluginProperty("text", Encryption Key", "I really don't")
				
			]);
			
			SDK.Lang.PopContext();		// .properties
			
			SDK.Lang.PopContext();
			
			this._info.SetSingleGlobal(true);
		}
	};
	
	PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}