// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies.microflows;

import java.util.HashMap;
import java.util.Map;
import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.MendixRuntimeException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class Microflows
{
	// These are the microflows for the MyFirstModule module
	public static void aCT_Button_Click_KeyInt(IContext context, myfirstmodule.proxies.Root _root)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		params.put("Root", _root == null ? null : _root.getMendixObject());
		Core.microflowCall("MyFirstModule.ACT_Button_Click_KeyInt").withParams(params).execute(context);
	}
	public static void aCT_Button_Click_KeyString(IContext context, myfirstmodule.proxies.Root _root)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		params.put("Root", _root == null ? null : _root.getMendixObject());
		Core.microflowCall("MyFirstModule.ACT_Button_Click_KeyString").withParams(params).execute(context);
	}
	public static void aCT_Button_Save(IContext context, myfirstmodule.proxies.Button _button)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		params.put("Button", _button == null ? null : _button.getMendixObject());
		Core.microflowCall("MyFirstModule.ACT_Button_Save").withParams(params).execute(context);
	}
	public static java.util.List<myfirstmodule.proxies.Button> dS_Root_Buttons(IContext context, myfirstmodule.proxies.Root _root)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		params.put("Root", _root == null ? null : _root.getMendixObject());
		java.util.List<IMendixObject> objs = Core.microflowCall("MyFirstModule.DS_Root_Buttons").withParams(params).execute(context);
		java.util.List<myfirstmodule.proxies.Button> result = null;
		if (objs != null)
		{
			result = new java.util.ArrayList<>();
			for (IMendixObject obj : objs)
				result.add(myfirstmodule.proxies.Button.initialize(context, obj));
		}
		return result;
	}
	public static myfirstmodule.proxies.Root dS_Root_GetOrCreate(IContext context)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		IMendixObject result = (IMendixObject)Core.microflowCall("MyFirstModule.DS_Root_GetOrCreate").withParams(params).execute(context);
		return result == null ? null : myfirstmodule.proxies.Root.initialize(context, result);
	}
}