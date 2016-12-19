webpackJsonp([124,204],{

/***/ 940:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "展示行列数据。"], ["h2", "何时使用"], ["ul", ["li", ["p", "当有大量结构化的数据需要展现时；"]], ["li", ["p", "当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。"]]], ["h2", "如何使用"], ["p", "指定表格的数据源 ", ["code", "dataSource"], " 为一个数组。"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">const</span> dataSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'胡彦斌'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'西湖区湖底公园1号'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'胡彦祖'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'西湖区湖底公园1号'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'姓名'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'年龄'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'住址'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>dataSource<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>"
	  }, ["code", "const dataSource = [{\n  key: '1',\n  name: '胡彦斌',\n  age: 32,\n  address: '西湖区湖底公园1号'\n}, {\n  key: '2',\n  name: '胡彦祖',\n  age: 42,\n  address: '西湖区湖底公园1号'\n}];\n\nconst columns = [{\n  title: '姓名',\n  dataIndex: 'name',\n  key: 'name',\n}, {\n  title: '年龄',\n  dataIndex: 'age',\n  key: 'age',\n}, {\n  title: '住址',\n  dataIndex: 'address',\n  key: 'address',\n}];\n\n<Table dataSource={dataSource} columns={columns} />"]]],
	  "meta": {
	    "category": "Components",
	    "cols": 1,
	    "type": "Data Display",
	    "title": "Table",
	    "subtitle": "表格",
	    "filename": "components/table/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#如何使用"
	  }, "如何使用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#注意"
	  }, "注意"]]],
	  "api": ["section", ["h2", "API"], ["h3", "Table"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "rowSelection"], ["td", "列表项是否可选择，", ["a", {
	    "title": null,
	    "href": "#rowSelection"
	  }, "配置项"]], ["td", "Object"], ["td", "null"]], ["tr", ["td", "pagination"], ["td", "分页器，配置项参考 ", ["a", {
	    "title": null,
	    "href": "/components/pagination/"
	  }, "pagination"], "，设为 false 时不展示和进行分页"], ["td", "Object"], ["td"]], ["tr", ["td", "size"], ["td", "正常或迷你类型，", ["code", "default"], " or ", ["code", "small"]], ["td", "String"], ["td", "default"]], ["tr", ["td", "dataSource"], ["td", "数据数组"], ["td", "Array"], ["td"]], ["tr", ["td", "columns"], ["td", "表格列的配置描述，具体项见下表"], ["td", "Array"], ["td", "-"]], ["tr", ["td", "rowKey"], ["td", "表格行 key 的取值，可以是字符串或一个函数"], ["td", "String or Function(record):string"], ["td", "'key'"]], ["tr", ["td", "rowClassName"], ["td", "表格行的类名"], ["td", "Function(record, index):string"], ["td", "-"]], ["tr", ["td", "expandedRowRender"], ["td", "额外的展开行"], ["td", "Function"], ["td", "-"]], ["tr", ["td", "defaultExpandedRowKeys"], ["td", "默认展开的行"], ["td", "Array"], ["td", "-"]], ["tr", ["td", "expandedRowKeys"], ["td", "展开的行，控制属性"], ["td", "Array"], ["td", "-"]], ["tr", ["td", "defaultExpandAllRows"], ["td", "初始时，是否展开所有行"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "onExpandedRowsChange"], ["td", "展开的行变化时触发"], ["td", "Function(expandedRows)"], ["td"]], ["tr", ["td", "onExpand"], ["td", "点击展开图标时触发"], ["td", "Function(expanded, record)"], ["td"]], ["tr", ["td", "onChange"], ["td", "分页、排序、筛选变化时触发"], ["td", "Function(pagination, filters, sorter)"], ["td"]], ["tr", ["td", "loading"], ["td", "页面是否加载中"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "locale"], ["td", "默认文案设置，目前包括排序、过滤、空数据文案"], ["td", "Object"], ["td", "filterConfirm: '确定' ", ["br"], " filterReset: '重置' ", ["br"], " emptyText: '暂无数据' ", ["br"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/575#issuecomment-159169511"
	  }, "默认值"]]], ["tr", ["td", "indentSize"], ["td", "展示树形数据时，每层缩进的宽度，以 px 为单位"], ["td", "Number"], ["td", "15"]], ["tr", ["td", "onRowClick"], ["td", "处理行点击事件"], ["td", "Function(record, index)"], ["td", "-"]], ["tr", ["td", "bordered"], ["td", "是否展示外边框和列边框"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "showHeader"], ["td", "是否显示表头"], ["td", "Boolean"], ["td", "true"]], ["tr", ["td", "footer"], ["td", "表格尾部"], ["td", "Function(currentPageData)"], ["td"]], ["tr", ["td", "title"], ["td", "表格标题"], ["td", "Function(currentPageData)"], ["td"]], ["tr", ["td", "scroll"], ["td", "横向或纵向支持滚动，也可用于指定滚动区域的宽高度：", ["code", "{{ x: true, y: 300 }}"]], ["td", "Object"], ["td", "-"]]]], ["h3", "Column"], ["p", "列描述数据对象，是 columns 中的一项，Column 使用相同的 API。"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "title"], ["td", "列头显示文字"], ["td", "String or React.Element"], ["td", "-"]], ["tr", ["td", "key"], ["td", "React 需要的 key，建议设置"], ["td", "String"], ["td", "-"]], ["tr", ["td", "dataIndex"], ["td", "列数据在数据项中对应的 key，支持 ", ["code", "a.b.c"], " 的嵌套写法"], ["td", "String"], ["td", "-"]], ["tr", ["td", "render"], ["td", "生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格", ["a", {
	    "title": null,
	    "href": "#demo-colspan-rowspan"
	  }, "行/列合并"]], ["td", "Function(text, record, index) {}"], ["td", "-"]], ["tr", ["td", "filters"], ["td", "表头的筛选菜单项"], ["td", "Array"], ["td", "-"]], ["tr", ["td", "onFilter"], ["td", "本地模式下，确定筛选的运行函数"], ["td", "Function"], ["td", "-"]], ["tr", ["td", "filterMultiple"], ["td", "是否多选"], ["td", "Boolean"], ["td", "true"]], ["tr", ["td", "filterDropdown"], ["td", "可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互"], ["td", "React.Element"], ["td", "-"]], ["tr", ["td", "filterDropdownVisible"], ["td", "用于控制自定义筛选菜单是否可见"], ["td", "Boolean"], ["td", "-"]], ["tr", ["td", "onFilterDropdownVisibleChange"], ["td", "自定义筛选菜单可见变化时调用"], ["td", "function(visible) {}"], ["td", "-"]], ["tr", ["td", "filteredValue"], ["td", "筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组"], ["td", "Array"], ["td", "-"]], ["tr", ["td", "sorter"], ["td", "排序函数，本地排序使用一个函数，需要服务端排序可设为 true"], ["td", "Function or Boolean"], ["td", "-"]], ["tr", ["td", "colSpan"], ["td", "表头列合并,设置为 0 时，不渲染"], ["td", "Number"], ["td"]], ["tr", ["td", "width"], ["td", "列宽度"], ["td", "String or Number"], ["td", "-"]], ["tr", ["td", "className"], ["td", "列的 className"], ["td", "String"], ["td", "-"]], ["tr", ["td", "fixed"], ["td", "列是否固定，可选 ", ["code", "true"], "(等效于 left) ", ["code", "'left'"], " ", ["code", "'right'"]], ["td", "Boolean or String"], ["td", "false"]], ["tr", ["td", "sortOrder"], ["td", "排序的受控属性，外界可用此控制列的排序，可设置为 ", ["code", "'ascend'"], " ", ["code", "'descend'"], " ", ["code", "false"]], ["td", "Boolean or String"], ["td", "-"]], ["tr", ["td", "onCellClick"], ["td", "单元格点击回调"], ["td", "Function(record, event)"], ["td", "-"]]]], ["h3", "ColumnGroup"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "title"], ["td", "列头显示文字"], ["td", "String or React.Element"], ["td", "-"]]]], ["h3", "rowSelection"], ["p", "选择功能的配置。"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "type"], ["td", "多选/单选，", ["code", "checkbox"], " or ", ["code", "radio"]], ["td", "String"], ["td", ["code", "checkbox"]]], ["tr", ["td", "selectedRowKeys"], ["td", "指定选中项的 key 数组，需要和 onChange 进行配合"], ["td", "Array"], ["td", "[]"]], ["tr", ["td", "onChange"], ["td", "选中项发生变化的时的回调"], ["td", "Function(selectedRowKeys, selectedRows)"], ["td", "-"]], ["tr", ["td", "getCheckboxProps"], ["td", "选择框的默认属性配置"], ["td", "Function(record)"], ["td", "-"]], ["tr", ["td", "onSelect"], ["td", "用户手动选择/取消选择某列的回调"], ["td", "Function(record, selected, selectedRows)"], ["td", "-"]], ["tr", ["td", "onSelectAll"], ["td", "用户手动选择/取消选择所有列的回调"], ["td", "Function(selected, selectedRows, changeRows)"], ["td", "-"]]]], ["h2", "注意"], ["p", "按照 React 的", ["a", {
	    "title": null,
	    "href": "http://facebook.github.io/react/docs/multiple-components.html#dynamic-children"
	  }, "规范"], "，所有的组件数组必须绑定 key。在 Table 中，", ["code", "dataSource"], " 和 ", ["code", "columns"], " 里的数据值都需要指定 ", ["code", "key"], " 值。对于 ", ["code", "dataSource"], " 默认将每列数据的 ", ["code", "key"], " 属性作为唯一的标识。"], ["p", "如果你的数据没有这个属性，务必使用 ", ["code", "rowKey"], " 来指定数据列的主键。若没有指定，控制台会出现以下的提示，表格组件也会出现各类奇怪的错误。"], ["p", ["img", {
	    "title": null,
	    "src": "https://os.alipayobjects.com/rmsportal/luLdLvhPOiRpyss.png",
	    "alt": null
	  }]], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// 比如你的数据主键是 uid</span>\n<span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">rowKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>uid<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// 或</span>\n<span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">rowKey</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>record <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>uid<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>"
	  }, ["code", "// 比如你的数据主键是 uid\nreturn <Table rowKey=\"uid\" />;\n// 或\nreturn <Table rowKey={record => record.uid} />;"]]]
	};

/***/ }

});