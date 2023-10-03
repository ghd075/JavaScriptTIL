$(function () {
  // gnb 열기
  $(".btn-toggle").on("click", function () {
    $("#gnb").addClass("show");
    console.log("click");
  });

  // gnb 닫기
  $(".btn-close").on("click", function () {
    $("#gnb").removeClass("show");
    console.log("click");
  });
});
