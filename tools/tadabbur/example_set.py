# -*- coding: utf-8 -*-
"""New explained verses, set 7 (28 November 2026): 2:197, 3:102, 9:119, 20:131,
39:42, 40:7, 42:38, 49:11."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from tad_newlib import Q, QF, L, W, NEW, add_new

ENTRIES = [
    # ------------------------------------------------------------ 2:197
    (2, NEW(2, 197,
        why="Hajj is in known months, and the verse fences it with three prohibitions at once: no rafath — no intimacy, nor talk of it — no fusuq — no disobedience — and no jidal — no quarrelling — during the Hajj. The Prophet ﷺ said that whoever performs Hajj without rafath or fusuq returns as he was on the day his mother bore him (al-Bukhari 1521).\n\n"
            "Then a correction. Ibn Abbas said the people of Yemen used to set out for Hajj without provisions, saying 'we rely on Allah', and on arrival would beg from people — so the verse came down: and take provision (al-Bukhari 1523). Relying on Allah is not leaving the bag at home.\n\n"
            "And in the same breath the provision is lifted to another level: but the best provision is taqwa. The bag is for the road; taqwa is for the journey the road stands for. Al-A'raf says the same of clothing: the garment of taqwa — that is best (7:26). And the verse ends with a call to the only people it can reach: so fear Me, O people of understanding.",
        whyAr="" + QF(2, 197, "الحج أشهر معلومات") + "، والآيةُ تُسيّجه بثلاث نواهٍ معًا: " + QF(2, 197, "فلا رفث ولا فسوق ولا جدال في الحج") + ". وقال النبيّ ﷺ إنّ من حجّ فلم يرفث ولم يفسق رجع كيومَ ولدته أمُّه (البخاري ١٥٢١).\n\n"
              "ثم تصحيح: قال ابنُ عبّاس إنّ أهل اليمن كانوا يحجّون ولا يتزوّدون ويقولون نحن المتوكّلون، فإذا قدموا سألوا الناس، فنزلت: " + QF(2, 197, "وتزودوا") + " (البخاري ١٥٢٣). فالاعتمادُ على ربّك لا يعني أن تترك زادك في البيت.\n\n"
              "وفي النَّفَس نفسه يُرفع الزادُ إلى مرتبةٍ أخرى: " + QF(2, 197, "فإن خير الزاد التقوى") + ". فالزادُ للطريق، والتقوى للرحلة التي يرمز إليها الطريق. والأعرافُ تقول ذلك في اللباس: " + QF(7, 26, "ولباس التقوى ذلك خير") + ". وتُختم الآيةُ بنداء من تبلغهم وحدهم: " + QF(2, 197, "واتقون ياأولي الألباب") + ".",
        plain="Three things are fenced off in Hajj — intimacy, disobedience and quarrelling. Then the people who set out with no provisions, saying 'we rely on Allah', are told to take provision (al-Bukhari 1523) — and in the same breath: the best provision is taqwa.",
        plainAr="ثلاثةُ أمورٍ ممنوعةٌ في الحجّ: الرفثُ والفسوقُ والجدال. ثم يُؤمر من خرجوا بلا زادٍ متوكّلين بأن يتزوّدوا (البخاري ١٥٢٣)، وفي النَّفَس نفسه يُقال إنّ أفضلَ الزاد التقوى.",
        ref="Surah Al-Baqarah (2:197), read with Al-A'raf (7:26); Hajj without rafath or fusuq: Sahih al-Bukhari 1521, from Abu Hurayrah; the people of Yemen: Sahih al-Bukhari 1523, from Ibn Abbas",
        refAr="سورة البقرة، الآية ١٩٧، مع سورة الأعراف ٢٦. والحجُّ بلا رفثٍ ولا فسوق: صحيح البخاري ١٥٢١، عن أبي هريرة رضي الله عنه؛ وأهلُ اليمن: صحيح البخاري ١٥٢٣، عن ابن عبّاس رضي الله عنهما",
        strength="hadith",
        links=[
            L(7, 26, "Al-Baqarah says the best provision is taqwa; Al-A'raf says the same of clothing: the garment of taqwa — that is best.",
              "البقرةُ تجعل التقوى أفضلَ الزاد، والأعرافُ تقول ذلك في اللباس: " + QF(7, 26, "ولباس التقوى ذلك خير") + "."),
            L(22, 37, "Al-Hajj says what of the pilgrimage's sacrifice reaches Allah: not its flesh, nor its blood — but the taqwa from you.",
              "الحجُّ تقول ما الذي يبلغ اللهَ من هدي الحجّ: " + QF(22, 37, "لن ينال الله لحومها ولا دماؤها ولكن يناله التقوى منكم") + "."),
        ])),

    # ------------------------------------------------------------ 3:102
    (3, NEW(3, 102,
        why="O you who believe, fear Allah as He should be feared — haqqa tuqatih — and do not die except as Muslims. The first half asks for a taqwa that matches its object: the fear due to Him, not a fear sized to our convenience. The second half asks for something no one controls: the moment of death.\n\n"
            "The way to keep the second command is the first. You cannot choose when you die, so the only way to be sure of dying as a Muslim is to be living as one at every moment. The command about the last moment is a command about all of them.\n\n"
            "At-Taghabun says: fear Allah as far as you are able (64:16). Some early commentators said that verse lightened this one; others read them together — what is due to Him is the aim, and what you are able is the measure of what is asked of you. And the Prophet ﷺ placed this verse in the sermon for needs, with the opening of An-Nisa and 33:70 (Abu Dawud 2118; authenticated by al-Albani).",
        whyAr="" + Q(3, 102) + ". الشطرُ الأوّل يطلب تقوى تليق بمن تُتّقى، أي التقوى التي هي حقُّه، لا تقوى على مقاس راحتنا. والشطرُ الثاني يطلب أمرًا لا يملكه أحد: لحظةَ الموت.\n\n"
              "والسبيلُ إلى الأمر الثاني هو الأوّل؛ فلا تستطيع أن تختار متى تموت، والطريقُ الوحيد لتكون مسلمًا حين تموت أن تكون مسلمًا في كلّ لحظةٍ تعيشها. فالأمرُ في اللحظة الأخيرة أمرٌ في اللحظات كلّها.\n\n"
              "والتغابنُ تقول: " + QF(64, 16, "فاتقوا الله ما استطعتم") + ". فقال بعضُ المفسّرين الأوائل إنها خفّفت هذه الآية، وجمع غيرُهم بينهما: حقُّ التقوى هو الغاية، والاستطاعةُ مقدارُ ما يُطلب منك. وقد جعل النبيّ ﷺ هذه الآيةَ في خطبة الحاجة، مع أوّل النساء وآية الأحزاب (أبو داود ٢١١٨، وصحّحه الألباني).",
        plain="Fear Allah as He should be feared, and do not die except as Muslims. No one chooses the moment of death — so the only way to keep the second command is to keep the first at every moment. At-Taghabun gives the measure: as far as you are able (64:16).",
        plainAr="أن تتّقي الله حقَّ التقوى، وألّا تموت إلا مسلمًا. ولا أحدَ يختار لحظةَ موته، فالسبيلُ الوحيد لحفظ الأمر الثاني أن تحفظ الأوّلَ في كلّ لحظة. والتغابنُ تذكر المقياس: بقدر الاستطاعة.",
        ref="Surah Al 'Imran (3:102), read with At-Taghabun (64:16); the sermon for needs: Sunan Abu Dawud 2118, from Ibn Mas'ud — authenticated by al-Albani",
        refAr="سورة آل عمران، الآية ١٠٢، مع سورة التغابن ١٦؛ وخطبةُ الحاجة: سنن أبي داود ٢١١٨، عن ابن مسعود رضي الله عنه — وصحّحه الألباني",
        strength="hadith",
        links=[
            L(64, 16, "Al 'Imran asks for the taqwa that is due to Him; At-Taghabun gives the measure of what is asked of each person: fear Allah as far as you are able.",
              "آلُ عمران تطلب التقوى التي هي حقُّه، والتغابنُ تذكر مقدارَ ما يُطلب من كلّ أحد: " + QF(64, 16, "فاتقوا الله ما استطعتم") + "."),
            L(33, 70, "The sermon for needs follows this verse with Al-Ahzab: fear Allah, and speak a word that is straight.",
              "خطبةُ الحاجة تُتبع هذه الآيةَ بآية الأحزاب: " + Q(33, 70) + "."),
            L(4, 1, "And it opens with An-Nisa: O people, fear your Lord who created you from one soul.",
              "وتُفتتح بآية النساء: " + QF(4, 1, "ياأيها الناس اتقوا ربكم الذي خلقكم من نفس واحدة") + "."),
        ])),

    # ------------------------------------------------------------ 9:119
    (9, NEW(9, 119,
        why="The verse before is about the three who stayed behind from Tabuk without excuse — until the earth, for all its breadth, closed in on them, and their own selves closed in on them, and they knew there was no refuge from Allah except in Him; then He turned to them, so that they might turn (9:118). One of the three, Ka'b ibn Malik, told the whole story: when the Prophet ﷺ returned, others made excuses, and he decided he could not come out of it with a lie, and told the truth. Fifty nights of being shunned followed, and then these verses came down (al-Bukhari 4418).\n\n"
            "Then this verse, addressed to everyone: fear Allah, and be with the truthful. It does not say only 'be truthful'; it says be with them — keep their company, be counted among them. Truthfulness is something a person grows into among people who practise it.\n\n"
            "Ka'b said afterwards that, after guiding him to Islam, Allah had never given him a greater blessing than that he did not lie to the Messenger of Allah ﷺ (al-Bukhari 4418).",
        whyAr="الآيةُ التي قبلها في الثلاثة الذين تخلّفوا عن تبوك بلا عذر: " + QF(9, 118, "حتى إذا ضاقت عليهم الأرض بما رحبت وضاقت عليهم أنفسهم وظنوا أن لا ملجأ من الله إلا إليه ثم تاب عليهم ليتوبوا") + ". وروى أحدُهم، كعبُ بن مالك، القصّةَ كلَّها: لمّا رجع النبيّ ﷺ اعتذر آخرون، وعلم كعبٌ أنه لن ينجو بكذبة، فصدق. ثم كانت خمسون ليلةً من الهجر، ثم نزلت هذه الآيات (البخاري ٤٤١٨).\n\n"
              "ثم هذه الآيةُ للناس جميعًا: " + Q(9, 119) + ". فهي لا تقول كونوا صادقين فقط، بل كونوا معهم: اصحبوهم، وكونوا في عدادهم. فالصدقُ شيءٌ ينمو فيه المرءُ بين قومٍ يعيشونه.\n\n"
              "وقال كعبٌ بعد ذلك إنه لم يُعطَ نعمةً بعد هدايته للإسلام أعظمَ من صدقه رسولَ الله ﷺ، وألّا يكون كذبه (البخاري ٤٤١٨).",
        plain="Ka'b ibn Malik stayed behind from Tabuk, refused to lie his way out, and was shunned for fifty nights before these verses came down (al-Bukhari 4418). The command to everyone is not only 'be truthful' but 'be with the truthful' — truthfulness grows in company.",
        plainAr="تخلّف كعبُ بن مالك عن تبوك، وأبى أن ينجو بكذبة، فهُجر خمسين ليلةً حتى نزلت هذه الآيات (البخاري ٤٤١٨). والأمرُ للناس جميعًا ليس بالصدق وحده، بل بصحبة الصادقين، فالصدقُ ينمو في الصحبة.",
        ref="Surah At-Tawbah (9:119), read with 9:117-118; Ka'b ibn Malik's account: Sahih al-Bukhari 4418",
        refAr="سورة التوبة، الآية ١١٩، مع الآيتين ١١٧–١١٨؛ وروايةُ كعب بن مالك: صحيح البخاري ٤٤١٨",
        strength="hadith",
        links=[
            L(9, 118, "The verse before is the three who stayed behind: the earth closed in on them for all its breadth, until they knew there was no refuge from Allah but in Him — and He turned to them.",
              "والآيةُ التي قبلها في الثلاثة المتخلّفين: " + QF(9, 118, "حتى إذا ضاقت عليهم الأرض بما رحبت وضاقت عليهم أنفسهم") + "."),
            L(33, 35, "Al-Ahzab counts truthfulness among the ten qualities promised forgiveness, for men and women alike: the truthful men and the truthful women.",
              "الأحزابُ تعدّ الصدقَ في الصفات العشر الموعودة بالمغفرة، للرجال والنساء معًا: " + QF(33, 35, "والصادقين والصادقات") + "."),
        ])),

    # ------------------------------------------------------------ 20:131
    (20, NEW(20, 131,
        why="Do not extend your eyes towards what We have given some groups of them to enjoy — the flower of the life of this world — so that We may test them by it. And the provision of your Lord is better and more lasting.\n\n"
            "La tamuddanna 'aynayk — do not stretch your eyes. Not 'do not look'; do not let the look become a reaching. What is looked at is called zahrah, a flower: beautiful, and certain to wilt. And the verse names its purpose for them — li-naftinahum fih, to test them by it. What looks like a gift to the onlooker is a trial to the one holding it.\n\n"
            "'Umar once came into the Prophet's ﷺ room and saw nothing of value in it but three hides, and asked him to pray that his people be made prosperous, as the Persians and Romans had been. The Prophet ﷺ, who had been leaning, sat up and said: are you in doubt, son of al-Khattab? Those are people who have been given their good things in this life (al-Bukhari 2468). The verse's last words are the answer — better and more lasting, the same pair Al-A'la uses for the Hereafter (87:17).",
        whyAr="" + Q(20, 131) + ".\n\n"
              "والنهيُ عن مدّ العينين ليس نهيًا عن النظر، بل عن أن يصير النظرُ امتدادًا وتطلّعًا. وما يُنظر إليه يُسمّى زهرة: جميلةٌ، ولا بدّ أن تذبل. والآيةُ تذكر الغايةَ منه في حقّهم: " + QF(20, 131, "لنفتنهم فيه") + ". فما يبدو عطاءً للناظر هو امتحانٌ لمن في يده.\n\n"
              "ودخل عمرُ على النبيّ ﷺ فلم يرَ في بيته شيئًا ذا قيمة إلا ثلاثةَ أُهُب. فسأله أن يدعو الله أن يوسّع على أمّته كما وُسّع على فارس والروم. فجلس النبيّ ﷺ وكان متّكئًا، وقال: أفي شكٍّ أنت يا ابن الخطّاب؟ أولئك قومٌ عُجّلت لهم طيّباتُهم في الحياة الدنيا (البخاري ٢٤٦٨). وآخرُ كلمات الآية هي الجواب: " + QF(20, 131, "ورزق ربك خير وأبقى") + "، وهو الزوجُ نفسه الذي تصف به الأعلى الآخرة.",
        plain="Do not stretch your eyes towards what others were given to enjoy — it is a flower, certain to wilt, and a test for those who hold it. When 'Umar asked for the prosperity of Persia and Rome, the Prophet ﷺ said those people had their good things hurried to them in this life (al-Bukhari 2468).",
        plainAr="لا تتطلّع بعينيك نحو ما مُتّع به غيرُك، فهو زهرةٌ لا بدّ أن تذبل، وامتحانٌ لمن في يده. ولمّا سأل عمرُ سعةَ فارس والروم، قال النبيّ ﷺ إنّ أولئك عُجّلت لهم طيّباتُهم في الدنيا (البخاري ٢٤٦٨).",
        ref="Surah Ta-Ha (20:131), read with Al-Hijr (15:88) and Al-A'la (87:17); 'Umar and the three hides: Sahih al-Bukhari 2468, from Ibn Abbas",
        refAr="سورة طه، الآية ١٣١، مع سورة الحجر ٨٨ وسورة الأعلى ١٧؛ وعمرُ والأُهُبُ الثلاث: صحيح البخاري ٢٤٦٨، عن ابن عبّاس رضي الله عنهما",
        strength="hadith",
        links=[
            L(87, 16, "Al-A'la says people prefer the life of this world — and gives the Hereafter the same two words this verse gives the provision of your Lord: better, and more lasting.",
              "الأعلى تقول إنّ الناس يؤثرون الحياةَ الدنيا، وتصف الآخرةَ بالكلمتين اللتين تصف بهما هذه الآيةُ رزقَ ربّك: " + Q(87, 16) + " " + Q(87, 17) + ".", 17),
            L(15, 88, "Al-Hijr gives the same command in almost the same words, and adds: do not grieve over them, and lower your wing to the believers.",
              "الحِجرُ تذكر الأمرَ نفسه بلفظٍ قريبٍ جدًّا، وتزيد: " + QF(15, 88, "ولا تحزن عليهم واخفض جناحك للمؤمنين") + "."),
        ])),

    # ------------------------------------------------------------ 39:42
    (39, NEW(39, 42,
        why="Allah takes the souls at the time of their death — and those that have not died, in their sleep. Then He keeps the one for which He has decreed death, and sends the other back until a named term.\n\n"
            "The verse puts sleep and death in one sentence, with one verb — yatawaffa, to take in full. Every night is a small rehearsal of the last one: the soul is taken, and either kept or returned. In that, the verse says, are signs for people who reflect. Al-An'am uses the same verb for sleep: it is He who takes you by night, and knows what you earned by day (6:60).\n\n"
            "The Prophet ﷺ taught a prayer for the moment of lying down that is this verse turned into words: in Your name, my Lord, I lay down my side, and by You I raise it; if You keep my soul, have mercy on it, and if You send it back, protect it as You protect Your righteous servants (al-Bukhari 6320). And An-Naba gives sleep its own word: We made your sleep a cutting-off — subat (78:9).",
        whyAr="" + Q(39, 42) + ".\n\n"
              "تجمع الآيةُ النومَ والموتَ في جملةٍ واحدة، بفعلٍ واحد: التوفّي، أي القبضُ التامّ. فكلُّ ليلةٍ تمرينٌ صغيرٌ على الليلة الأخيرة: تُقبض النفس، ثم تُمسَك أو تُردّ. وفي ذلك آياتٌ لمن يتفكّر. والأنعامُ تستعمل الفعلَ نفسه للنوم: " + QF(6, 60, "وهو الذي يتوفاكم بالليل ويعلم ما جرحتم بالنهار") + ".\n\n"
              "وعلّم النبيّ ﷺ دعاءً للحظة الاضطجاع هو هذه الآيةُ في صورة كلمات: «بِاسْمِكَ رَبِّ وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ، إِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ» (البخاري ٦٣٢٠). والنبأُ تعطي النومَ لفظَه الخاصّ: " + Q(78, 9) + ".",
        plain="Sleep and death are put in one sentence with one verb: every night the soul is taken, and either kept or sent back. The Prophet ﷺ turned the verse into a prayer for lying down: if You keep my soul, have mercy on it; if You send it back, protect it (al-Bukhari 6320).",
        plainAr="النومُ والموتُ في جملةٍ واحدة بفعلٍ واحد: كلَّ ليلةٍ تُقبض النفس، ثم تُمسَك أو تُردّ. وجعل النبيّ ﷺ الآيةَ دعاءً عند النوم: إن أمسكتَ نفسي فارحمها، وإن أرسلتَها فاحفظها (البخاري ٦٣٢٠).",
        ref="Surah Az-Zumar (39:42), read with Al-An'am (6:60) and An-Naba (78:9); the prayer at lying down: Sahih al-Bukhari 6320, from Abu Hurayrah",
        refAr="سورة الزمر، الآية ٤٢، مع سورة الأنعام ٦٠ وسورة النبأ ٩؛ ودعاءُ النوم: صحيح البخاري ٦٣٢٠، عن أبي هريرة رضي الله عنه",
        strength="hadith",
        links=[
            L(78, 9, "An-Naba gives sleep its own word: and We made your sleep a cutting-off — the small daily death Az-Zumar describes.",
              "النبأُ تعطي النومَ لفظَه: " + Q(78, 9) + "، وهو الموتُ الصغيرُ اليوميّ الذي تصفه الزمر."),
            L(6, 60, "Al-An'am uses the same verb for sleep: it is He who takes you by night, and knows what you earned by day — then raises you in it.",
              "الأنعامُ تستعمل الفعلَ نفسه للنوم: " + QF(6, 60, "وهو الذي يتوفاكم بالليل ويعلم ما جرحتم بالنهار ثم يبعثكم فيه") + "."),
        ])),

    # ------------------------------------------------------------ 40:7
    (40, NEW(40, 7,
        why="Those who carry the Throne, and those around it, glorify the praise of their Lord, believe in Him — and ask forgiveness for those who believe. The highest of creation, nearest the Throne, are described doing three things, and the third is for us.\n\n"
            "Their prayer is given in their own words: our Lord, You have encompassed everything in mercy and knowledge — so forgive those who repent and follow Your way, and protect them from the punishment of the Fire. They open with His mercy and His knowledge together, and then ask from both: His knowledge of who has repented, His mercy for them.\n\n"
            "And the next verse carries the prayer further: our Lord, admit them to the gardens of 'Adn which You promised them — and whoever was righteous among their fathers, their spouses and their offspring (40:8). They pray for families to be kept together. A believer who has never seen an angel is being prayed for at the Throne, for what he does: repenting, and following the way.",
        whyAr="" + QF(40, 7, "الذين يحملون العرش ومن حوله يسبحون بحمد ربهم ويؤمنون به ويستغفرون للذين آمنوا") + ". أعلى الخلق وأقربُهم من العرش يُوصفون بثلاثة أعمال، والثالثُ لنا.\n\n"
              "ودعاؤهم مذكورٌ بكلماتهم: " + QF(40, 7, "ربنا وسعت كل شيء رحمة وعلما فاغفر للذين تابوا واتبعوا سبيلك وقهم عذاب الجحيم") + ". يفتتحون برحمته وعلمه معًا، ثم يسألون منهما: علمَه بمن تاب، ورحمتَه به.\n\n"
              "والآيةُ التي تليها تمدّ الدعاء: " + QF(40, 8, "ربنا وأدخلهم جنات عدن التي وعدتهم ومن صلح من آبائهم وأزواجهم وذرياتهم") + ". يدعون أن تُجمع الأسر. فالمؤمنُ الذي لم يرَ ملَكًا يومًا يُدعى له عند العرش، لما يعمل: التوبةِ واتّباعِ السبيل.",
        plain="The angels who carry the Throne glorify their Lord, believe in Him — and ask forgiveness for the believers. Their prayer opens with His mercy and His knowledge, asks protection from the Fire for those who repent, and in the next verse asks that families be admitted to Paradise together.",
        plainAr="حملةُ العرش يحمدون مولاهم ويسبّحونه، ويؤمنون، ويستغفرون للمؤمنين. ودعاؤهم يبدأ برحمته وعلمه، ويسأل الوقايةَ من النار للتائبين، وفي الآية التالية يسأل أن تدخل الأسرُ الجنّةَ معًا.",
        ref="Surah Ghafir (40:7), read with 40:8 and Al-A'raf (7:156)",
        refAr="سورة غافر، الآية ٧، مع الآية ٨ وسورة الأعراف ١٥٦",
        strength="quran",
        links=[
            L(7, 156, "The angels say Your mercy has encompassed everything; Al-A'raf gives Allah's own words: My mercy encompasses all things — and I will write it for those who fear Me.",
              "الملائكةُ تقول إنّ رحمته عمّت كلَّ شيء، والأعرافُ تذكر كلامَ الله نفسه: " + QF(7, 156, "ورحمتي وسعت كل شيء فسأكتبها للذين يتقون") + "."),
            L(40, 8, "The next verse carries the prayer to families: admit them to the gardens of 'Adn, with whoever was righteous among their fathers, their spouses and their offspring.",
              "والآيةُ التي تليها تمدّ الدعاءَ إلى الأسر: " + QF(40, 8, "ربنا وأدخلهم جنات عدن التي وعدتهم ومن صلح من آبائهم وأزواجهم وذرياتهم") + "."),
            L(33, 43, "Al-Ahzab says the angels' prayer for the believers is part of something larger: He sends blessings upon you, and His angels, to bring you out of the darknesses into the light.",
              "الأحزابُ تقول إنّ دعاء الملائكة للمؤمنين جزءٌ من أمرٍ أكبر: " + QF(33, 43, "هو الذي يصلي عليكم وملائكته ليخرجكم من الظلمات إلى النور") + "."),
        ])),

    # ------------------------------------------------------------ 42:38
    (42, NEW(42, 38,
        why="The verse lists the people of a surah named after consultation: those who answer their Lord, and establish prayer — and their affair is consultation among them — and spend from what We have given them.\n\n"
            "Look where the consultation is placed: between prayer and spending, the two acts that appear together all through the Quran. Shura is set among the acts of worship, not beside them as a technique of administration. A community that decides its matters without consulting has left something out of its religion, not only out of its management.\n\n"
            "Al 'Imran gives the same command to the Prophet ﷺ himself, in the passage about Uhud — after a consultation whose outcome had gone badly: and consult them in the matter; then when you have decided, rely on Allah (3:159). Even after it went wrong, he was told to keep consulting.",
        whyAr="تذكر الآيةُ أهلَ سورةٍ سُمّيت بالشورى: " + Q(42, 38) + ".\n\n"
              "وانظر أين وُضعت الشورى: بين الصلاة والإنفاق، وهما العملان اللذان يتجاوران في القرآن كلّه. فالشورى جُعلت في جملة العبادات، لا إلى جانبها أسلوبًا في الإدارة. والجماعةُ التي تقضي أمورها بلا تشاورٍ قد تركت شيئًا من دينها، لا من تدبيرها فقط.\n\n"
              "وآلُ عمران تذكر الأمرَ نفسه للنبيّ ﷺ في مقطع أُحد، بعد مشورةٍ لم تكن عاقبتُها حسنة: " + QF(3, 159, "وشاورهم في الأمر فإذا عزمت فتوكل على الله") + ". فحتى بعد أن ساءت العاقبة أُمر أن يستمرّ في المشاورة.",
        plain="Consultation is placed between prayer and spending — among the acts of worship, not beside them as a technique. And the Prophet ﷺ was told to keep consulting his Companions even after Uhud, where a consultation had ended badly (3:159).",
        plainAr="الشورى وُضعت بين الصلاة والإنفاق، في جملة العبادات لا إلى جانبها أسلوبًا. وأُمر النبيّ ﷺ أن يستمرّ في مشاورة أصحابه حتى بعد أُحد، وقد انتهت فيها مشورةٌ بما يُكره.",
        ref="Surah Ash-Shura (42:38), read with 42:37 and Al 'Imran (3:159)",
        refAr="سورة الشورى، الآية ٣٨، مع الآية ٣٧ وسورة آل عمران ١٥٩",
        strength="quran",
        links=[
            L(3, 159, "Al 'Imran gives the command to the Prophet ﷺ himself, in the passage about Uhud: consult them in the matter; then when you have decided, rely on Allah.",
              "آلُ عمران تذكر الأمرَ للنبيّ ﷺ نفسه في مقطع أُحد: " + QF(3, 159, "وشاورهم في الأمر فإذا عزمت فتوكل على الله") + "."),
            L(42, 37, "The verse before describes the same people from inside: they avoid the major sins and indecencies, and when they are angry they forgive.",
              "والآيةُ التي قبلها تصف القومَ أنفسهم من الداخل: " + QF(42, 37, "والذين يجتنبون كبائر الإثم والفواحش وإذا ما غضبوا هم يغفرون") + "."),
        ])),

    # ------------------------------------------------------------ 49:11
    (49, NEW(49, 11,
        why="O you who believe, let no people mock another people — perhaps they are better than them; nor women mock other women — perhaps they are better than them. The verse names men and women separately, so that neither can think it is about the other.\n\n"
            "And it gives the reason before the rule is finished: perhaps they are better than them. Mockery is a claim of superiority, and the verse answers the claim instead of only forbidding the act — you do not know who is better in the sight of Allah. Two verses later the surah says how that is decided: the most noble of you in the sight of Allah is the most God-fearing (49:13).\n\n"
            "Then two smaller cruelties: do not find fault with yourselves — anfusakum, your own selves, because the brother you wound is part of you — and do not call one another by offensive nicknames. How wretched is the name of disobedience after faith. And the verse ends by naming whoever does not repent of it: those are the wrongdoers.",
        whyAr="" + QF(49, 11, "ياأيها الذين آمنوا لا يسخر قوم من قوم عسى أن يكونوا خيرا منهم ولا نساء من نساء عسى أن يكن خيرا منهن") + ". والآيةُ تذكر الرجالَ والنساءَ كلًّا على حدة، فلا يظنّ أحدُ الفريقين أنها في الآخر.\n\n"
              "وتذكر العلّةَ قبل أن يتمّ الحكم: فلعلّ المسخورَ منه أفضل. فالسخريةُ دعوى تفوّق، والآيةُ تجيب الدعوى بدل أن تنهى عن الفعل فقط: أنت لا تعلم من الأفضلُ عند الله. وبعد آيتين تقول السورةُ بمَ يُعرف ذلك: " + QF(49, 13, "إن أكرمكم عند الله أتقاكم") + ".\n\n"
              "ثم أذيّتان أصغر: " + QF(49, 11, "ولا تلمزوا أنفسكم ولا تنابزوا بالألقاب") + " — أنفسَكم، لأنّ الأخ الذي تجرحه بعضٌ منك. " + QF(49, 11, "بئس الاسم الفسوق بعد الإيمان") + ". وتُختم الآيةُ بتسمية من لم يتب منه: " + QF(49, 11, "ومن لم يتب فأولئك هم الظالمون") + ".",
        plain="Do not mock — perhaps they are better than you. The verse answers the claim of superiority instead of only forbidding the act, and names men and women separately so neither thinks it is about the other. Two verses later: the most noble of you is the most God-fearing (49:13).",
        plainAr="لا تسخر، فلعلّ من تسخر منه خيرٌ منك. والآيةُ تجيب دعوى التفوّق بدل أن تنهى عن الفعل وحده، وتذكر الرجالَ والنساءَ كلًّا على حدة. وبعد آيتين يُذكر أنّ الكرامةَ عند الله بالتقوى.",
        ref="Surah Al-Hujurat (49:11), read with 49:12-13",
        refAr="سورة الحجرات، الآية ١١، مع الآيتين ١٢–١٣",
        strength="quran",
        links=[
            L(49, 13, "Mockery claims to know who is better; two verses later the surah says how that is decided: the most noble of you in the sight of Allah is the most God-fearing.",
              "السخريةُ تدّعي معرفةَ من الأفضل، وبعد آيتين تقول السورةُ بمَ يُعرف ذلك: " + QF(49, 13, "إن أكرمكم عند الله أتقاكم") + "."),
            L(49, 12, "The next verse goes on to the hidden cruelties: avoid much suspicion, do not spy, and do not backbite one another.",
              "والآيةُ التي تليها تنتقل إلى الأذى الخفيّ: " + QF(49, 12, "اجتنبوا كثيرا من الظن") + " … " + QF(49, 12, "ولا تجسسوا ولا يغتب بعضكم بعضا") + "."),
        ])),
]

RETURNS = {
    (7, 26): [L(2, 197, "Al-A'raf says the garment of taqwa is best; Al-Baqarah says the same of provision, in the middle of the Hajj: and take provision — but the best provision is taqwa.",
                "الأعرافُ تقول إنّ لباس التقوى خير، والبقرةُ تقول ذلك في الزاد، في وسط الحجّ: " + QF(2, 197, "وتزودوا فإن خير الزاد التقوى") + ".")],
    (22, 36): [L(2, 197, "Al-Hajj says the taqwa is what reaches Him of the sacrifice; Al-Baqarah says it is the best provision for the journey itself.",
                 "الحجُّ تقول إنّ التقوى هي ما يبلغه من الهدي، والبقرةُ تقول إنها خيرُ زادٍ للرحلة نفسها: " + QF(2, 197, "فإن خير الزاد التقوى") + ".")],
    (64, 16): [L(3, 102, "At-Taghabun gives the measure — as far as you are able; Al 'Imran gives the aim: fear Allah as He should be feared, and do not die except as Muslims.",
                 "التغابنُ تذكر المقياس — بقدر الاستطاعة — وآلُ عمران تذكر الغاية: " + QF(3, 102, "اتقوا الله حق تقاته ولا تموتن إلا وأنتم مسلمون") + ".")],
    (33, 70): [L(3, 102, "The sermon for needs puts this verse after Al 'Imran's: fear Allah as He should be feared, and do not die except as Muslims.",
                 "خطبةُ الحاجة تضع هذه الآيةَ بعد آية آل عمران: " + QF(3, 102, "اتقوا الله حق تقاته ولا تموتن إلا وأنتم مسلمون") + ".")],
    (4, 1): [L(3, 102, "The sermon for needs follows this verse with Al 'Imran's: fear Allah as He should be feared, and do not die except as Muslims.",
               "خطبةُ الحاجة تُتبع هذه الآيةَ بآية آل عمران: " + QF(3, 102, "اتقوا الله حق تقاته ولا تموتن إلا وأنتم مسلمون") + ".")],
    (33, 35): [L(9, 119, "Al-Ahzab counts truthfulness among the ten qualities; At-Tawbah, after the story of Ka'b ibn Malik, tells every believer to be with the truthful.",
                 "الأحزابُ تعدّ الصدقَ في الصفات العشر، والتوبةُ بعد قصّة كعب بن مالك تأمر كلَّ مؤمنٍ بصحبة الصادقين: " + Q(9, 119) + ".")],
    (87, 16): [L(20, 131, "Al-A'la says people prefer the life of this world; Ta-Ha tells the Prophet ﷺ not to stretch his eyes towards it — and gives the provision of his Lord the same two words: better and more lasting.",
                 "الأعلى تقول إنّ الناس يؤثرون الدنيا، وطه تنهى النبيَّ ﷺ أن يمدّ عينيه إليها، وتصف رزقَ ربّه بالكلمتين نفسيهما: " + QF(20, 131, "ورزق ربك خير وأبقى") + ".")],
    (78, 9): [L(39, 42, "An-Naba calls sleep a cutting-off; Az-Zumar says what is cut off: Allah takes the souls at death — and those that have not died, in their sleep.",
                "النبأُ تسمّي النومَ سُباتًا، والزمرُ تقول ما الذي يُقطع: " + QF(39, 42, "الله يتوفى الأنفس حين موتها والتي لم تمت في منامها") + ".")],
    (7, 156): [L(40, 7, "Al-A'raf gives Allah's words, My mercy encompasses all things; Ghafir gives the angels at the Throne praying with them: our Lord, You have encompassed everything in mercy and knowledge.",
                 "الأعرافُ تذكر قولَ الله في سعة رحمته، وغافرٌ تذكر حملةَ العرش يدعون بها: " + QF(40, 7, "ربنا وسعت كل شيء رحمة وعلما") + ".")],
    (3, 159): [L(42, 38, "Al 'Imran commands the Prophet ﷺ to consult; Ash-Shura makes consultation part of the description of the believers, between prayer and spending.",
                 "آلُ عمران تأمر النبيَّ ﷺ بالمشاورة، والشورى تجعلها من صفات المؤمنين، بين الصلاة والإنفاق: " + QF(42, 38, "وأقاموا الصلاة وأمرهم شورى بينهم ومما رزقناهم ينفقون") + ".")],
    (49, 13): [L(49, 11, "This verse says the most noble is the most God-fearing; two verses earlier the surah drew the conclusion: do not mock — perhaps they are better than you.",
                 "هذه الآيةُ تقول إنّ أكرمكم أتقاكم، وقبلها بآيتين استخرجت السورةُ النتيجة: " + QF(49, 11, "لا يسخر قوم من قوم عسى أن يكونوا خيرا منهم") + ".")],
    (49, 12): [L(49, 11, "This verse forbids the hidden cruelties; the one before forbade the open ones: mockery, fault-finding and insulting nicknames.",
                 "هذه الآيةُ تنهى عن الأذى الخفيّ، والتي قبلها نهت عن الظاهر: " + QF(49, 11, "ولا تلمزوا أنفسكم ولا تنابزوا بالألقاب") + ".")],
}

if __name__ == "__main__":
    add_new(ENTRIES, RETURNS)
