(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7767b043"],{"253d":function(e,p,r){},aed3:function(e,p,r){"use strict";r.r(p);var o=function(){var e=this,p=e.$createElement,r=e._self._c||p;return r("div",{staticClass:"ma-5"},[r("div",{domProps:{innerHTML:e._s(e.html)}})])},t=[],n={props:{html:{type:String,default:'\n    <p><a href="https://habr.com/ru/users/zloddey/" rel="noopener noreferrer" target="_blank" style="color: rgb(84, 142, 170);"><img src="https://habrastorage.org/getpro/habr/avatars/b6d/b8c/0bc/b6db8c0bccf142282786565fbb2e003a.jpg" height="24" width="24">zloddey</a></p><p><span style="color: rgb(95, 95, 95);">26 октября 2010 в 07:55</span></p><h1><span style="color: rgb(52, 52, 52);">Удачная модель ветвления для Git</span></h1><p><a href="http://nvie.com/posts/a-successful-git-branching-model/" rel="noopener noreferrer" target="_blank" style="color: rgb(104, 100, 163);">Автор оригинала: Vincent Driessen</a></p><ul><li><a href="https://habr.com/ru/hub/git/" rel="noopener noreferrer" target="_blank" style="color: rgb(94, 105, 115);">Git</a></li><li><span style="color: rgb(102, 103, 163);">Перевод</span></li></ul><p><em>Перевод статьи Vincent Driessen:&nbsp;</em><a href="http://nvie.com/posts/a-successful-git-branching-model/" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 34, 152);"><em>A successful Git branching model</em></a></p><p><br></p><p>В этой статье я представляю модель разработки, которую использую для всех моих проектов (как рабочих, так и частных) уже в течение года, и которая показала себя с хорошей стороны. Я давно собирался написать о ней, но до сих пор не находил свободного времени. Не буду рассказывать обо всех деталях проекта, коснусь лишь стратегии ветвления и управления релизами.</p><p><br></p><p><img src="https://habrastorage.org/storage/4bf7e68c/49e29c35/3a01bd6b/782a1be3.png"></p><p><br></p><p>В качестве инструмента управления версиями всего исходного кода она использует&nbsp;<a href="http://git-scm.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 34, 152);">Git</a>.</p><p><br></p><p><br></p><h4>Почему Git?</h4><p><br></p><p>За полноценным обсуждением всех достоинств и недостатков Git в сравнении с централизованными системами контроля версий&nbsp;<a href="http://whygitisbetterthanx.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 34, 152);">обращайтесь</a>&nbsp;<a href="http://www.looble.com/git-vs-svn-which-is-better/" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 34, 152);">к всемирной</a>&nbsp;<a href="http://git.or.cz/gitwiki/GitSvnComparsion" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 34, 152);">сети</a>. Там Вы найдёте достаточное количество споров на эту тему. Лично же я, как разработчик, на данный момент предпочитаю Git всем остальным инструментам. Git реально смог изменить отношение разработчиков к процессам слияния и ветвления. В классическом мире CVS/Subversion, из которого я пришёл, ветвление и слияние обычно считаются опасными («опасайтесь конфликтов слияния, они больно кусаются!»), и потому проводятся как можно реже.</p><p><br></p><p>Но с Git эти действия становятся исключительно простыми и дешёвыми, и потому на деле они становятся центральными элементами обычного&nbsp;<em>ежедневного</em>&nbsp;рабочего процесса. Просто сравните: в&nbsp;<a href="http://svnbook.red-bean.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 34, 152);">книгах</a>&nbsp;по CVS/Subversion ветвление и слияние обычно рассматриваются в последних главах (для продвинутых пользователей), в то время как в&nbsp;<a href="http://book.git-scm.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 34, 152);">любой</a>&nbsp;<a href="http://pragprog.com/titles/tsgit/pragmatic-version-control-using-git" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 34, 152);">книге</a>&nbsp;<a href="http://github.com/progit/progit" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 34, 152);">про Git</a>&nbsp;они бывают упомянуты уже к третьей главе (основы).</p><p><br></p><p>Благодаря своей простоте и предсказуемости, ветвление и слияние больше не являются действиями, которых стоит опасаться. Теперь инструменты управления версиями способны помочь в ветвлении и слиянии больше, чем какие-либо другие.</p><p><br></p><p>Но хватит говорить об инструментах, давайте перейдём к модели разработки. Модель, которую я хочу представить, — это, по сути, просто набор процедур, которые исполняет каждый член команды, чтобы все вместе могли достичь высокой управляемости процесса разработки.</p><p><br></p><h4>Децентрализованный, но централизованный</h4><p><br></p><p>Предлагаемая модель ветвления опирается на конфигурацию проекта, содержащую один центральный «истинный» репозиторий. Замечу, что этот репозиторий только&nbsp;<em>считается</em>&nbsp;центральным (так как Git является DVCS, у него нет такой вещи, как главный репозиторий, на техническом уровне). Мы будем называть этот репозиторий термином origin, т.к. это имя и так знакомо всем пользователям Git.</p><p><br></p><p><img src="https://habrastorage.org/storage/0f1b4537/51094c28/85985dd2/1d1e8f1a.png"></p><p><br></p><p>Каждый разработчик забирает и публикует изменения (pull &amp; push) в origin. Но, помимо централизованных отношений push-pull, каждый разработчик также может забирать изменения от остальных коллег внутри своей микро-команды. Например, этот способ может быть удобен в ситуации, когда двое или более разработчиков работают вместе над большой новой фичей, но не могут издать незавершённую работу в origin раньше времени. На картинке выше изображены подгруппы Алисы и Боба, Алисы и Дэвида, Клэр и Дэвида.</p><p><br></p><p>Технически это реализуется несложно: Алиса создаёт удалённую ветку Git под названием bob, которая указывает на репозиторий Боба, а Боб делает то же самое с её репозиторием.</p><p><br></p><h4>Главные ветви</h4><p><br></p><p><img src="https://habrastorage.org/storage/7dad2753/d8861db2/3ff3a29f/00eb029a.png"></p><p>Ядро модели разработки не отличается от большинства существующих моделей. Центральный репозиторий содержит две главные ветки, существующие всё время.</p><ul><li>master</li><li>develop</li></ul><p><br></p><p>Ветвь master создаётся при инициализации репозитория, что должно быть знакомо каждому пользователю Git. Параллельно ей также мы создаём ветку для разработки под названием develop.</p><p><br></p><p>Мы считаем ветку origin/master главной. То есть, исходный код в ней должен находиться в состоянии&nbsp;<em>production-ready</em>&nbsp;в любой произвольный момент времени.</p><p><br></p><p>Ветвь origin/develop мы считаем главной ветвью для разработки. Хранящийся в ней код в любой момент времени должен содержать самые последние изданные изменения, необходимые для следующего релиза. Эту ветку также можно назвать «интеграционной». Она служит источником для сборки автоматических ночных билдов.</p><p><br></p><p>Когда исходный код в ветви разработки (develop) достигает стабильного состояния и готов к релизу, все изменения должны быть определённым способом влиты в главную ветвь (master) и помечены тегом с номером релиза. Ниже мы рассмотрим этот процесс в деталях.</p><p><br></p><p>Следовательно, каждый раз, когда изменения вливаются в главную ветвь (master), мы&nbsp;<em>по определению</em>&nbsp;получаем новый релиз. Мы стараемся относиться к этому правилу очень строго, так что, в принципе, мы могли бы использовать хуки Git, чтобы автоматически собирать наши продукты и выкладывать их на рабочие сервера при каждом коммите в главную ветвь (master).</p><p><br></p><h4>Вспомогательные ветви</h4><p><br></p><p>Помимо главных ветвей master и develop, наша модель разработки содержит некоторое количество типов вспомогательных ветвей, которые используются для распараллеливания разработки между членами команды, для упрощения внедрения нового функционала (features), для подготовки релизов и для быстрого исправления проблем в производственной версии приложения. В отличие от главный ветвей, эти ветви всегда имеют ограниченный срок жизни. Каждая из них в конечном итоге рано или поздно удаляется.</p><p><br></p><p>Мы используем следующие типы ветвей:</p><ul><li>Ветви функциональностей (Feature branches)</li><li>Ветви релизов (Release branches)</li><li>Ветви исправлений (Hotfix branches)</li></ul><p><br></p><p>У каждого типа ветвей есть своё специфическое назначение и строгий набор правил, от каких ветвей они могут порождаться, и в какие должны вливаться. Сейчас мы рассмотрим их по очереди.</p><p><br></p><p>Конечно же, с технической точки зрения, у этих ветвей нет ничего «специфического». Разбиение ветвей на категории существует только с точки зрения того, как они используются. А во всём остальном это старые добрые ветви Git.</p><p><br></p><h5>Ветви функциональностей (feature branches)</h5><p><br></p><p><img src="https://habrastorage.org/storage/3231978c/c6c3c3e9/5acee56c/968a9100.png"></p><p>Могут порождаться от: develop</p><p>Должны вливаться в: develop</p><p>Соглашение о наименовании: всё, за исключением master, develop, release-* или hotfix-*</p><p><br></p><p>Ветви функциональностей (feature branches), также называемые иногда тематическими ветвями (topic branches), используются для разработки новых функций, которые должны появиться в текущем или будущем релизах. При начале работы над функциональностью (фичей) может быть ещё неизвестно, в какой именно релиз она будет добавлена. Смысл существования ветви функциональности (feature branch) состоит в том, что она живёт так долго, сколько продолжается разработка данной функциональности (фичи). Когда работа в ветви завершена, последняя вливается обратно в главную ветвь разработки (что означает, что функциональность будет добавлена в грядущий релиз) или же удаляется (в случае неудачного эксперимента).</p><p><br></p><p>Ветви функциональностей (feature branches) обычно существуют в репозиториях разработчиков, но не в главном репозитории (origin).</p><p><br></p><h6>Создание ветви функциональности (feature branch)</h6><p><br></p><p>При начале работы над новой функциональностью делается ответвление от ветви разработки (develop).</p><p><br></p><p><code>$ git checkout -b myfeature develop</code></p><p><code>Switched to a new branch "myfeature"</code></p><p><br></p><h6>Добавление завершённой функциональности в develop</h6><p><br></p><p>Завершённая функциональность (фича) вливается обратно в ветвь разработки (develop) и попадает в следующий релиз.</p><p><br></p><p><code>$ git checkout develop</code></p><p><code>Switched to branch \'develop\'</code></p><p><code>$ git merge --no-ff myfeature</code></p><p><code>Updating ea1b82a..05e9557</code></p><p><code>(Отчёт об изменениях)</code></p><p><code>$ git branch -d myfeature</code></p><p><code>Deleted branch myfeature (was 05e9557).</code></p><p><code>$ git push origin develop</code></p><p><br></p><p>Флаг --no-ff вынуждает Git всегда создавать новый объект коммита при слиянии, даже если слияние может быть осуществлено алгоритмом fast-forward. Это позволяет не терять информацию о том, что ветка существовала, и группирует вместе все внесённые изменения. Сравните:</p><p><br></p><p><img src="https://habrastorage.org/storage/a90013bb/4166845b/d7905ec1/572137b0.png"></p><p><br></p><p>Во втором случае невозможно увидеть в истории изменений, какие именно объекты коммитов совместно образуют функциональность, — для этого придётся вручную читать все сообщения в коммитах. Отменить функциональность целиком (т.е., группу коммитов) в таком случае невозможно без головной боли, а с флагом --no-ff это делается элементарно.</p><p><br></p><p>Конечно, такой подход создаёт некоторое дополнительное количество (пустых) объектов коммитов, но получаемая выгода более чем оправдывает подобную цену.</p><p><br></p><p>К сожалению, я ещё не нашёл, как можно настроить Git так, чтобы --no-ff было поведением по-умолчанию при слияниях. Но этот способ должен быть реализован.</p><p><br></p><h5>Ветви релизов (release branches)</h5><p><br></p><p>Могут порождаться от: develop</p><p>Должны вливаться в: develop и master</p><p>Соглашение о наименовании: release-*</p><p><br></p><p>Ветви релизов (release branches) используются для подготовки к выпуску новых версий продукта. Они позволяют расставить финальные точки над i перед выпуском новой версии. Кроме того, в них можно добавлять минорные исправления, а также подготавливать метаданные для очередного релиза (номер версии, дата сборки и т.д.). Когда вся эта работа выносится в ветвь релизов, главная ветвь разработки (develop) очищается для добавления последующих фич (которые войдут в следующий большой релиз).</p><p><br></p><p>Новую ветку релиза (release branch) надо порождать в тот момент, когда состояние ветви разработки полностью или почти полностью соответствует требованиям, соответствующим новому релизу. По крайней мере, вся необходимая функциональность, предназначенная к этому релизу, уже влита в ветвь разработки (develop). Функциональность, предназначенная к следующим релизам, может быть и не влита. Даже лучше, если ветки для этих функциональностей подождут, пока текущая ветвь релиза не отпочкуется от ветви разработки (develop).</p><p><br></p><p>Очередной релиз получает свой номер версии только в тот момент, когда для него создаётся новая ветвь, но ни в коем случае не раньше. Вплоть до этого момента ветвь разработки содержит изменения для «нового релиза», но пока ветка релиза не отделилась, точно неизвестно, будет ли этот релиз иметь версию 0.3, или 1.0, или какую-то другую. Решение принимается при создании новой ветви релиза и зависит от принятых на проекте правил нумерации версий проекта.</p><p><br></p><h6>Создание ветви релиза (release branch)</h6><p><br></p><p>Ветвь релиза создаётся из ветви разработки (develop). Пускай, например, текущий изданный релиз имеет версию 1.1.5, а на подходе новый большой релиз, полный изменений. Ветвь разработки (develop) готова к «следующему релизу», и мы решаем, что этот релиз будет иметь версию 1.2 (а не 1.1.6 или 2.0). В таком случае мы создаём новую ветвь и даём ей имя, соответствующее новой версии проекта:</p><p><br></p><p><code>$ git checkout -b release-1.2 develop</code></p><p><code>Switched to a new branch "release-1.2"</code></p><p><code>$ ./bump-version.sh 1.2</code></p><p><code>Files modified successfully, version bumped to 1.2.</code></p><p><code>$ git commit -a -m "Bumped version number to 1.2"</code></p><p><code>[release-1.2 74d9424] Bumped version number to 1.2</code></p><p><code>1 files changed, 1 insertions(+), 1 deletions(-)</code></p><p><br></p><p>Мы создали новую ветку, переключились в неё, а затем выставили номер версии (bump version number). В нашем примере bump-version.sh — это вымышленный скрипт, который изменяет некоторые файлы в рабочей копии, записывая в них новую версию. (Разумеется, эти изменения можно внести и вручную; я просто обращаю Ваше внимание на то, что&nbsp;<em>некоторые</em>&nbsp;файлы изменяются.) Затем мы делаем коммит с указанием новой версии проекта.</p><p><br></p><p>Эта новая ветвь может существовать ещё некоторое время, до тех пор, пока новый релиз окончательно не будет готов к выпуску. В течение этого времени к этой ветви (а не к develop) могут быть добавлены исправления найденных багов. Но добавление крупных новых изменений в эту ветвь строго запрещено. Они всегда должны вливаться в ветвь разработки (develop) и ждать следующего большого релиза.</p><p><br></p><h6>Закрытие ветви релиза</h6><p><br></p><p>Когда мы решаем, что ветвь релиза (release branch) окончательно готова для выпуска, нужно проделать несколько действий. В первую очередь ветвь релиза вливается в главную ветвь (напоминаю, каждый коммит в master — это&nbsp;<em>по определению</em>&nbsp;новый релиз). Далее, этот коммит в master должен быть помечен тегом, чтобы в дальнейшем можно было легко обратиться к любой существовавшей версии продукта. И наконец, изменения, сделанные в ветви релиза (release branch), должны быть добавлены обратно в разработку (ветвь develop), чтобы будущие релизы также содержали внесённые исправления багов.</p><p><br></p><p>Первые два шага в Git:</p><p><br></p><p><code>$ git checkout master</code></p><p><code>Switched to branch \'master\'</code></p><p><code>$ git merge --no-ff release-1.2</code></p><p><code>Merge made by recursive.</code></p><p><code>(Отчёт об изменениях)</code></p><p><code>$ git tag -a 1.2</code></p><p><br></p><p>Теперь релиз издан и помечен тегом.</p><p><br></p><p><strong>Замечание</strong>: при желании, Вы также можете использовать флаги -s или -u &lt;ключ&gt;, чтобы криптографически подписать тег.</p><p><br></p><p>Чтобы сохранить изменения и в последующих релизах, мы должны влить эти изменения обратно в разработку. Делаем это так:</p><p><br></p><p><code>$ git checkout develop</code></p><p><code>Switched to branch \'develop\'</code></p><p><code>$ git merge --no-ff release-1.2</code></p><p><code>Merge made by recursive.</code></p><p><code>(Отчёт об изменениях)</code></p><p><br></p><p>Этот шаг, в принципе, может привести к конфликту слияния (нередко бывает, что к причиной конфликта является изменение номера версии проекта). Если это произошло, исправьте их и издайте коммит.</p><p><br></p><p>Теперь мы окончательно разделались с веткой релиза. Можно её удалять, потому что она нам больше не понадобится:</p><p><br></p><p><code>$ git branch -d release-1.2</code></p><p><code>Deleted branch release-1.2 (was ff452fe).</code></p><p><br></p><h5>Ветви исправлений (hotfix branches)</h5><p><br></p><p><img src="https://habrastorage.org/storage/a303d38c/6c9c561c/8bcc22f7/3f8cbad4.png"></p><p>Могут порождаться от: master</p><p>Должны вливаться в: develop и master</p><p>Соглашение о наименовании: hotfix-*</p><p><br></p><p>Ветви для исправлений (hotfix branches) весьма похожи на ветви релизов (release branches), так как они тоже используются для подготовки новых выпусков продукта, разве лишь незапланированных. Они порождаются необходимостью немедленно исправить нежелательное поведение производственной версии продукта. Когда в производственной версии находится баг, требующий немедленного исправления, из соответствующего данной версии тега главной ветви (master) порождается новая ветвь для работы над исправлением.</p><p><br></p><p>Смысл её существования состоит в том, что работа команды над ветвью разработки (develop) может спокойно продолжаться, в то время как кто-то один готовит быстрое исправление производственной версии.</p><p><br></p><h6>Создание ветви исправлений (hotfix branch)</h6><p><br></p><p><br></p><p>Ветви исправлений (hotfix branches) создаются из главной (master) ветви. Пускай, например, текущий производственный релиз имеет версию 1.2, и в нём (внезапно!) обнаруживается серьёзный баг. А изменения в ветви разработки (develop) ещё недостаточно стабильны, чтобы их издавать в новый релиз. Но мы можем создать новую ветвь исправлений и начать работать над решением проблемы:</p><p><br></p><pre class="ql-syntax" spellcheck="false">$ git checkout -b hotfix-1.2.1 master\n      Switched to a new branch "hotfix-1.2.1"\n$ ./bump-version.sh 1.2.1\nFiles modified successfully, version bumped to 1.2.1.\n$ git commit -a -m "Bumped version number to 1.2.1"\n[hotfix-1.2.1 41e61bb] Bumped version number to 1.2.1\n1 files changed, 1 insertions(+), 1 deletions(-)\n</pre><p><br></p><p>Не забывайте обновлять номер версии после создания ветви!</p><p><br></p><p>Теперь можно исправлять баг, а изменения издавать хоть одним коммитом, хоть несколькими.</p><p><br></p><pre class="ql-syntax" spellcheck="false">$ git commit -m "Fixed severe production problem"\n[hotfix-1.2.1 abbe5d6] Fixed severe production problem\n5 files changed, 32 insertions(+), 17 deletions(-)\n</pre><p><br></p><h6>Закрытие ветви исправлений</h6><p><br></p><p>Когда баг исправлен, изменения надо влить обратно в главную ветвь (master), а также в ветвь разработки (develop), чтобы гарантировать, что это исправление окажется и в следующем релизе. Это очень похоже на то, как закрывается ветвь релиза (release branch).</p><p><br></p><p>Прежде всего надо обновить главную ветвь (master) и пометить новую версию тегом.</p><p><br></p><pre class="ql-syntax" spellcheck="false">$ git checkout master\nSwitched to branch \'master\'\n$ git merge --no-ff hotfix-1.2.1\nMerge made by recursive.\n(Отчёт об изменениях)\n$ git tag -a 1.2.1\n</pre><p><br></p><p><strong>Замечание</strong>: при желании, Вы также можете использовать флаги -s или -u &lt;ключ&gt;, чтобы криптографически подписать тэг.</p><p><br></p><p>Следующим шагом переносим исправление в ветвь разработки (develop).</p><p><br></p><pre class="ql-syntax" spellcheck="false">$ git checkout develop\nSwitched to branch \'develop\'\n$ git merge --no-ff hotfix-1.2.1\nMerge made by recursive.\n(Отчёт об изменениях)\n</pre><p><br></p><p>У этого правила есть одно исключение:&nbsp;<strong>если в данный момент существует ветвь релиза (release branch), то ветвь исправления (hotfix branch) должна вливаться в неё, а не в ветвь разработки (develop)</strong>. В этом случае исправления войдут в ветвь разработки вместе со всей ветвью релиза, когда та будет закрыта. (Хотя, если работа в develop требует немедленного исправления бага и не может ждать, пока будет завершено издание текущего релиза, Вы всё же можете влить исправления (bugfix) в ветвь разработки (develop), и это будет вполне безопасно).</p><p><br></p><p>И наконец, удаляем временную ветвь:</p><p><br></p><pre class="ql-syntax" spellcheck="false">$ git branch -d hotfix-1.2.1\nDeleted branch hotfix-1.2.1 (was abbe5d6).\n</pre><p><br></p><h4>Заключение</h4><p><br></p><p>Хотя в этой модели ветвления совершенно нет ничего принципиально нового, «большая картинка», с которой начинается эта статья, зарекомендовала себя в наших проектах с самой лучшей стороны. Она формирует элегантную мысленную модель, которую легко полностью охватить одним взглядом, и которая позволяет сформировать у команды совместное понимание процессов ветвления и слияния, действующих на проекте.</p><p><br></p><p>Высококачественная PDF-версия этой картинки свободна для скачивания&nbsp;<a href="http://github.com/downloads/nvie/gitflow/Git-branching-model.pdf" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 34, 152);">здесь</a>. Распечатайте её и повесьте у себя на стену, чтобы к ней можно было обратиться в любой момент.</p><p><br></p><p><strong><em>Прим. переводчика:</em></strong><em>&nbsp;статья не новая, ссылка на оригинал&nbsp;</em><a href="http://habrahabr.ru/blogs/development_tools/104993/" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 34, 152);"><em>уже появлялась на хабре</em></a><em>. Этот перевод — для тех, кому английский ещё даётся не так легко (а также для моих коллег, среди которых я занимаюсь пропагандой, хехе). Для автоматизации описанных в статье процедур автор создал проект gitflow,&nbsp;</em><a href="http://github.com/nvie/gitflow" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 34, 152);"><em>который можно найти на github</em></a><em>.</em></p>\n    '}},data:function(){return{file:"index1.html",inputfile:""}},computed:{compiledHtml:function(){return this.inputfile}},created:function(){},methods:{}},a=n,s=(r("cedc"),r("2877")),b=Object(s["a"])(a,o,t,!1,null,null,null);p["default"]=b.exports},cedc:function(e,p,r){"use strict";var o=r("253d"),t=r.n(o);t.a}}]);
//# sourceMappingURL=chunk-7767b043.ac95cd25.js.map