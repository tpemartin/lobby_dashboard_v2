// Floating action button
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {direction: 'top', hoverEnabled: true});
  });  
  
// Floating action button
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.getElementById('float2');
    var instances = M.FloatingActionButton.init(elems, {direction: 'down', hoverEnabled: true});
  });        
  
// nav-bar
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,{edge: 'right'});
  });
  
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(elems);
  });
  
// dropdown trigger
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });
  
// collapse
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });