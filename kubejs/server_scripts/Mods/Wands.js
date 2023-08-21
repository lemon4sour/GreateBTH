// priority: 0
ServerEvents.recipes(event => {
	// #region removal
		
	event.remove({ output: 'constructionwand:stone_wand' })
	event.remove({ output: 'constructionwand:iron_wand'})
	event.remove({ output: 'constructionwand:diamond_wand'})
	event.remove({ output: 'constructionwand:infinity_wand'})
	event.remove({ output: 'constructionwand:core_angel'})
	event.remove({ output: 'constructionwand:core_destruction'})

	event.shaped(
	Item.of('constructionwand:stone_wand'),
	[
		'  B',
		' A ',
		'A  ',
	],
	{
		A:'minecraft:stick',
		B:'create:andesite_alloy'

	}
	)
	event.shaped(
		Item.of('constructionwand:iron_wand'),
		[
			' CB',
			' AC',
			'A  ',
		],
		{
			A:'minecraft:stick',
			B:'gtceu:iron_plate',
			C:'gtceu:iron_screw'
		}
	)
	event.recipes.createMechanicalCrafting(
		Item.of('constructionwand:diamond_wand', 1),
		[ 
			'  BB',
			' CDB',
			' AC ',
			'A   ',
		],
		{
			A:'minecraft:stick',
			B:'gtceu:diamond_plate',
			C:'gtceu:diamond_screw',
			D:'gtceu:diamond_gear'
		}
	)

	event.recipes.createMechanicalCrafting(
		Item.of('constructionwand:infinity_wand', 1),
		[ 
			'  CB',
			'  DC',
			' A  ',
			'A   ',
		],
		{
			A:'minecraft:stick',
			B:'gtceu:nether_star_plate',
			C:'kubejs:netherite_plate',
			D:'gtceu:diamond_gear'

		}
	)
});