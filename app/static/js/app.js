// Generated by CoffeeScript 1.6.3
var AppCtrl;

AppCtrl = function($scope, $resource, $rootScope) {
  var request_with_token;
  $scope.dropdown = function() {
    if ($rootScope.dropdown_status === "open") {
      return $rootScope.dropdown_status = "";
    } else {
      return $rootScope.dropdown_status = "open";
    }
  };
  $scope.set_language = function(code) {
    $rootScope.lan = code;
    return $.ajax({
      data_format: "json",
      url: "/language/" + code + "/",
      success: function(data) {
        data = $.parseJSON(data);
        if (data.result) {
          return location.reload(true);
        }
      }
    });
  };
  $scope.la = function(list_code) {
    if ($.inArray($rootScope.lan, list_code) >= 0) {
      return $rootScope.lan;
    } else {
      return list_code[0];
    }
  };
  $scope.status_msg = function(success) {
    if (success === false) {
      return "msg msg-error";
    } else {
      return "msg msg-success";
    }
  };
  $scope.show_message = function(resource, type_msg) {
    if (type_msg) {
      $rootScope["" + type_msg + "_message_show"] = true;
      $rootScope["" + type_msg + "_message_status"] = $scope.status_msg(resource.success);
      return $rootScope["" + type_msg + "_message_message"] = resource.message;
    } else {
      $scope.scroll_top();
      $rootScope.message_show = true;
      $rootScope.message_status = $scope.status_msg(resource.success);
      return $rootScope.message_message = resource.message;
    }
  };
  $scope.close_message = function(type_msg) {
    if (type_msg) {
      return $rootScope["" + type_msg + "_message_show"] = false;
    } else {
      return $rootScope.message_show = false;
    }
  };
  $scope.scroll_top = function() {
    return $("html, body").animate({
      scrollTop: 0
    }, "slow");
  };
  request_with_token = {
    get: {
      method: "JSONP",
      params: {
        token: app["token"]
      }
    }
  };
  $rootScope.request_with_token = request_with_token;
  $scope.ajaxUsersNew = $resource($rootScope.API + "/users/new.json", {
    callback: "JSON_CALLBACK"
  }, request_with_token);
  $scope.ajaxUsersShow = $resource($rootScope.API + "/users/show.json", {
    callback: "JSON_CALLBACK"
  }, {
    get: {
      method: "JSONP"
    }
  });
  $scope.ajaxUsersList = $resource($rootScope.API + "/users/list.json", {
    callback: "JSON_CALLBACK"
  }, request_with_token);
  $scope.ajaxUserFavorites = $resource($rootScope.API + "/favorites/list.json", {
    callback: "JSON_CALLBACK"
  }, request_with_token);
  $scope.ajaxUserDraft = $resource($rootScope.API + "/drafts/list.json", {
    callback: "JSON_CALLBACK"
  }, request_with_token);
  $scope.ajaxAccountUpdate = $resource($rootScope.API + "/account/update.json", {
    callback: "JSON_CALLBACK"
  }, request_with_token);
  $scope.ajaxAccountUpdateProfile = $resource($rootScope.API + "/account/update_profile.json", {
    callback: "JSON_CALLBACK"
  }, request_with_token);
  $scope.ajaxAccountUpdateAccount = $resource($rootScope.API + "/account/update_account.json", {
    callback: "JSON_CALLBACK"
  }, request_with_token);
  $scope.ajaxAccountUpdatePassword = $resource($rootScope.API + "/account/update_password.json", {
    callback: "JSON_CALLBACK"
  }, request_with_token);
  $scope.ajaxHashTableList = $resource($rootScope.API + "/hash_table/list.json", {
    callback: "JSON_CALLBACK"
  }, request_with_token);
  $scope.ajaxHashTableNew = $resource($rootScope.API + "/hash_table/new.json", {
    callback: "JSON_CALLBACK"
  }, request_with_token);
  $scope.ajaxHashTableGet = $resource($rootScope.API + "/hash_table/get.json", {
    callback: "JSON_CALLBACK"
  }, request_with_token);
  $scope.ajaxHashTableUpdate = $resource($rootScope.API + "/hash_table/update.json", {
    callback: "JSON_CALLBACK"
  }, request_with_token);
  $scope.ajaxPagesNew = $resource($rootScope.API + "/pages/new.json", {
    callback: "JSON_CALLBACK"
  }, request_with_token);
  $scope.ajaxPagesUpdate = $resource($rootScope.API + "/pages/update.json", {
    callback: "JSON_CALLBACK"
  }, request_with_token);
};

AppCtrl.$inject = ["$scope", "$resource", "$rootScope"];
