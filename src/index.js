/**
 * 監聽滾動在範圍的內容
 */
function spyOr(list, setActive) {
  /**
   * 監聽位置參數
   */
  const options = {
    rootMargin: "-45% 0px -45%",
    threshold: [0, 0.5, 1],
  };

  /**
   * 顯示範圍改變時，改變Active Item
   */
  const observerCallbacks = (entries) => {
    if (!entries[0].isIntersecting) return;
    setActive(entries[0].target);
  };

  const observer = new IntersectionObserver(observerCallbacks, options);

  if (list) {
    list.map((element) => {
      observer.observe(element);
    });
  }
}
