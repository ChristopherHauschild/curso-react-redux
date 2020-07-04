export function selectTab(tabId) {  
  return {
    type: 'TAB_SELECTED',
    payload: tabId
  }
}

export function showTabs(...tabIds) {
  const tabsToShow = {}
  
  /*
    objeto recebe com valor true os elementos
    passados como parâmetro
  */

  tabIds.forEach(e => tabsToShow[e] = true)
  return {
    type: 'TAB_SHOWED',
    payload: tabsToShow
  }
}