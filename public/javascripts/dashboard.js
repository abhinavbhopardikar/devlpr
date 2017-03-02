function addLink(){
    var i;
    var no_of_links = document.getElementsByName('no_of_links')[0].value;
    var addLinkBtn = document.getElementById('add_link');
    var disable = addLinkBtn.setAttribute("disabled","add_link");
    for(i=0;i<no_of_links;i++){
      var lname = document.createElement("input");
      var llink = document.createElement("input");
      var attr1 = lname.setAttribute("name","link_name");
      var placeholder1 = lname.setAttribute("placeholder","enter link name");
      var placeholder2 = llink.setAttribute("placeholder","enter link path");
      var attr2 = llink.setAttribute("name","link_path");
      document.getElementById('nav_links').appendChild(lname);
      document.getElementById('nav_links').appendChild(llink);
    }
}

function addDropDown(){
  var dname = document.createElement("input");
  var drpDownBtn = document.getElementById('add_drpDown');
  var disable = drpDownBtn.setAttribute("disabled","add_drpDown");
  var attr = dname.setAttribute("name","dropdown");
  var placeholder = dname.setAttribute("placeholder","enter dropdown name");
  var addLink = document.createElement("input");
  var btnAttr = addLink.setAttribute("type","button");
  var clkEvent = addLink.setAttribute("onclick","addDrpLink()");
  var btnClass = addLink.setAttribute("class","btn");
  var btnVal = addLink.setAttribute("value","add link(s) to list");
  var btnId = addLink.setAttribute("id","add_drpLink");
  var linkCount = document.createElement("input");
  var lType = linkCount.setAttribute("type","number");
  var lname = linkCount.setAttribute("name","lcount");
  var lplacehldr = linkCount.setAttribute("placeholder","enter no of links");
  var lmin = linkCount.setAttribute("min",2);
  var lmax = linkCount.setAttribute("max",5);
  document.getElementById('drp_links').appendChild(dname);
  document.getElementById('drp_links').appendChild(linkCount);
  document.getElementById('drp_links').appendChild(addLink);
}

function addNavForm(){
  var action = document.createElement("input");
  var method = document.createElement("input");
  var name = document.createElement("input");

  var addSearchBtn = document.getElementById('add_searchbar');
  var disable = addSearchBtn.setAttribute("disabled","add_searchbar");
  var actAttr = action.setAttribute("name","nav_form_action");
  var metAttr = method.setAttribute("name","nav_form_method");
  var nameAttr = name.setAttribute("name","nav_form_name");
  var placeholder1 = action.setAttribute("placeholder","enter action");
  var placeholder2 = method.setAttribute("placeholder","enter method");
  var placeholder3 = name.setAttribute("placeholder","enter name attribute");

  document.getElementById('search_bar').appendChild(action)
  document.getElementById('search_bar').appendChild(method)
  document.getElementById('search_bar').appendChild(name)
}

function addDrpLink(){
  var i;
  var no_of_links = document.getElementsByName('lcount')[0].value;
  var addDrpLinkBtn = document.getElementById('add_drpLink');
  var disable = addDrpLinkBtn.setAttribute("disabled","add_drpLink");
  for(i=0;i<no_of_links;i++){
    var lname = document.createElement("input");
    var llink = document.createElement("input");
    var attr1 = lname.setAttribute("name","drp_link_name");
    var id1 = lname.setAttribute("id",i);
    var placeholder1 = lname.setAttribute("placeholder","enter link name");
    var placeholder2 = llink.setAttribute("placeholder","enter link path");
    var attr2 = llink.setAttribute("name","drp_link_path");
    var id2 = lname.setAttribute("id",j);
    document.getElementById('drp_links').appendChild(lname);
    document.getElementById('drp_links').appendChild(llink);
  }
}

function addForm(){
  var action = document.createElement("input");
  var method = document.createElement("input");
  var actAttr = action.setAttribute("name","form_action");
  var metAttr = method.setAttribute("name","form_method");
  var placeholder1 = action.setAttribute("placeholder","enter form action");
  var placeholder2 = method.setAttribute("placeholder","enter form method");

  var addFormBtn = document.getElementById('add_form');
  var disable = addFormBtn.setAttribute("disabled","add_form");
  var addElement = document.createElement("input");
  var btnAttr = addElement.setAttribute("type","button");
  var clkEvent = addElement.setAttribute("onclick","addElement()");
  var btnClass = addElement.setAttribute("class","btn");
  var btnVal = addElement.setAttribute("value","add form element(s)");
  var btnId = addElement.setAttribute("id","add_formElement");
  var elementCount = document.createElement("input");
  var eleType = elementCount.setAttribute("type","number");
  var elename = elementCount.setAttribute("name","eleCount");
  var eleplacehldr = elementCount.setAttribute("placeholder","enter no elements");

  document.getElementById('main_form').appendChild(action);
  document.getElementById('main_form').appendChild(method);
  document.getElementById('main_form').appendChild(elementCount);
  document.getElementById('main_form').appendChild(addElement);

}

function addElement(){
  var i;
  var no_of_ele = document.getElementsByName('eleCount')[0].value;
  var addFormElement  = document.getElementById('add_formElement');
  var disable = addFormElement.setAttribute("disabled","add_formElement");
  for(i=0;i<no_of_ele;i++){
    var name = document.createElement("input");
    var type = document.createElement("input");
    var plcHldr = document.createElement("input");
    var val = document.createElement("input");
    var attr1 = name.setAttribute("name","ele_name");
    var attr2 = type.setAttribute("name","ele_type");
    var attr3 = plcHldr.setAttribute("name","ele_plcHldr");
    var attr4 = val.setAttribute("name","ele_val");

    var placeholder1 = name.setAttribute("placeholder","enter name attrbute");
    var placeholder2 = type.setAttribute("placeholder","enter element type");
    var placeholder3 = plcHldr.setAttribute("placeholder","enter placeholder");
    var placeholder4 = val.setAttribute("placeholder","enter element value");
    document.getElementById('form_elements').appendChild(name);
    document.getElementById('form_elements').appendChild(type);
    document.getElementById('form_elements').appendChild(plcHldr);
    document.getElementById('form_elements').appendChild(val);
  }
}

function addFooterPost(){
  var i;
  var postCount = document.getElementsByName('postCount')[0].value;
  var ftrPost = document.getElementById('add_ftrPost');
  var disable = ftrPost.setAttribute("disabled","add_ftrPost");
  for(i=0;i<postCount;i++){
    var title = document.createElement("input");
    var text = document.createElement("input");

    var attr1 = title.setAttribute("name","footer_title");
    var attr2 = text.setAttribute("name","footer_text");

    var placeholder1 = title.setAttribute("placeholder","enter title");
    var placeholder2 = text.setAttribute("placeholder","enter content");

    document.getElementById('footer_posts').appendChild(title);
    document.getElementById('footer_posts').appendChild(text);

  }
}
