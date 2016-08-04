var connection = require('../config/database.js');
var responseCode = require('../models/responseCode.js');
exports.getUserData = function(req,res) 
{
	if(req.params.game == "quick") {
		var is_rank = false;
	}
	else if(req.params.game == "rank") {
		var is_rank = true;
	}
	else {
		res.json({ "responseCode": responseCode.GET_HERO_USERINFO_FAIL });
		return;
	}

	if(isNaN(req.params.id))
	{
		res.json({ "responseCode": responseCode.GET_HERO_USERINFO_FAIL });
		return;
	}

	if(is_rank)
	{
		switch(req.params.hero)
		{
			case "reaper":
				var sql = "SELECT rank_soul_consumed, rank_death_blossom_kill, rank_most_soul_consumed, rank_most_death_blossom_kill, rank_most_melee_lastshot, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo FROM reaper where overwatch_id = ? LIMIT 1;"
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "tracer":
				var sql = "SELECT rank_pulse_bomb_kill, rank_best_pulse_bomb_kill_in_game, rank_best_puls_bomb_attached_in_game, rank_pulse_bomb_attached, rank_melee_lastshot_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_deal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo FROM tracer where overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "mercy":
				var sql = "SELECT rank_resurrected, rank_best_resurrected_in_game, rank_best_melee_lastshot_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_blaster_kill, rank_best_blaster_kill_in_game, rank_attack_support, rank_best_attack_support_in_game, rank_defence_support, rank_best_defence_support_in_game FROM mercy where overwatch_id = ? LIMIT 1;"
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "hanzo":
				var sql = "SELECT rank_dragonstrike_kill, rank_best_dragonstrike_kill_in_game, rank_scatter_arrow_kill, rank_best_scatter_arrow_kill_in_game, rank_best_view_support_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo FROM hanzo where overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})	
				break;
			case "torbjon":
				var sql = "SELECT rank_armor_pack_created, rank_torbjon_kill, rank_turret_kill, rank_best_torbjon_kill_in_game, rank_molten_core_kill, rank_best_molten_core_kill_in_game, rank_best_melee_lastshot_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo FROM torbjon where overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;	
			case "reinhardt":
				var sql = "SELECT rank_damage_blocked, rank_best_damage_blocked_in_game, rank_charge_kill, rank_best_charge_kill_in_game, rank_fire_strike_kill, rank_best_fire_strike_kill_in_game, rank_earthshatter_kill, rank_best_earthshatter_kill_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo FROM reinhardt where overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "pharah":
				var sql = "SELECT rank_rocket_hit, rank_barrage_kill, rank_best_rocket_hit_in_game, rank_best_barrage_kill_in_game, rank_best_melee_lastshot_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate FROM pharah where overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "winston":
				var sql = "SELECT rank_knocked_back, rank_damage_blocked, rank_best_damage_blocked_in_game, rank_best_knocked_back_in_game, rank_melee_kill, rank_best_melee_kill_in_game, rank_jump_pack_kill, rank_best_jump_pack_kill_in_game, rank_best_melee_lastshot_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo, rank_primal_rage_kill, rank_best_primal_rage_kill_in_game FROM winston where overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "widowmaker":
				var sql = "SELECT rank_venom_mine_kill, rank_scoped_critical, rank_best_scoped_critical_in_game, rank_best_venom_mine_kill_in_game, rank_best_view_support_in_game, rank_best_scoped_accuracy_in_game, rank_best_melee_lastshot_in_game, rank_scoped_accuracy, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo FROM widowmaker where overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "bastion":
				var sql = "SELECT rank_recon_kill, rank_sentry_kill, rank_tank_kill, rank_best_sentry_kill_in_game, rank_best_tank_kill_in_game, rank_best_recon_kill_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo FROM bastion WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "symmetra":
				var sql = "SELECT rank_turret_kill, rank_best_turret_kill_in_game, rank_player_teleported, rank_best_player_teleported_in_game, rank_shield_provided, rank_best_shield_provided_in_game, rank_teleport_uptime, rank_best_teleport_uptime_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo FROM symmetra WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "zenyatta":
				var sql = "SELECT rank_best_transcendence_heal, rank_best_melee_lastshot_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo, rank_transcendence_heal, rank_attack_support, rank_best_attack_support_in_game, rank_defence_support, rank_best_defence_support_in_game FROM zenyatta WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "genji":
				var sql = "SELECT rank_dragonblade_kill, rank_best_dragonblade_kill_in_game, rank_damage_reflected, rank_best_damage_reflected_in_game, rank_best_melee_lastshot_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo FROM genji WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "roadhog":
				var sql = "SELECT rank_best_hook_in_game, rank_hook, rank_hook_attempted, rank_best_wholehog_kill_in_game, rank_wholehog_kill, rank_best_hook_accuracy_in_game, rank_best_melee_lastshot_in_game, rank_hook_accuracy, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo FROM roadhog WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "mccree":
				var sql = "SELECT rank_deadeye_kill, rank_best_deadeye_kill_in_game, rank_fan_the_hammer_kill, rank_best_melee_lastshot_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo, rank_best_fan_the_hammer_kill_in_game FROM mccree WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "junkrat":
				var sql = "SELECT rank_best_trapped_enemy_in_game, rank_trapped_enemy, rank_best_riptire_kill_in_game, rank_riptire_kill, rank_best_melee_lastshot_in_game, rank_trapped_enemy_per_minute, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo FROM junkrat WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "zarya":
				var sql = "SELECT rank_damage_blocked, rank_best_damage_blocked_in_game, rank_graviton_surge_kill, rank_best_graviton_kill_in_game, rank_best_high_energy_kill_in_game, rank_high_energy_kill, rank_barrier, rank_best_average_energy_in_game, rank_best_melee_lastshot_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo, rank_best_barrier_in_game FROM zarya WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "soldier":
				var sql = "SELECT rank_best_helix_rocket_kill_in_game, rank_helix_rocket_kill, rank_tactical_visor_kill, rank_best_tactical_visor_kill_in_game, rank_biotic_field_deployed, rank_biotic_field_heal, rank_best_melee_lastshot_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo FROM soldier WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "lucio":
				var sql = "SELECT rank_sound_barrier, rank_best_sound_barrier_in_game, rank_best_melee_lastshot_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo, rank_attack_support, rank_best_attack_support_in_game, rank_defence_support, rank_best_defence_support_in_game FROM lucio WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "dva":
				var sql = "SELECT rank_mech_called, rank_best_mech_called_in_game, rank_best_damage_blocked_in_game, rank_damage_blocked, rank_mech_destroyed, rank_best_melee_lastshot_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo, rank_self_destruct_kill, rank_best_self_destruct_kill FROM dva WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "mei":
				var sql = "SELECT rank_enemy_frozen, rank_best_enemy_frozen_in_game, rank_best_blizzard_kill_in_game, rank_blizzard_kill, rank_best_damage_blocked_in_game, rank_damage_blocked, rank_best_melee_lastshot_in_game, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo FROM mei WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "ana":
				var sql = "SELECT rank_best_melee_lastshot_in_game, rank_nano_boosts_applied, rank_nano_boosts_support, rank_best_nano_boosts_support_in_game, rank_unscoped_accuracy, rank_scoped_accuracy, rank_kill, rank_lastshot, rank_solo_kill, rank_deal, rank_mission_kill, rank_onecombo, rank_melee_lastshot, rank_critical, rank_critical_accuracy, rank_kda, rank_accuracy, rank_heal, rank_destroy_teleport, rank_self_heal, rank_attack_support, rank_best_kill_in_life, rank_best_deal_in_life, rank_best_heal_in_life, rank_best_deal_in_game, rank_best_heal_in_game, rank_best_kill_in_game, rank_best_lastshot_in_game, rank_best_mission_kill_in_game, rank_best_mission_time_in_game, rank_best_solo_kill_in_game, rank_best_critical_in_game, rank_best_critical_in_life, rank_best_self_heal_in_game, rank_best_defence_support, rank_death, rank_environment_death, rank_bronze_medal, rank_silver_medal, rank_gold_medal, rank_card, rank_playtime, rank_game_count, rank_win, rank_mission_time, rank_flood_time, rank_win_rate, rank_best_onecombo, rank_defence_support, rank_enemy_slept, rank_best_enemy_slept_in_game FROM ana WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			default:
				res.json({ "responseCode": responseCode.GET_HERO_USERINFO_FAIL });
				return;
				break;
		}
			
	}
	else /*-----------빠른대전-----------*/
	{
		switch(req.params.hero)
		{
			case "reaper":
				var sql = "SELECT quick_soul_consumed, quick_death_blossom_kill, quick_most_soul_consumed, quick_most_death_blossom_kill, quick_most_melee_lastshot, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo FROM reaper where overwatch_id = ? LIMIT 1;"
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "tracer":
				var sql = "SELECT quick_pulse_bomb_kill, quick_best_pulse_bomb_kill_in_game, quick_best_puls_bomb_attached_in_game, quick_pulse_bomb_attached, quick_melee_lastshot_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_deal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo FROM tracer LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "mercy":
				var sql = "SELECT quick_resurrected, quick_best_resurrected_in_game, quick_best_melee_lastshot_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_blaster_kill, quick_best_blaster_kill_in_game, quick_attack_support, quick_best_attack_support_in_game, quick_defence_support, quick_best_defence_support_in_game FROM mercy where overwatch_id = ? LIMIT 1;"
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "hanzo":
				var sql = "SELECT quick_dragonstrike_kill, quick_best_dragonstrike_kill_in_game, quick_scatter_arrow_kill, quick_best_scatter_arrow_kill_in_game, quick_best_view_support_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo FROM hanzo where overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})	
				break;
			case "torbjon":
				var sql = "SELECT quick_armor_pack_created, quick_torbjon_kill, quick_turret_kill, quick_best_torbjon_kill_in_game, quick_molten_core_kill, quick_best_molten_core_kill_in_game, quick_best_melee_lastshot_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo FROM torbjon where overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})	
				break;
			case "reinhardt":
				var sql = "SELECT quick_damage_blocked, quick_best_damage_blocked_in_game, quick_charge_kill, quick_best_charge_kill_in_game, quick_fire_strike_kill, quick_best_fire_strike_kill_in_game, quick_earthshatter_kill, quick_best_earthshatter_kill_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo FROM reinhardt where overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "pharah":
				var sql = "SELECT quick_rocket_hit, quick_barrage_kill, quick_best_rocket_hit_in_game, quick_best_barrage_kill_in_game, quick_best_melee_lastshot_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate FROM pharah where overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "winston":
				var sql = "SELECT quick_knocked_back, quick_damage_blocked, quick_best_damage_blocked_in_game, quick_best_knocked_back_in_game, quick_melee_kill, quick_best_melee_kill_in_game, quick_jump_pack_kill, quick_best_jump_pack_kill_in_game, quick_best_melee_lastshot_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo, quick_primal_rage_kill, quick_best_primal_rage_kill_in_game FROM winston where overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "widowmaker":
				var sql = "SELECT quick_venom_mine_kill, quick_scoped_critical, quick_best_scoped_critical_in_game, quick_best_venom_mine_kill_in_game, quick_best_view_support_in_game, quick_best_scoped_accuracy_in_game, quick_best_melee_lastshot_in_game, quick_scoped_accuracy, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo FROM widowmaker where overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "bastion":
				var sql = "SELECT quick_recon_kill, quick_sentry_kill, quick_tank_kill, quick_best_sentry_kill_in_game, quick_best_tank_kill_in_game, quick_best_recon_kill_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo FROM bastion WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "symmetra":
				var sql = "SELECT quick_turret_kill, quick_best_turret_kill_in_game, quick_player_teleported, quick_best_player_teleported_in_game, quick_shield_provided, quick_best_shield_provided_in_game, quick_teleport_uptime, quick_best_teleport_uptime_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo FROM symmetra WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "zenyatta":
				var sql = "SELECT quick_best_transcendence_heal, quick_best_melee_lastshot_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo, quick_transcendence_heal, quick_attack_support, quick_best_attack_support_in_game, quick_defence_support, quick_best_defence_support_in_game FROM zenyatta WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "genji":
				var sql = "SELECT quick_dragonblade_kill, quick_best_dragonblade_kill_in_game, quick_damage_reflected, quick_best_damage_reflected_in_game, quick_best_melee_lastshot_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo FROM genji WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "roadhog":
				var sql = "SELECT quick_best_hook_in_game, quick_hook, quick_hook_attempted, quick_best_wholehog_kill_in_game, quick_wholehog_kill, quick_best_hook_accuracy_in_game, quick_best_melee_lastshot_in_game, quick_hook_accuracy, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo FROM roadhog WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "mccree":
				var sql = "SELECT quick_deadeye_kill, quick_best_deadeye_kill_in_game, quick_fan_the_hammer_kill, quick_best_melee_lastshot_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo, quick_best_fan_the_hammer_kill_in_game FROM mccree WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "junkrat":
				var sql = "SELECT quick_best_trapped_enemy_in_game, quick_trapped_enemy, quick_best_riptire_kill_in_game, quick_riptire_kill, quick_best_melee_lastshot_in_game, quick_trapped_enemy_per_minute, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo FROM junkrat WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "zarya":
				var sql = "SELECT quick_damage_blocked, quick_best_damage_blocked_in_game, quick_graviton_surge_kill, quick_best_graviton_kill_in_game, quick_best_high_energy_kill_in_game, quick_high_energy_kill, quick_barrier, quick_best_average_energy_in_game, quick_best_melee_lastshot_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo, quick_best_barrier_in_game FROM zarya WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "soldier":
				var sql = "SELECT quick_best_helix_rocket_kill_in_game, quick_helix_rocket_kill, quick_tactical_visor_kill, quick_best_tactical_visor_kill_in_game, quick_biotic_field_deployed, quick_biotic_field_heal, quick_best_melee_lastshot_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo FROM soldier WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "lucio":
				var sql = "SELECT quick_sound_barrier, quick_best_sound_barrier_in_game, quick_best_melee_lastshot_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo, quick_attack_support, quick_best_attack_support_in_game, quick_defence_support, quick_best_defence_support_in_game FROM lucio WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "dva":
				var sql = "SELECT quick_mech_called, quick_best_mech_called_in_game, quick_best_damage_blocked_in_game, quick_damage_blocked, quick_mech_destroyed, quick_best_melee_lastshot_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo, quick_self_destruct_kill, quick_best_self_destruct_kill FROM dva WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "mei":
				var sql = "SELECT quick_enemy_frozen, quick_best_enemy_frozen_in_game, quick_best_blizzard_kill_in_game, quick_blizzard_kill, quick_best_damage_blocked_in_game, quick_damage_blocked, quick_best_melee_lastshot_in_game, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo FROM mei WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			case "ana":
				var sql = "SELECT quick_best_melee_lastshot_in_game, quick_nano_boosts_applied, quick_nano_boosts_support, quick_best_nano_boosts_support_in_game, quick_unscoped_accuracy, quick_scoped_accuracy, quick_kill, quick_lastshot, quick_solo_kill, quick_deal, quick_mission_kill, quick_onecombo, quick_melee_lastshot, quick_critical, quick_critical_accuracy, quick_kda, quick_accuracy, quick_heal, quick_destroy_teleport, quick_self_heal, quick_attack_support, quick_best_kill_in_life, quick_best_deal_in_life, quick_best_heal_in_life, quick_best_deal_in_game, quick_best_heal_in_game, quick_best_kill_in_game, quick_best_lastshot_in_game, quick_best_mission_kill_in_game, quick_best_mission_time_in_game, quick_best_solo_kill_in_game, quick_best_critical_in_game, quick_best_critical_in_life, quick_best_self_heal_in_game, quick_best_defence_support, quick_death, quick_environment_death, quick_bronze_medal, quick_silver_medal, quick_gold_medal, quick_card, quick_playtime, quick_game_count, quick_win, quick_mission_time, quick_flood_time, quick_win_rate, quick_best_onecombo, quick_defence_support, quick_enemy_slept, quick_best_enemy_slept_in_game FROM ana WHERE overwatch_id = ? LIMIT 1;";
				connection.query(sql, [req.params.id], function(err, data){
					if(err) console.log(err);
					res.json({ "responseCode": responseCode.GET_HERO_USERINFO_SUCCESS, "heroData": data[0] });
					return;
				})
				break;
			default:
				res.json({ "responseCode": responseCode.GET_HERO_USERINFO_FAIL });
				return;
				break;
		}
	}
	
}