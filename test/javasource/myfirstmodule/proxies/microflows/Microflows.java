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

public class Microflows
{
	// These are the microflows for the MyFirstModule module
	public static void aCT_Button_Clicked(IContext context, myfirstmodule.proxies.Button _button)
	{
		Map<java.lang.String, Object> params = new HashMap<>();
		params.put("Button", _button == null ? null : _button.getMendixObject());
		Core.microflowCall("MyFirstModule.ACT_Button_Clicked").withParams(params).execute(context);
	}
}