// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies;

public class Root
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject rootMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "MyFirstModule.Root";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Response("Response"),
		Editable("Editable"),
		Refresh("Refresh");

		private java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public Root(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "MyFirstModule.Root"));
	}

	protected Root(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject rootMendixObject)
	{
		if (rootMendixObject == null)
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		if (!com.mendix.core.Core.isSubClassOf("MyFirstModule.Root", rootMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a MyFirstModule.Root");

		this.rootMendixObject = rootMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'Root.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static myfirstmodule.proxies.Root initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return myfirstmodule.proxies.Root.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static myfirstmodule.proxies.Root initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new myfirstmodule.proxies.Root(context, mendixObject);
	}

	public static myfirstmodule.proxies.Root load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return myfirstmodule.proxies.Root.initialize(context, mendixObject);
	}

	public static java.util.List<myfirstmodule.proxies.Root> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		java.util.List<myfirstmodule.proxies.Root> result = new java.util.ArrayList<myfirstmodule.proxies.Root>();
		for (com.mendix.systemwideinterfaces.core.IMendixObject obj : com.mendix.core.Core.retrieveXPathQuery(context, "//MyFirstModule.Root" + xpathConstraint))
			result.add(myfirstmodule.proxies.Root.initialize(context, obj));
		return result;
	}

	/**
	 * Commit the changes made on this proxy object.
	 */
	public final void commit() throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Commit the changes made on this proxy object using the specified context.
	 */
	public final void commit(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Delete the object.
	 */
	public final void delete()
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}

	/**
	 * Delete the object using the specified context.
	 */
	public final void delete(com.mendix.systemwideinterfaces.core.IContext context)
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}
	/**
	 * @return value of Response
	 */
	public final java.lang.String getResponse()
	{
		return getResponse(getContext());
	}

	/**
	 * @param context
	 * @return value of Response
	 */
	public final java.lang.String getResponse(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Response.toString());
	}

	/**
	 * Set value of Response
	 * @param response
	 */
	public final void setResponse(java.lang.String response)
	{
		setResponse(getContext(), response);
	}

	/**
	 * Set value of Response
	 * @param context
	 * @param response
	 */
	public final void setResponse(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String response)
	{
		getMendixObject().setValue(context, MemberNames.Response.toString(), response);
	}

	/**
	 * @return value of Editable
	 */
	public final java.lang.Boolean getEditable()
	{
		return getEditable(getContext());
	}

	/**
	 * @param context
	 * @return value of Editable
	 */
	public final java.lang.Boolean getEditable(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Boolean) getMendixObject().getValue(context, MemberNames.Editable.toString());
	}

	/**
	 * Set value of Editable
	 * @param editable
	 */
	public final void setEditable(java.lang.Boolean editable)
	{
		setEditable(getContext(), editable);
	}

	/**
	 * Set value of Editable
	 * @param context
	 * @param editable
	 */
	public final void setEditable(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Boolean editable)
	{
		getMendixObject().setValue(context, MemberNames.Editable.toString(), editable);
	}

	/**
	 * @return value of Refresh
	 */
	public final java.lang.Boolean getRefresh()
	{
		return getRefresh(getContext());
	}

	/**
	 * @param context
	 * @return value of Refresh
	 */
	public final java.lang.Boolean getRefresh(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Boolean) getMendixObject().getValue(context, MemberNames.Refresh.toString());
	}

	/**
	 * Set value of Refresh
	 * @param refresh
	 */
	public final void setRefresh(java.lang.Boolean refresh)
	{
		setRefresh(getContext(), refresh);
	}

	/**
	 * Set value of Refresh
	 * @param context
	 * @param refresh
	 */
	public final void setRefresh(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Boolean refresh)
	{
		getMendixObject().setValue(context, MemberNames.Refresh.toString(), refresh);
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return rootMendixObject;
	}

	/**
	 * @return the IContext instance of this proxy, or null if no IContext instance was specified at initialization.
	 */
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this)
			return true;

		if (obj != null && getClass().equals(obj.getClass()))
		{
			final myfirstmodule.proxies.Root that = (myfirstmodule.proxies.Root) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static java.lang.String getType()
	{
		return "MyFirstModule.Root";
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}
