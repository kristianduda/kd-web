## Modules

<dl>
<dt><a href="#module_ajax">ajax</a></dt>
<dd></dd>
<dt><a href="#module_auth">auth</a></dt>
<dd></dd>
<dt><a href="#module_storage">storage</a></dt>
<dd></dd>
<dt><a href="#module_store">store</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#init">init(config)</a></dt>
<dd><p>Init.</p>
</dd>
<dt><a href="#getConfig">getConfig()</a> ⇒ <code>Object</code></dt>
<dd><p>Get config.</p>
</dd>
</dl>

<a name="module_ajax"></a>

## ajax

* [ajax](#module_ajax)
    * [.getById(url, id)](#module_ajax.getById) ⇒ <code>Object</code>
    * [.get(url, [filters], [sort], [page], [fields])](#module_ajax.get) ⇒ <code>Object</code>
    * [.put(url, data, id)](#module_ajax.put) ⇒ <code>Object</code>
    * [.post(url, data)](#module_ajax.post) ⇒ <code>Object</code>
    * [.delById(url, id)](#module_ajax.delById)
    * [.del(url, filters)](#module_ajax.del)

<a name="module_ajax.getById"></a>

### ajax.getById(url, id) ⇒ <code>Object</code>
Get document.

**Kind**: static method of [<code>ajax</code>](#module_ajax)  
**Returns**: <code>Object</code> - document.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | Url. |
| id | <code>string</code> | Document id. |

<a name="module_ajax.get"></a>

### ajax.get(url, [filters], [sort], [page], [fields]) ⇒ <code>Object</code>
Get collection of documents that match a specified filter.

**Kind**: static method of [<code>ajax</code>](#module_ajax)  
**Returns**: <code>Object</code> - collection of documents.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | Url. |
| [filters] | <code>Object</code> | Filters. |
| [sort] | <code>Object</code> | Sort. |
| [page] | <code>Object</code> | Page. |
| [fields] | <code>Object</code> | Fields. |

<a name="module_ajax.put"></a>

### ajax.put(url, data, id) ⇒ <code>Object</code>
Update document in collection.

**Kind**: static method of [<code>ajax</code>](#module_ajax)  
**Returns**: <code>Object</code> - document.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | Url. |
| data | <code>Object</code> | Data. |
| id | <code>string</code> | Document id. |

<a name="module_ajax.post"></a>

### ajax.post(url, data) ⇒ <code>Object</code>
Insert document to collection.

**Kind**: static method of [<code>ajax</code>](#module_ajax)  
**Returns**: <code>Object</code> - document.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | Url. |
| data | <code>Object</code> | Data. |

<a name="module_ajax.delById"></a>

### ajax.delById(url, id)
Delete document in collection.

**Kind**: static method of [<code>ajax</code>](#module_ajax)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | Url. |
| id | <code>string</code> | Document Id. |

<a name="module_ajax.del"></a>

### ajax.del(url, filters)
Delete documents in collection.

**Kind**: static method of [<code>ajax</code>](#module_ajax)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | Url. |
| filters | <code>Object</code> | Filters. |

<a name="module_auth"></a>

## auth

* [auth](#module_auth)
    * [.auth(username, password, [token])](#module_auth.auth) ⇒ <code>Object</code>
    * [.register(username, password, name)](#module_auth.register) ⇒ <code>Object</code>
    * [.oAuth(provider, code, redirectUri, [configId])](#module_auth.oAuth) ⇒ <code>Object</code>
    * [.reset(username, redirectUri)](#module_auth.reset)
    * [.updateOauth(provider, code, redirectUri)](#module_auth.updateOauth) ⇒ <code>Object</code>
    * [.generateSecret()](#module_auth.generateSecret) ⇒ <code>Object</code>
    * [.sign(data)](#module_auth.sign) ⇒ <code>Object</code>
    * [.verify(data, signature)](#module_auth.verify) ⇒ <code>boolean</code>
    * [.getUsers(filters)](#module_auth.getUsers) ⇒ <code>Object</code>
    * [.getUserCached(id)](#module_auth.getUserCached) ⇒ <code>Object</code>
    * [.getUser(id)](#module_auth.getUser) ⇒ <code>Object</code>
    * [.updateUser(id)](#module_auth.updateUser) ⇒ <code>Object</code>

<a name="module_auth.auth"></a>

### auth.auth(username, password, [token]) ⇒ <code>Object</code>
Authenticate user.

**Kind**: static method of [<code>auth</code>](#module_auth)  
**Returns**: <code>Object</code> - user and tokens.  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | Username. |
| password | <code>string</code> | Password. |
| [token] | <code>string</code> | 2FA token. |

<a name="module_auth.register"></a>

### auth.register(username, password, name) ⇒ <code>Object</code>
Register user.

**Kind**: static method of [<code>auth</code>](#module_auth)  
**Returns**: <code>Object</code> - user.  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | Username. |
| password | <code>string</code> | Password. |
| name | <code>string</code> | Name. |

<a name="module_auth.oAuth"></a>

### auth.oAuth(provider, code, redirectUri, [configId]) ⇒ <code>Object</code>
Authenticate user.

**Kind**: static method of [<code>auth</code>](#module_auth)  
**Returns**: <code>Object</code> - user and tokens.  

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>number</code> | Provider. |
| code | <code>string</code> | OAuth2 code. |
| redirectUri | <code>string</code> | Redirect uri. |
| [configId] | <code>string</code> | Config id. |

<a name="module_auth.reset"></a>

### auth.reset(username, redirectUri)
Reset password.

**Kind**: static method of [<code>auth</code>](#module_auth)  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | Username. |
| redirectUri | <code>string</code> | Redirect uri. |

<a name="module_auth.updateOauth"></a>

### auth.updateOauth(provider, code, redirectUri) ⇒ <code>Object</code>
Update user.

**Kind**: static method of [<code>auth</code>](#module_auth)  
**Returns**: <code>Object</code> - user.  

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>number</code> | Provider. |
| code | <code>string</code> | OAuth2 code. |
| redirectUri | <code>string</code> | Redirect uri. |

<a name="module_auth.generateSecret"></a>

### auth.generateSecret() ⇒ <code>Object</code>
Generate secret.

**Kind**: static method of [<code>auth</code>](#module_auth)  
**Returns**: <code>Object</code> - secret.  
<a name="module_auth.sign"></a>

### auth.sign(data) ⇒ <code>Object</code>
Sign data.

**Kind**: static method of [<code>auth</code>](#module_auth)  
**Returns**: <code>Object</code> - data.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | Data. |

<a name="module_auth.verify"></a>

### auth.verify(data, signature) ⇒ <code>boolean</code>
Verify data.

**Kind**: static method of [<code>auth</code>](#module_auth)  
**Returns**: <code>boolean</code> - res.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | Data. |
| signature | <code>string</code> | Signature. |

<a name="module_auth.getUsers"></a>

### auth.getUsers(filters) ⇒ <code>Object</code>
Get collection of users that match a specified filter.

**Kind**: static method of [<code>auth</code>](#module_auth)  
**Returns**: <code>Object</code> - collection of users.  

| Param | Type | Description |
| --- | --- | --- |
| filters | <code>Array</code> | Filters. |

<a name="module_auth.getUserCached"></a>

### auth.getUserCached(id) ⇒ <code>Object</code>
Get user from cache.

**Kind**: static method of [<code>auth</code>](#module_auth)  
**Returns**: <code>Object</code> - user.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | User id. |

<a name="module_auth.getUser"></a>

### auth.getUser(id) ⇒ <code>Object</code>
Get user.

**Kind**: static method of [<code>auth</code>](#module_auth)  
**Returns**: <code>Object</code> - user.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | User id. |

<a name="module_auth.updateUser"></a>

### auth.updateUser(id) ⇒ <code>Object</code>
Update user.

**Kind**: static method of [<code>auth</code>](#module_auth)  
**Returns**: <code>Object</code> - user.  
**Paramm**: <code>Object</code> user - User.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | User id. |

<a name="module_storage"></a>

## storage

* [storage](#module_storage)
    * [.getUser](#module_storage.getUser) ⇒ <code>Object</code>
    * [.setUser](#module_storage.setUser)
    * [.removeUser](#module_storage.removeUser)

<a name="module_storage.getUser"></a>

### storage.getUser ⇒ <code>Object</code>
Get user from session storage.

**Kind**: static constant of [<code>storage</code>](#module_storage)  
**Returns**: <code>Object</code> - User.  
<a name="module_storage.setUser"></a>

### storage.setUser
Set user to session storage.

**Kind**: static constant of [<code>storage</code>](#module_storage)  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Object</code> | User. |

<a name="module_storage.removeUser"></a>

### storage.removeUser
Remove user from session storage.

**Kind**: static constant of [<code>storage</code>](#module_storage)  
<a name="module_store"></a>

## store

* [store](#module_store)
    * [.postFile(file)](#module_store.postFile) ⇒ <code>Object</code>
    * [.getFile(id)](#module_store.getFile) ⇒ <code>Object</code>
    * [.delFile(id)](#module_store.delFile)
    * [.getById(collection, id)](#module_store.getById) ⇒ <code>Object</code>
    * [.get(collection, [filters], [sort], [page], [fields])](#module_store.get) ⇒ <code>Object</code>
    * [.put(collection, data, id)](#module_store.put) ⇒ <code>Object</code>
    * [.post(collection, data)](#module_store.post) ⇒ <code>Object</code>
    * [.delById(collection, id)](#module_store.delById)
    * [.del(collection, filters)](#module_store.del)
    * [.aggregation(config, collection, group, [filters], [sort], [page])](#module_store.aggregation) ⇒ <code>Object</code>
    * [.getLocation()](#module_store.getLocation) ⇒ <code>Object</code>

<a name="module_store.postFile"></a>

### store.postFile(file) ⇒ <code>Object</code>
Insert file.

**Kind**: static method of [<code>store</code>](#module_store)  
**Returns**: <code>Object</code> - id.  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Object</code> | File (formData). |

<a name="module_store.getFile"></a>

### store.getFile(id) ⇒ <code>Object</code>
Get file.

**Kind**: static method of [<code>store</code>](#module_store)  
**Returns**: <code>Object</code> - file (octet-stream).  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | File id. |

<a name="module_store.delFile"></a>

### store.delFile(id)
Delete file.

**Kind**: static method of [<code>store</code>](#module_store)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | File id. |

<a name="module_store.getById"></a>

### store.getById(collection, id) ⇒ <code>Object</code>
Get document.

**Kind**: static method of [<code>store</code>](#module_store)  
**Returns**: <code>Object</code> - document.  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>string</code> | Collection. |
| id | <code>string</code> | Document id. |

<a name="module_store.get"></a>

### store.get(collection, [filters], [sort], [page], [fields]) ⇒ <code>Object</code>
Get collection of documents that match a specified filter.

**Kind**: static method of [<code>store</code>](#module_store)  
**Returns**: <code>Object</code> - collection of documents.  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>string</code> | Collection. |
| [filters] | <code>Object</code> | Filters. |
| [sort] | <code>Object</code> | Sort. |
| [page] | <code>Object</code> | Page. |
| [fields] | <code>Object</code> | Fields. |

<a name="module_store.put"></a>

### store.put(collection, data, id) ⇒ <code>Object</code>
Update document in collection.

**Kind**: static method of [<code>store</code>](#module_store)  
**Returns**: <code>Object</code> - document.  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>string</code> | Collection. |
| data | <code>Object</code> | Data. |
| id | <code>string</code> | Document id. |

<a name="module_store.post"></a>

### store.post(collection, data) ⇒ <code>Object</code>
Insert document to collection.

**Kind**: static method of [<code>store</code>](#module_store)  
**Returns**: <code>Object</code> - document.  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>string</code> | Collection. |
| data | <code>Object</code> | Data. |

<a name="module_store.delById"></a>

### store.delById(collection, id)
Delete document in collection.

**Kind**: static method of [<code>store</code>](#module_store)  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>string</code> | Collection. |
| id | <code>string</code> | Document Id. |

<a name="module_store.del"></a>

### store.del(collection, filters)
Delete documents in collection.

**Kind**: static method of [<code>store</code>](#module_store)  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>string</code> | Collection. |
| filters | <code>Object</code> | Filters. |

<a name="module_store.aggregation"></a>

### store.aggregation(config, collection, group, [filters], [sort], [page]) ⇒ <code>Object</code>
Get computed results of a specified aggregation.

**Kind**: static method of [<code>store</code>](#module_store)  
**Returns**: <code>Object</code> - computed results of a specified aggregation.  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Config. |
| collection | <code>string</code> | Collection. |
| group | <code>Object</code> | Group. |
| [filters] | <code>Object</code> | Filters. |
| [sort] | <code>Object</code> | Sort. |
| [page] | <code>Object</code> | Page. |

<a name="module_store.getLocation"></a>

### store.getLocation() ⇒ <code>Object</code>
Get location.

**Kind**: static method of [<code>store</code>](#module_store)  
**Returns**: <code>Object</code> - location.  
<a name="init"></a>

## init(config)
Init.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Configy. |

<a name="getConfig"></a>

## getConfig() ⇒ <code>Object</code>
Get config.

**Kind**: global function  
**Returns**: <code>Object</code> - config.  
