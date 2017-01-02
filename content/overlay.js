/**
 * Namespaces
 */
if (typeof(extensions) === 'undefined') extensions = {};
if (typeof(extensions.closeTabsToRight) === 'undefined') extensions.closeTabsToRight = {
	version: '1.0'
};

(function() {
	
	this.closeTabsToTheRight = function(){
		var tabsView = document.getElementById('tabbed-view');
		var tabs = tabsView.getElementsByTagName('tab');
		var closeTabs = false;
		var tabsToClose = [];
		
		for (var i = 0; i < tabs.length; i++) {
			if (closeTabs) {
				tabsToClose.push(tabs[i].tooltipText);
			}
			
			if (tabs[i].selected) {
				closeTabs = true;
			}
		}
		
		ko.views.manager.closeViewsByURL(tabsToClose);
	}

}).apply(extensions.closeTabsToRight);

