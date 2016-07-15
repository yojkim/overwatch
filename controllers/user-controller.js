var connection = require('../config/database.js');
var responseCode = require('../models/responseCode.js');

exports.getUserInfo = function(req, res) {
	/*---------------------- Quick / Rank  -----------------------*/
	if(req.params.game == "quick") {
		var is_rank = false;
	}
	else if(req.params.game == "rank") {
		var is_rank = true;
	}
	else {
		res.json({ "responseCode": responseCode.GET_USERINFO_FAIL });
		return;
	}
	/*--------------------------------------------------------------*/

	/*---------------------- UserName  -----------------------*/
	if( !req.params.username ) {
		res.json({ "responseCode": responseCode.GET_USERINFO_FAIL });
		return;
	}
	else {
		var name = req.params.username.split("-");
		var battletag = name[1];
			name = name[0];	
	}
	console.log(connection.escape(name));
	console.log(connection.escape(battletag));
	connection.query('SELECT 1 FROM users WHERE EXISTS (SELECT 1 FROM users WHERE name=? and battletag=?) LIMIT 1;', [ name, battletag ],function(err, data){
		if(data.length) {
			if(is_rank) {
				connection.query('SELECT user_id, name, battletag, level, rank_melee_lastshot, rank_solo_kill, rank_mission_kill, rank_lastshot, rank_deal, rank_kill, rank_environment_kill, rank_onecombo, rank_heal, rank_view_support, rank_destroy_teleport, rank_most_kill, rank_most_lastshot, rank_most_deal, rank_most_heal, rank_best_defence_support, rank_best_attack_support, rank_most_mission_kill, rank_most_mission_time, rank_most_onecombo, rank_most_solo_kill, rank_most_flood_time, rank_death, rank_environment_death, rank_card, rank_gold_medal, rank_silver_medal, rank_bronze_medal, rank_win, rank_game_count, rank_flood_time, rank_mission_time, rank_playtime, rank_most_melee_lastshot, rank_defence_support, rank_attack_support, rank_reaper_kill, rank_reaper_death, rank_reaper_win, rank_reaper_game_count, rank_reaper_playtime, rank_tracer_kill, rank_tracer_death, rank_tracer_win, rank_tracer_game_count, rank_tracer_playtime, rank_mercy_kill, rank_mercy_death, rank_mercy_win, rank_mercy_game_count, rank_mercy_playtime, rank_hanzo_kill,rank_hanzo_death,rank_hanzo_win,rank_hanzo_game_count,rank_hanzo_playtime,rank_torbjon_kill, rank_torbjon_death, rank_torbjon_win, rank_torbjon_game_count, rank_torbjon_playtime, rank_reinhardt_kill, rank_reinhardt_death, rank_reinhardt_win, rank_reinhardt_game_count, rank_reinhardt_playtime, rank_pharah_kill, rank_pharah_death, rank_pharah_win, rank_pharah_game_count, rank_pharah_playtime, rank_winston_kill, rank_winston_death, rank_winston_win, rank_winston_game_count, rank_winston_playtime, rank_widowmaker_kill, rank_widowmaker_death, rank_widowmaker_win, rank_widowmaker_game_count, rank_widowmaker_playtime, rank_bastion_kill, rank_bastion_death, rank_bastion_win, rank_bastion_game_count, rank_bastion_playtime, rank_symmetra_kill, rank_symmetra_death, rank_symmetra_win, rank_symmetra_game_count, rank_symmetra_playtime, rank_zenyatta_kill, rank_zenyatta_death, rank_zenyatta_win, rank_zenyatta_game_count, rank_zenyatta_playtime, rank_genji_kill, rank_genji_death, rank_genji_win, rank_genji_game_count, rank_genji_playtime, rank_roadhog_kill, rank_roadhog_death, rank_roadhog_win, rank_roadhog_game_count, rank_roadhog_playtime, rank_mccree_kill, rank_mccree_death, rank_mccree_win, rank_mccree_game_count, rank_mccree_playtime, rank_junkrat_kill, rank_junkrat_death, rank_junkrat_win, rank_junkrat_game_count, rank_junkrat_playtime, rank_zarya_kill, rank_zarya_death, rank_zarya_win, rank_zarya_game_count, rank_zarya_playtime, rank_soldier_kill, rank_soldier_death, rank_soldier_win, rank_soldier_game_count, rank_soldier_playtime, rank_lucio_kill, rank_lucio_death, rank_lucio_win, rank_lucio_game_count, rank_lucio_playtime, rank_dva_kill, rank_dva_death, rank_dva_win, rank_dva_game_count, rank_dva_playtime, rank_mei_kill, rank_mei_death, rank_mei_win, rank_mei_game_count, rank_mei_playtime, rank_ana_kill, rank_ana_death, rank_ana_win, rank_ana_game_count, rank_ana_playtime FROM users WHERE name=? and battletag=? LIMIT 1;', [ name, battletag ], function(err, data, field){
		   			res.json({ "responseCode": responseCode.GET_USERINFO_SUCCESS, "userData": data[0] });
		   			return;
		   		})
			}
			else {
				connection.query('SELECT user_id, name, battletag, level, quick_melee_lastshot, quick_solo_kill, quick_mission_kill, quick_lastshot, quick_deal, quick_kill, quick_environment_kill, quick_onecombo, quick_heal, quick_view_support, quick_destroy_teleport, quick_most_kill, quick_most_lastshot, quick_most_deal, quick_most_heal, quick_best_defence_support, quick_best_attack_support, quick_most_mission_kill, quick_most_mission_time, quick_most_onecombo, quick_most_solo_kill, quick_most_flood_time, quick_death, quick_environment_death, quick_card, quick_gold_medal, quick_silver_medal, quick_bronze_medal, quick_win, quick_game_count, quick_flood_time, quick_mission_time, quick_playtime, quick_most_melee_lastshot, quick_defence_support, quick_attack_support, quick_reaper_kill, quick_reaper_death, quick_reaper_win, quick_reaper_game_count, quick_reaper_playtime, quick_tracer_kill, quick_tracer_death, quick_tracer_win, quick_tracer_game_count, quick_tracer_playtime, quick_mercy_kill, quick_mercy_death, quick_mercy_win, quick_mercy_game_count, quick_mercy_playtime, quick_hanzo_kill,quick_hanzo_death,quick_hanzo_win,quick_hanzo_game_count,quick_hanzo_playtime,quick_torbjon_kill, quick_torbjon_death, quick_torbjon_win, quick_torbjon_game_count, quick_torbjon_playtime, quick_reinhardt_kill, quick_reinhardt_death, quick_reinhardt_win, quick_reinhardt_game_count, quick_reinhardt_playtime, quick_pharah_kill, quick_pharah_death, quick_pharah_win, quick_pharah_game_count, quick_pharah_playtime, quick_winston_kill, quick_winston_death, quick_winston_win, quick_winston_game_count, quick_winston_playtime, quick_widowmaker_kill, quick_widowmaker_death, quick_widowmaker_win, quick_widowmaker_game_count, quick_widowmaker_playtime, quick_bastion_kill, quick_bastion_death, quick_bastion_win, quick_bastion_game_count, quick_bastion_playtime, quick_symmetra_kill, quick_symmetra_death, quick_symmetra_win, quick_symmetra_game_count, quick_symmetra_playtime, quick_zenyatta_kill, quick_zenyatta_death, quick_zenyatta_win, quick_zenyatta_game_count, quick_zenyatta_playtime, quick_genji_kill, quick_genji_death, quick_genji_win, quick_genji_game_count, quick_genji_playtime, quick_roadhog_kill, quick_roadhog_death, quick_roadhog_win, quick_roadhog_game_count, quick_roadhog_playtime, quick_mccree_kill, quick_mccree_death, quick_mccree_win, quick_mccree_game_count, quick_mccree_playtime, quick_junkrat_kill, quick_junkrat_death, quick_junkrat_win, quick_junkrat_game_count, quick_junkrat_playtime, quick_zarya_kill, quick_zarya_death, quick_zarya_win, quick_zarya_game_count, quick_zarya_playtime, quick_soldier_kill, quick_soldier_death, quick_soldier_win, quick_soldier_game_count, quick_soldier_playtime, quick_lucio_kill, quick_lucio_death, quick_lucio_win, quick_lucio_game_count, quick_lucio_playtime, quick_dva_kill, quick_dva_death, quick_dva_win, quick_dva_game_count, quick_dva_playtime, quick_mei_kill, quick_mei_death, quick_mei_win, quick_mei_game_count, quick_mei_playtime, quick_ana_kill, quick_ana_death, quick_ana_win, quick_ana_game_count, quick_ana_playtime FROM users WHERE name=? and battletag=? LIMIT 1;', [ name, battletag ], function(err, data, field){
		   			res.json({ "responseCode": responseCode.GET_USERINFO_SUCCESS, "userData": data[0] });
		   			return;
		   		})
			}
		}
		else {
			console.log("PARSEING START");
			/*------------  파싱 시작   --------------*/
			var quick_key = require('../models/quick_key.js');
			var rank_key = require('../models/rank_key.js');
			var cheerio = require('cheerio');
			var request = require('request');
			var address = "https://playoverwatch.com/ko-kr/career/pc/kr/" + encodeURIComponent(name) + "-" + battletag;
			var user_data = {};
			var rank_data = {};
			request(address, function(err, data, html){
				if (err) throw err;
				var value_to_int = function(str) {
					if( str.includes(":") ) {
						var a = str.split(':');
						if( a.length == 3 ) 
							var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
						else
							var seconds = (+a[0]) * 60 + (+a[1]); 
						return parseFloat(seconds);;
					}
					else if( str.includes(",") ) {
						return parseFloat(str.replace(/,/g, ''));
					}
					else if( str.includes("분") ) {
						return Number((parseFloat(str)/60).toFixed(3));
					}
					else {
						return parseFloat(str);
					}
				};
				var $ = cheerio.load(html);
				/* 빠른대전 시작  */
				var quick_jobs = $('#quick-play .career-stats-section .row .js-career-select option');
				
				/*------------------유저가 존재하지 않음 -------------------- */
				if( quick_jobs.length == 0 )
				{
					res.json({ "responseCode": responseCode.GET_USERINFO_FAIL });
					return;
				}
				/*-----------------------------------------------------*/
				for(i=0; i<quick_jobs.length; i++) {
					switch(quick_jobs[i].children[0].data) {
						case "모든 영웅": 
							user_data["all"] = {};
							break;
						case "리퍼": 
							user_data["reaper"] = {};
							break;
						case "트레이서": 
							user_data["tracer"] = {};
							break;
						case "메르시": 
							user_data["mercy"] = {};
							break;
						case "한조": 
							user_data["hanzo"] = {};
							break;
						case "토르비욘": 
							user_data["torbjon"] = {};
							break;
						case "라인하르트": 
							user_data["reinhardt"] = {};
							break;
						case "파라": 
							user_data["pharah"] = {};
							break;
						case "윈스턴": 
							user_data["winston"] = {};
							break;
						case "위도우메이커": 
							user_data["widowmaker"] = {};
							break;
						case "바스티온": 
							user_data["bastion"] = {};
							break;
						case "시메트라": 
							user_data["symmetra"] = {};
							break;
						case "젠야타": 
							user_data["zenyatta"] = {};
							break;
						case "겐지": 
							user_data["genji"] = {};
							break;
						case "로드호그": 
							user_data["roadhog"] = {};
							break;
						case "맥크리": 
							user_data["mccree"] = {};
							break;
						case "정크랫": 
							user_data["junkrat"] = {};
							break;
						case "자리야": 
							user_data["zarya"] = {};
							break;
						case "솔저: 76": 
							user_data["soldier"] = {};
							break;
						case "루시우": 
							user_data["lucio"] = {};
							break;
						case "D.Va": 
							user_data["dva"] = {};
							break;
						case "메이": 
							user_data["mei"] = {};
							break;
					}
				}
				var battle = $('#quick-play .career-stats-section > .row > .row .js-stats')
				/* 
					i
					select option 개수만큼 for문 
				*/
				for(i=0; i< battle.length; i++) {
					
					 var data_length = battle[i].children.length;
					 /* 
					 	j
						0. 전투
						1. 지원
						2. 최고
						3. 평균 
						4. 죽음
						5. 경기 보상
						6. 게임
						7. 기타 
					 */
					 for(j=0; j<data_length; j++) {
					 	var tr_length = battle[i].children[j].children[0].children[0].children[1].children.length;
					 	for(k=0; k<tr_length; k++) {
					 		var skill_key = battle[i].children[j].children[0].children[0].children[1].children[k].children[0].children[0].data;
					 		var skill_value = battle[i].children[j].children[0].children[0].children[1].children[k].children[1].children[0].data;
							user_data[Object.keys(user_data)[i]][skill_key] = value_to_int(skill_value);			 		
					 	}
					 	
					 }
				}
				var game_data = {};
				for(i=0; i<Object.keys(user_data).length; i++) {
					if( !game_data[Object.keys(user_data)[i]] ) {
						game_data[Object.keys(user_data)[i]] = {};
					}
					for(j=0; j<Object.keys(user_data[Object.keys(user_data)[i]]).length; j++) {
						if( quick_key[Object.keys(user_data)[i]][Object.keys(user_data[Object.keys(user_data)[i]])[j]] != undefined ) {
							game_data[Object.keys(user_data)[i]][quick_key[Object.keys(user_data)[i]][Object.keys(user_data[Object.keys(user_data)[i]])[j]]] = user_data[Object.keys(user_data)[i]][Object.keys(user_data[Object.keys(user_data)[i]])[j]];
						}
					}
				}

				/* 랭크모드 시작  */
				var rank_jobs = $('#competitive-play .career-stats-section .row .js-career-select option');
				for(i=0; i<rank_jobs.length; i++) {
					switch(rank_jobs[i].children[0].data) {
						case "모든 영웅": 
							rank_data["all"] = {};
							break;
						case "리퍼": 
							rank_data["reaper"] = {};
							break;
						case "트레이서": 
							rank_data["tracer"] = {};
							break;
						case "메르시": 
							rank_data["mercy"] = {};
							break;
						case "한조": 
							rank_data["hanzo"] = {};
							break;
						case "토르비욘": 
							rank_data["torbjon"] = {};
							break;
						case "라인하르트": 
							rank_data["reinhardt"] = {};
							break;
						case "파라": 
							rank_data["pharah"] = {};
							break;
						case "윈스턴": 
							rank_data["winston"] = {};
							break;
						case "위도우메이커": 
							rank_data["widowmaker"] = {};
							break;
						case "바스티온": 
							rank_data["bastion"] = {};
							break;
						case "시메트라": 
							rank_data["symmetra"] = {};
							break;
						case "젠야타": 
							rank_data["zenyatta"] = {};
							break;
						case "겐지": 
							rank_data["genji"] = {};
							break;
						case "로드호그": 
							rank_data["roadhog"] = {};
							break;
						case "맥크리": 
							rank_data["mccree"] = {};
							break;
						case "정크랫": 
							rank_data["junkrat"] = {};
							break;
						case "자리야": 
							rank_data["zarya"] = {};
							break;
						case "솔저: 76": 
							rank_data["soldier"] = {};
							break;
						case "루시우": 
							rank_data["lucio"] = {};
							break;
						case "D.Va": 
							rank_data["dva"] = {};
							break;
						case "메이": 
							rank_data["mei"] = {};
							break;
					}
				}
				var battle = $('#competitive-play .career-stats-section > .row > .row .js-stats')
				/* 
					i
					select option 개수만큼 for문 
				*/
				for(i=0; i< battle.length; i++) {
					
					 var data_length = battle[i].children.length;
					 /* 
					 	j
						0. 전투
						1. 지원
						2. 최고
						3. 평균 
						4. 죽음
						5. 경기 보상
						6. 게임
						7. 기타 
					 */
					 for(j=0; j<data_length; j++) {
					 	var tr_length = battle[i].children[j].children[0].children[0].children[1].children.length;
					 	for(k=0; k<tr_length; k++) {
					 		var skill_key = battle[i].children[j].children[0].children[0].children[1].children[k].children[0].children[0].data;
					 		var skill_value = battle[i].children[j].children[0].children[0].children[1].children[k].children[1].children[0].data;
							rank_data[Object.keys(rank_data)[i]][skill_key] = value_to_int(skill_value);			 		
					 	}
					 	
					 }
				}
				for(i=0; i<Object.keys(rank_data).length; i++) {
					if( !game_data[Object.keys(rank_data)[i]] ) {
						game_data[Object.keys(rank_data)[i]] = {};
					}
					for(j=0; j<Object.keys(rank_data[Object.keys(rank_data)[i]]).length; j++) {
						if( rank_key[Object.keys(rank_data)[i]][Object.keys(rank_data[Object.keys(rank_data)[i]])[j]] != undefined ) {
							game_data[Object.keys(rank_data)[i]][rank_key[Object.keys(rank_data)[i]][Object.keys(rank_data[Object.keys(rank_data)[i]])[j]]] = rank_data[Object.keys(rank_data)[i]][Object.keys(rank_data[Object.keys(rank_data)[i]])[j]];
						}
					}
				}
				
				for(i=1; i<Object.keys(game_data).length; i++) {
					var champion = Object.keys(game_data)[i];
					var quick_kill = game_data[Object.keys(game_data)[i]]["quick_kill"];
					var quick_death = game_data[Object.keys(game_data)[i]]["quick_death"];
					var quick_win = game_data[Object.keys(game_data)[i]]["quick_win"];
					var quick_game_count = game_data[Object.keys(game_data)[i]]["quick_game_count"];
					var quick_playtime = game_data[Object.keys(game_data)[i]]["quick_playtime"];
					var rank_kill = game_data[Object.keys(game_data)[i]]["rank_kill"];
					var rank_death = game_data[Object.keys(game_data)[i]]["rank_death"];
					var rank_win = game_data[Object.keys(game_data)[i]]["rank_win"];
					var rank_game_count = game_data[Object.keys(game_data)[i]]["rank_game_count"];
					var rank_playtime = game_data[Object.keys(game_data)[i]]["rank_playtime"];
					if( quick_kill ) 
						game_data.all["quick_" + champion + "_kill"] = quick_kill;
					if( quick_death ) 
						game_data.all["quick_" + champion + "_death"] = quick_death;
					if( quick_win ) 
						game_data.all["quick_" + champion + "_win"] = quick_win;
					if( quick_game_count ) 
						game_data.all["quick_" + champion + "_game_count"] = quick_game_count;
					if( quick_playtime ) 
						game_data.all["quick_" + champion + "_playtime"] = quick_playtime;
					if( rank_kill ) 
						game_data.all["rank_" + champion + "_kill"] = rank_kill;
					if( rank_death ) 
						game_data.all["rank_" + champion + "_death"] = rank_death;
					if( rank_win ) 
						game_data.all["rank_" + champion + "_win"] = rank_win;
					if( rank_game_count ) 
						game_data.all["rank_" + champion + "_game_count"] = rank_game_count;
					if( rank_playtime ) 
						game_data.all["rank_" + champion + "_playtime"] = rank_playtime;
				}

				var level_div = $('#overview-section .column .masthead-player-progression .u-vertical-center');
				game_data.all["level"] = parseInt(level_div[0].children[0].data);
				var overwatch_id = Number($('script')[10].children[0].data.match(/\d/g).join(""));
				game_data.all["overwatch_id"] = overwatch_id;
				game_data.all["name"] = name;
				game_data.all["battletag"] = battletag;
				connection.query('INSERT INTO users SET ?', game_data.all, function(err, result){
					if(!err) {
						if(is_rank) {
							connection.query('SELECT user_id, name, battletag, level, rank_melee_lastshot, rank_solo_kill, rank_mission_kill, rank_lastshot, rank_deal, rank_kill, rank_environment_kill, rank_onecombo, rank_heal, rank_view_support, rank_destroy_teleport, rank_most_kill, rank_most_lastshot, rank_most_deal, rank_most_heal, rank_best_defence_support, rank_best_attack_support, rank_most_mission_kill, rank_most_mission_time, rank_most_onecombo, rank_most_solo_kill, rank_most_flood_time, rank_death, rank_environment_death, rank_card, rank_gold_medal, rank_silver_medal, rank_bronze_medal, rank_win, rank_game_count, rank_flood_time, rank_mission_time, rank_playtime, rank_most_melee_lastshot, rank_defence_support, rank_attack_support, rank_reaper_kill, rank_reaper_death, rank_reaper_win, rank_reaper_game_count, rank_reaper_playtime, rank_tracer_kill, rank_tracer_death, rank_tracer_win, rank_tracer_game_count, rank_tracer_playtime, rank_mercy_kill, rank_mercy_death, rank_mercy_win, rank_mercy_game_count, rank_mercy_playtime, rank_hanzo_kill,rank_hanzo_death,rank_hanzo_win,rank_hanzo_game_count,rank_hanzo_playtime,rank_torbjon_kill, rank_torbjon_death, rank_torbjon_win, rank_torbjon_game_count, rank_torbjon_playtime, rank_reinhardt_kill, rank_reinhardt_death, rank_reinhardt_win, rank_reinhardt_game_count, rank_reinhardt_playtime, rank_pharah_kill, rank_pharah_death, rank_pharah_win, rank_pharah_game_count, rank_pharah_playtime, rank_winston_kill, rank_winston_death, rank_winston_win, rank_winston_game_count, rank_winston_playtime, rank_widowmaker_kill, rank_widowmaker_death, rank_widowmaker_win, rank_widowmaker_game_count, rank_widowmaker_playtime, rank_bastion_kill, rank_bastion_death, rank_bastion_win, rank_bastion_game_count, rank_bastion_playtime, rank_symmetra_kill, rank_symmetra_death, rank_symmetra_win, rank_symmetra_game_count, rank_symmetra_playtime, rank_zenyatta_kill, rank_zenyatta_death, rank_zenyatta_win, rank_zenyatta_game_count, rank_zenyatta_playtime, rank_genji_kill, rank_genji_death, rank_genji_win, rank_genji_game_count, rank_genji_playtime, rank_roadhog_kill, rank_roadhog_death, rank_roadhog_win, rank_roadhog_game_count, rank_roadhog_playtime, rank_mccree_kill, rank_mccree_death, rank_mccree_win, rank_mccree_game_count, rank_mccree_playtime, rank_junkrat_kill, rank_junkrat_death, rank_junkrat_win, rank_junkrat_game_count, rank_junkrat_playtime, rank_zarya_kill, rank_zarya_death, rank_zarya_win, rank_zarya_game_count, rank_zarya_playtime, rank_soldier_kill, rank_soldier_death, rank_soldier_win, rank_soldier_game_count, rank_soldier_playtime, rank_lucio_kill, rank_lucio_death, rank_lucio_win, rank_lucio_game_count, rank_lucio_playtime, rank_dva_kill, rank_dva_death, rank_dva_win, rank_dva_game_count, rank_dva_playtime, rank_mei_kill, rank_mei_death, rank_mei_win, rank_mei_game_count, rank_mei_playtime, rank_ana_kill, rank_ana_death, rank_ana_win, rank_ana_game_count, rank_ana_playtime FROM users WHERE name=? and battletag=? LIMIT 1;', [ name, battletag ], function(err, data, field){
					   			res.json({ "responseCode": responseCode.GET_USERINFO_SUCCESS, "userData": data[0] });
					   			return;
					   		})
						}
						else {
							connection.query('SELECT user_id, name, battletag, level, quick_melee_lastshot, quick_solo_kill, quick_mission_kill, quick_lastshot, quick_deal, quick_kill, quick_environment_kill, quick_onecombo, quick_heal, quick_view_support, quick_destroy_teleport, quick_most_kill, quick_most_lastshot, quick_most_deal, quick_most_heal, quick_best_defence_support, quick_best_attack_support, quick_most_mission_kill, quick_most_mission_time, quick_most_onecombo, quick_most_solo_kill, quick_most_flood_time, quick_death, quick_environment_death, quick_card, quick_gold_medal, quick_silver_medal, quick_bronze_medal, quick_win, quick_game_count, quick_flood_time, quick_mission_time, quick_playtime, quick_most_melee_lastshot, quick_defence_support, quick_attack_support, quick_reaper_kill, quick_reaper_death, quick_reaper_win, quick_reaper_game_count, quick_reaper_playtime, quick_tracer_kill, quick_tracer_death, quick_tracer_win, quick_tracer_game_count, quick_tracer_playtime, quick_mercy_kill, quick_mercy_death, quick_mercy_win, quick_mercy_game_count, quick_mercy_playtime, quick_hanzo_kill,quick_hanzo_death,quick_hanzo_win,quick_hanzo_game_count,quick_hanzo_playtime,quick_torbjon_kill, quick_torbjon_death, quick_torbjon_win, quick_torbjon_game_count, quick_torbjon_playtime, quick_reinhardt_kill, quick_reinhardt_death, quick_reinhardt_win, quick_reinhardt_game_count, quick_reinhardt_playtime, quick_pharah_kill, quick_pharah_death, quick_pharah_win, quick_pharah_game_count, quick_pharah_playtime, quick_winston_kill, quick_winston_death, quick_winston_win, quick_winston_game_count, quick_winston_playtime, quick_widowmaker_kill, quick_widowmaker_death, quick_widowmaker_win, quick_widowmaker_game_count, quick_widowmaker_playtime, quick_bastion_kill, quick_bastion_death, quick_bastion_win, quick_bastion_game_count, quick_bastion_playtime, quick_symmetra_kill, quick_symmetra_death, quick_symmetra_win, quick_symmetra_game_count, quick_symmetra_playtime, quick_zenyatta_kill, quick_zenyatta_death, quick_zenyatta_win, quick_zenyatta_game_count, quick_zenyatta_playtime, quick_genji_kill, quick_genji_death, quick_genji_win, quick_genji_game_count, quick_genji_playtime, quick_roadhog_kill, quick_roadhog_death, quick_roadhog_win, quick_roadhog_game_count, quick_roadhog_playtime, quick_mccree_kill, quick_mccree_death, quick_mccree_win, quick_mccree_game_count, quick_mccree_playtime, quick_junkrat_kill, quick_junkrat_death, quick_junkrat_win, quick_junkrat_game_count, quick_junkrat_playtime, quick_zarya_kill, quick_zarya_death, quick_zarya_win, quick_zarya_game_count, quick_zarya_playtime, quick_soldier_kill, quick_soldier_death, quick_soldier_win, quick_soldier_game_count, quick_soldier_playtime, quick_lucio_kill, quick_lucio_death, quick_lucio_win, quick_lucio_game_count, quick_lucio_playtime, quick_dva_kill, quick_dva_death, quick_dva_win, quick_dva_game_count, quick_dva_playtime, quick_mei_kill, quick_mei_death, quick_mei_win, quick_mei_game_count, quick_mei_playtime, quick_ana_kill, quick_ana_death, quick_ana_win, quick_ana_game_count, quick_ana_playtime FROM users WHERE name=? and battletag=? LIMIT 1;', [ name, battletag ], function(err, data, field){
					   			res.json({ "responseCode": responseCode.GET_USERINFO_SUCCESS, "userData": data[0] });
					   			return;
					   		})
						}
					}
					else {
						res.json({ "responseCode": responseCode.GET_USERINFO_FAIL });
						return;
					}
				});
			});
		}
	});
}

exports.test = function(req, res) {
	res.end(process.env.MYSQL_PASSWORD);
}