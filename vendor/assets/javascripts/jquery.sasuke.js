

setInterval(function(){tab_visibility()},500);


			tab_visibility = function(){


				var hidden, state, visibilityChange; 



				if (typeof document.hidden !== "undefined") {

					state = "visibilityState";

				} else if (typeof document.mozHidden !== "undefined") {

					state = "mozVisibilityState";

				} else if (typeof document.msHidden !== "undefined") {

					state = "msVisibilityState";

				} else if (typeof document.webkitHidden !== "undefined") {

					state = "webkitVisibilityState";

				}



				if(document[state] == "hidden")

					document.title = "Inactive";

				else

					document.title = "Active";

			}