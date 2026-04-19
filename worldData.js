export const worldData = {

    // .1 status tracker
    currentRoom: `bedroom`,
    hasScrewdriver: false,
    hasBobbypin: false,

    //2. Opening text, preloaded with game start
    opening: `Your sleep-encrusted eyes slowly creak open as the blurry motion of a <em>ceiling</em> fan comes into focus. Its rhythmic teeter is creating the steady knocking sound that first brought you out of your deep sleep. 
    <br><br>
    You quickly realize that you don't know this place but remain still so as not to panic. You <em>look</em> at the <em>walls</em> and note that the wallpaper has seen better days and that... there are no windows...
    <br><br>
    The <em>smell</em> in the <em>bedroom</em> is a mix of stale sweat and cigarette ash; there's something else you can't quite place yet.
    <br><br>
    You nervously <em>touch</em> around the <em>bed</em> to confirm you're alone. The mattress is worn and without sheets, the blanket little more than a stained rag. The <em>taste</em> in the air is copper.
    <br><br>
    You rise from the <em>bed</em> and think you should <em>go</em> to the <em>door</em> or try to <em>take</em> something useful.`,

    //3. Rooms, look and description doubled for now
    bedroom: {
        description: `You're back in the bedroom with the familiar door, fan and bed to look at.`,
        Look: `You're back in the bedroom with the familiar door, fan and bed to look at.`,
        walls: {
            look: `The wallpaper is peeling and covered in the yellowing stains of cigarette smoke.`,
            listen: `You can only hear the fan above your head.`,
            smell: `You feel a little foolish smelling the walls.`,
            touch: `They feel like walls.`,
            taste: `You wonder where life went wrong that you're tasting the walls.`,
            open: `You try to claw at seams in the wallpaper in the hopes of finding a window. No luck.`,
            take: `How you clown!? Smarten up you half a fool.`
        },
        ceiling: {
            look: `The ceiling looks tarnished by decades of smoking and lack of repainting.`,
            listen: `You can only hear the rocking fan above your head.`,
            smell:  `Smells a lot like the walls.`,
            touch: `you stretch up on tippy-toes and touch the ceiling, you feel like a big silly kid.`,
            taste: `Dust. Definitely dust. You've also impressed yourself with the length of your tongue`,
            open: `There's no way to open the ceiling, but god loves a trier.`,
            take: `You feel like Atlas for a moment carrying the world on your shoulders before you give up on your inane pursuit of taking the ceiling with you.`
        },
        floor: {
            look: `The floorboards are creaky and worn.`,
            listen: `It's quiet, aside from the fan.`,
            smell: `It smells like a stronger version of the ceiling.`,
            touch: `reaching down to touch the floorboards you feel like a native american tracking buffalo by the vibrations in the ground if only for a second. Notwithstanding this last thought,  you're just some dazed stranger touching a dirty floor.`,
            taste: `You really shouldn't be tasting the floor but you give it one good lick. it tastes like it smells.`,
            open: `There's no way to open the floor but that feverish attempt certainly passed a few seconds.`,
            take: `There's nothing here to take.`
        },
        bed: {
            look: `A worn, sheetless mattress with a stained rag for a blanket.`,
            listen: `You hear nothing but the fan.`,
            smell: `It smells of stale sweat and cigarette ash.`,
            touch: `The mattress is lumpy and uncomfortable.`,
            taste: `You taste nothing but regret.`,
            open: `There's nothing inside the mattress to open.`,
            take: `There's nothing useful to take from the bed.`
        },
        fan: {
            look: `A ceiling fan, wobbling slightly on its mount. One good turn of a screw would probably fix it.`,
            listen: `The rhythmic knocking sound is starting to bug you.`,
            smell: `It smells like it sounds.`,
            touch: `It nearly chops your finhers off. What a stupid idea that was just now.`,
            taste: `Not recommended.`,
            open: `It's a fan, not a container.`,
            take: `It's bolted to the ceiling, though it is tempting to tear it off jist to shut it up.`
        },
        door: {
            look: `It's a heavy, imposing door.`,
            listen: `It's silent behind the door.`,
            smell: `A draft comes from underneath, smelling of stagnant air.`,
            touch: `The wood is rough and cold.`,
            taste: `Tastes like splinters. Feels like splinters.`,
            open: function() {
                worldData.currentRoom = `livingroom`;
                return `You push the heavy door open and walk into the living room.`;
            },
        },
    },

livingroom: {
    description: `A cramped living area. A small kitchen sits in the corner, and a hallway leads to the <em>bathroom door</em>. Behind you is the <em>bedroom door</em> you just came through.`,
    look: `A cramped living area. A small kitchen sits in the corner, and a hallway leads to the <em>bathroom door</em>. Behind you is the <em>bedroom door</em> you just came through.`,

    "bedroom door": {
        look: `The door back to the bedroom, it looks pretty much the same from this side.`,
        open: function() {
            worldData.currentRoom = `bedroom`;
            return `You go back into the bedroom.`;
        },
        listen: `you can still hear the faint sound of that annoying fan.`,
        smell: 'Smells like the other side did.',
        taste: `You taste the door and appatently never learn.`,
        touch: `Feels like door.`,
        take: `Where would you even take it?`
    },

    "bathroom door": {
        look: `A narrow door with a loose handle.`,
        open: function() {
            worldData.currentRoom = `bathroom`;
            return `You enter the tiny, humid bathroom.`;
        },
        Listen: `the sound of a dripping sink coming from within`,
        touch: `This one feels better than the last door.`,
        smell: `The aroma make you regret having a nose.`,
        taste: `You should really get tested if you ever get out of here.`,
        take: `You think about taking it to the bedroom door, in case they get lonely.`
    },

    kitchen: {
        look: `A small counter with a rusted sink and a humming fridge.`,
        listen: `The fridge is rattling like it's dying.`,
        smell: `Rotting meat, origin unknown.`,
        touch: `Greasy. Filthy.`,
        taste: `You'd rather not.`,
        take: `Nothing loose to take.`,
        Open: `Remeber your dream to open up a kitchen? No? Then get back to the task at hand!`
    },

    fridge: {
        look: `A white fridge covered in grime.`,
        open: `The fridge part is empty but for some raw mystery meat. The freezer is closed.`,
        take: `You aren't that hungry.`,
        smell: `Rotten.`,
        taste: `So many gross things for you to taste today. Your cup truly floweth over.`,
        listen: `Nothing but the whining of a conpressor motor long past its prime.`
    },

    freezer: {
        look: `The top part of the fridge. It's transparent but frosted over.`,
        open: `You open the freezer. A wave of frost-covered air hits you. you can see something that looks like a weird melon`,
        take: `Take the freezer door? No. Bad. Do better.`,
        taste: `Frosty and refreshing`,
        smell: `the cold air feels good up your nostrils.`,
        listen: `Nothing but the whining of a conpressor motor long past its prime.`,
        touch: `The frost melts against your skin, it brings some relief from the general grimieness in here.`
    },

    melon: {
        look: `Turning what you thought was fruit, you nearly fill your britches after revealing a severed head with a screwdriver through its eye!`,
        listen: `Thankfully, it's silent.`,
        smell: `Iron and decay.`,
        touch: `It's frozen solid.`,
        taste: `Jesus! What is wrong with you?`,
        take: `You are NOT carrying that around.`
    },

    screwdriver: {
        look: `It's a flathead, not normally found buried deep in an orbital socket.`,
        take: function() {
            worldData.hasScrewdriver = true;
            return `You pry the screwdriver from the head, some frozen flecks of eye are still stuck to it.`;
        },
        listen: `Even with patience and silence you struggle to hear the screwdrivers song`,
        Touch: `you caress the screwdriver sensually and wonder if whoever brought you here shpuld be more afraid of you`,
        taste: `Yum. Frozen eye could be the new cilantro!`,
        smell: `Smells like iron oxide and vitreus humor.`,
        open: `WhatsApp would that even look like? It's a rigid tool. Wise-up.`
    },

    "front door": {
        look: `The main exit. It's locked from the outside with a heavy-duty deadbolt.`,
        open: function() {
            if (worldData.hasScrewdriver && worldData.hasBobbypin) {
                return `Using the screwdriver as a tension wrench and the hairpin to rake the pins you fumble abput for a few minutes... the lock clicks! You are free!<br><br>` +worldData.closing;
            } else {
                return `It's locked. you're going to have to find a key or something to open it with.`;
            }
        }
    }
},

bathroom: {
        description: `A small, tiled room. It smells of dank and something far worse. behind you is the door back to the living room. A filthy bathtub, a suspect toilet, a dripping sink and a mirror that looks like it opens as a cabinet.`,

        look: `A small, tiled room. It smells of dank and something far worse. behind you is the door back to the living room. A filthy bathtub, a suspect toilet, a dripping sink and a mirror that looks like it opens as a cabinet.`,

door: {
            look: `The way back to the living room.`,
            open: function() {
                worldData.currentRoom = `livingroom`;
                return `You step back into the living room.`;
            },
take: `Be serious a moment.`,
listen: `You press your ear up to the door to observe it inner tones. If I was in that apartment right now I'd punch the other side so hard the only thing that would last longer than the ringing in your ear would be your concussion. Do you even care that you're trapped in here?`,
smell: `the usual door musk os overpowered by whatever is going on behind you.`,
taste: `There's are worse things here you could taste to be fair.`
        },
        bathtub: {
            look: `A porcelain tub stained with a ring of brown grime.`,
            smell: `Mildew.`,
            touch: `Slimy.`,
            open: `The drain is clogged with hair and something the consistency of snot. Your fingers are covered in it now, are you happy?`,
            taste: `Why do you do these things? What the hell happened to you in your childhood to make you like this?`
        },

        toilet: {
            look: `It hasn't been cleaned in years.`,
            open: `You lift the lid. Best not to look inside.`,
            taste: `Absolutely not.`,
            smell: `Smells fully loaded.`,
            touch: `Feels fully loaded.`,
            take: `Good idea, you might get peckish in a while (dimwit).`
        },

        mirror: {
            look: `A cracked mirror. You look terrible.`,
            open: `The mirror creaks open to reveal several strange bottles of pills and a stiff metal hairpin.`,
            smell: `Glassy with a hint of the contents in the toilet bowl.`,
            taste: `As you run your tongue along the surface of the glass your eyes meet their reflection for a moment and pausing in this perfect tableau you see yourself for the jackass you truly are.`,
            listen: `It hasn't nothing to say.`,
            touch: `You cut your fingers on a sharp Crack in the mirror's glass. You deserve it. Do it again!`
        },

        hairpin: {
            look: `It's sturdy. Could work as a makeshift tool.`,
            take: function() {
                worldData.hasBobbypin = true;
                return `You take the hairpin.`;
            },
            open: `<em> a moron attempts to open a hairpin.</em>`,
            smell: `Oh stop it.`,
            taste: `Tastes terrible. I hope it gives you aids.`,
            listen: `You jam it in your ear and puncture your eardrum because I'm sick of your foolishness.`,
            touch: `its rusty edges prick your finger. I hope you get lockjaw and die.`
        },

        sink: {
            look: `A pedestal sink with rust around the faucet.`,
            open: `You turn the knob, but only a brown trickle comes out.`,
            touch: `The brown water sort of washes the other filthy you touched from your hands but also sort of makes it all worse.`,
            smell: `Smells better than the toilet but not as good as the door.`,
            taste: `You're so dehydrated that this trickle of filth comes as a welcome relief.`
        },
      },

//4. closing
    closing: `You step into a dark hallway. The only window is barred. You hear footsteps in the distance getting louder as they approach. The end.`
};

