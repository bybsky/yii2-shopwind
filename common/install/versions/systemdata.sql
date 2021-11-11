-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 11 月 21 日 22:50
-- 服务器版本: 5.5.36
-- PHP 版本: 5.4.26

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `shopwind`
--

-- --------------------------------------------------------

--
-- 转存表中的数据 `swd_acategory`
--
delete from `swd_acategory`;
INSERT INTO `swd_acategory` (`cate_id`, `cate_name`, `parent_id`, `store_id`, `sort_order`, `if_show`) VALUES
(1, '系统分类', 0, 0, 255, 1);

--
-- 转存表中的数据 `swd_article`
--
delete from `swd_article`;
INSERT INTO `swd_article` (`article_id`, `title`, `cate_id`, `store_id`, `link`, `description`, `sort_order`, `if_show`, `add_time`) VALUES
(1, '用户服务协议', 1, 0, '', '<p>\r\n	<span>特别提醒用户认真阅读本《用户服务协议》(下称《协议》) 中各条款。除非您接受本《协议》条款，否则您无权使用本网站提供的相关服务。您的使用行为将视为对本《协议》的接受，并同意接受本《协议》各项条款的约束。 </span><br />\r\n<br />\r\n<strong><span>一、定义</span></strong> \r\n</p>\r\n<p>\r\n	<strong><span><br />\r\n</span></strong> \r\n</p>\r\n<ol>\r\n	<li>\r\n		<span>"用户"指符合本协议所规定的条件，同意遵守本网站各种规则、条款（包括但不限于本协议），并使用本网站的个人或机构。</span> \r\n	</li>\r\n	<li>\r\n		<span>"卖家"是指在本网站上出售物品的用户。"买家"是指在本网站购买物品的用户。</span> \r\n	</li>\r\n	<li>\r\n		<span>"成交"指买家根据卖家所刊登的交易要求，在特定时间内提出最优的交易条件，因而取得依其提出的条件购买该交易物品的权利。</span><br />\r\n	</li>\r\n</ol>\r\n<p>\r\n	<strong><span><br />\r\n</span></strong> \r\n</p>\r\n<p>\r\n	<strong><span>二、用户资格</span></strong> \r\n</p>\r\n<p>\r\n	<strong><span></span></strong> <br />\r\n<span> 只有符合下列条件之一的人员或实体才能申请成为本网站用户，可以使用本网站的服务。</span> \r\n</p>\r\n<ol>\r\n	<li>\r\n		<span>年满十八岁，并具有民事权利能力和民事行为能力的自然人；</span> \r\n	</li>\r\n	<li>\r\n		<span>未满十八岁，但监护人（包括但不仅限于父母）予以书面同意的自然人；</span> \r\n	</li>\r\n	<li>\r\n		<span>根据中国法律或设立地法律、法规和/或规章成立并合法存在的公司、企事业单位、社团组织和其他组织。</span><br />\r\n	</li>\r\n</ol>\r\n<p>\r\n	<span> 无民事行为能力人、限制民事行为能力人以及无经营或特定经营资格的组织不当注册为本网站用户或超过其民事权利或行为能力范围从事交易的，其与本网站之间的协议自始无效，本网站一经发现，有权立即注销该用户，并追究其使用本网站"服务"的一切法律责任。</span> <br />\r\n<strong><span><br />\r\n</span></strong> \r\n</p>\r\n<p>\r\n	<strong><span>三.用户的权利和义务</span></strong> \r\n</p>\r\n<p>\r\n	<strong><span><br />\r\n</span></strong> \r\n</p>\r\n<ol>\r\n	<li>\r\n		<span>用户有权根据本协议的规定及本网站发布的相关规则，利用本网站网上交易平台登录物品、发布交易信息、查询物品信息、购买物品、与其他用户订立物品买卖合同、在本网站社区发帖、参加本网站的有关活动及有权享受本网站提供的其他的有关资讯及信息服务。</span> \r\n	</li>\r\n	<li>\r\n		<span>用户有权根据需要更改密码和交易密码。用户应对以该用户名进行的所有活动和事件负全部责任。</span> \r\n	</li>\r\n	<li>\r\n		<span>用户有义务确保向本网站提供的任何资料、注册信息真实准确，包括但不限于真实姓名、身份证号、联系电话、地址、邮政编码等。保证本网站及其他用户可以通过上述联系方式与自己进行联系。同时，用户也有义务在相关资料实际变更时及时更新有关注册资料。</span> \r\n	</li>\r\n	<li>\r\n		<span>用户不得以任何形式擅自转让或授权他人使用自己在本网站的用户帐号。</span> \r\n	</li>\r\n	<li>\r\n		<span>用户有义务确保在本网站网上交易平台上登录物品、发布的交易信息真实、准确，无误导性。</span> \r\n	</li>\r\n	<li>\r\n		<span>用户不得在本网站网上交易平台买卖国家禁止销售的或限制销售的物品、不得买卖侵犯他人知识产权或其他合法权益的物品，也不得买卖违背社会公共利益或公共道德的物品。</span> \r\n	</li>\r\n	<li>\r\n		<span>用户不得在本网站发布各类违法或违规信息。包括但不限于物品信息、交易信息、社区帖子、物品留言，店铺留言，评价内容等。</span> \r\n	</li>\r\n	<li>\r\n		<span>用户在本网站交易中应当遵守诚实信用原则，不得以干预或操纵物品价格等不正当竞争方式扰乱网上交易秩序，不得从事与网上交易无关的不当行为，不得在交易平台上发布任何违法信息。</span> \r\n	</li>\r\n	<li>\r\n		<span>用户不应采取不正当手段（包括但不限于虚假交易、互换好评等方式）提高自身或他人信用度，或采用不正当手段恶意评价其他用户，降低其他用户信用度。</span> \r\n	</li>\r\n	<li>\r\n		<span>用户承诺自己在使用本网站网上交易平台实施的所有行为遵守国家法律、法规和本网站的相关规定以及各种社会公共利益或公共道德。对于任何法律后果的发生，用户将以自己的名义独立承担所有相应的法律责任。</span> \r\n	</li>\r\n	<li>\r\n		<span>用户在本网站网上交易过程中如与其他用户因交易产生纠纷，可以请求本网站从中予以协调。用户如发现其他用户有违法或违反本协议的行为，可以向本网站举报。如用户因网上交易与其他用户产生诉讼的，用户有权通过司法部门要求本网站提供相关资料。</span> \r\n	</li>\r\n	<li>\r\n		<span>用户应自行承担因交易产生的相关费用，并依法纳税。</span> \r\n	</li>\r\n	<li>\r\n		<span>未经本网站书面允许，用户不得将本网站资料以及在交易平台上所展示的任何信息以复制、修改、翻译等形式制作衍生作品、分发或公开展示。</span> \r\n	</li>\r\n	<li>\r\n		<span>用户同意接收来自本网站的信息，包括但不限于活动信息、交易信息、促销信息等。</span><br />\r\n	</li>\r\n</ol>\r\n<p>\r\n	<br />\r\n</p>\r\n<p>\r\n	<strong><span>四、 本网站的权利和义务</span></strong>\r\n</p>\r\n<p>\r\n	<strong><span><br />\r\n</span></strong> \r\n</p>\r\n<ol>\r\n	<li>\r\n		<span>本网站不是传统意义上的"拍卖商"，仅为用户提供一个信息交流、进行物品买卖的平台，充当买卖双方之间的交流媒介，而非买主或卖主的代理商、合伙  人、雇员或雇主等经营关系人。公布在本网站上的交易物品是用户自行上传进行交易的物品，并非本网站所有。对于用户刊登物品、提供的信息或参与竞标的过程，  本网站均不加以监视或控制，亦不介入物品的交易过程，包括运送、付款、退款、瑕疵担保及其它交易事项，且不承担因交易物品存在品质、权利上的瑕疵以及交易  方履行交易协议的能力而产生的任何责任，对于出现在拍卖上的物品品质、安全性或合法性，本网站均不予保证。</span> \r\n	</li>\r\n	<li>\r\n		<span>本网站有义务在现有技术水平的基础上努力确保整个网上交易平台的正常运行，尽力避免服务中断或将中断时间限制在最短时间内，保证用户网上交易活动的顺利进行。</span> \r\n	</li>\r\n	<li>\r\n		<span>本网站有义务对用户在注册使用本网站网上交易平台中所遇到的问题及反映的情况及时作出回复。</span> \r\n	</li>\r\n	<li>\r\n		<span>本网站有权对用户的注册资料进行查阅，对存在任何问题或怀疑的注册资料，本网站有权发出通知询问用户并要求用户做出解释、改正，或直接做出处罚、删除等处理。</span> \r\n	</li>\r\n	<li>\r\n		<span>用  户因在本网站网上交易与其他用户产生纠纷的，用户通过司法部门或行政部门依照法定程序要求本网站提供相关资料，本网站将积极配合并提供有关资料；用户将纠  纷告知本网站，或本网站知悉纠纷情况的，经审核后，本网站有权通过电子邮件及电话联系向纠纷双方了解纠纷情况，并将所了解的情况通过电子邮件互相通知对  方。</span> \r\n	</li>\r\n	<li>\r\n		<span>因网上交易平台的特殊性，本网站没有义务对所有用户的注册资料、所有的交易行为以及与交易有关的其他事项进行事先审查，但如发生以下情形，本网站有权限制用户的活动、向用户核实有关资料、发出警告通知、暂时中止、无限期地中止及拒绝向该用户提供服务：</span> \r\n		<ul>\r\n			<li>\r\n				<span>用户违反本协议或因被提及而纳入本协议的文件；</span> \r\n			</li>\r\n			<li>\r\n				<span>存在用户或其他第三方通知本网站，认为某个用户或具体交易事项存在违法或不当行为，并提供相关证据，而本网站无法联系到该用户核证或验证该用户向本网站提供的任何资料；</span> \r\n			</li>\r\n			<li>\r\n				<span>存在用户或其他第三方通知本网站，认为某个用户或具体交易事项存在违法或不当行为，并提供相关证据。本网站以普通非专业交易者的知识水平标准对相关内容进行判别，可以明显认为这些内容或行为可能对本网站用户或本网站造成财务损失或法律责任。</span> \r\n			</li>\r\n		</ul>\r\n	</li>\r\n	<li>\r\n		<span>在反网络欺诈行动中，本着保护广大用户利益的原则，当用户举报自己交易可能存在欺诈而产生交易争议时，本网站有权通过表面判断暂时冻结相关用户账号，并有权核对当事人身份资料及要求提供交易相关证明材料。</span> \r\n	</li>\r\n	<li>\r\n		<span>根据国家法律法规、本协议的内容和本网站所掌握的事实依据，可以认定用户存在违法或违反本协议行为以及在本网站交易平台上的其他不当行为，本网站有权在本网站交易平台及所在网站上以网络发布形式公布用户的违法行为，并有权随时作出删除相关信息，而无须征得用户的同意。</span> \r\n	</li>\r\n	<li>\r\n		<span>本  网站有权在不通知用户的前提下删除或采取其他限制性措施处理下列信息：包括但不限于以规避费用为目的；以炒作信用为目的；存在欺诈等恶意或虚假内容；与网  上交易无关或不是以交易为目的；存在恶意竞价或其他试图扰乱正常交易秩序因素；该信息违反公共利益或可能严重损害本网站和其他用户合法利益的。</span> \r\n	</li>\r\n	<li>\r\n		<span>用  户授予本网站独家的、全球通用的、永久的、免费的信息许可使用权利，本网站有权对该权利进行再授权，依此授权本网站有权(全部或部份地)  使用、复制、修订、改写、发布、翻译、分发、执行和展示用户公示于网站的各类信息或制作其派生作品，以现在已知或日后开发的任何形式、媒体或技术，将上述  信息纳入其他作品内。</span> \r\n	</li>\r\n</ol>\r\n<p>\r\n	<br />\r\n<strong><span>五、服务的中断和终止</span></strong>\r\n</p>\r\n<p>\r\n	<strong><span><br />\r\n</span></strong> \r\n</p>\r\n<ol>\r\n	<li>\r\n		<span>在  本网站未向用户收取相关服务费用的情况下，本网站可自行全权决定以任何理由  (包括但不限于本网站认为用户已违反本协议的字面意义和精神，或用户在超过180天内未登录本网站等)  终止对用户的服务，并不再保存用户在本网站的全部资料（包括但不限于用户信息、商品信息、交易信息等）。同时本网站可自行全权决定，在发出通知或不发出通  知的情况下，随时停止提供全部或部分服务。服务终止后，本网站没有义务为用户保留原用户资料或与之相关的任何信息，或转发任何未曾阅读或发送的信息给用户  或第三方。此外，本网站不就终止对用户的服务而对用户或任何第三方承担任何责任。</span> \r\n	</li>\r\n	<li>\r\n		<span>如用户向本网站提出注销本网站注册用户身份，需经本网站审核同意，由本网站注销该注册用户，用户即解除与本网站的协议关系，但本网站仍保留下列权利：</span> \r\n		<ul>\r\n			<li>\r\n				<span>用户注销后，本网站有权保留该用户的资料,包括但不限于以前的用户资料、店铺资料、商品资料和交易记录等。</span> \r\n			</li>\r\n			<li>\r\n				<span>用户注销后，如用户在注销前在本网站交易平台上存在违法行为或违反本协议的行为，本网站仍可行使本协议所规定的权利。</span> \r\n			</li>\r\n		</ul>\r\n	</li>\r\n	<li>\r\n		<span>如存在下列情况，本网站可以通过注销用户的方式终止服务：</span> \r\n		<ul>\r\n			<li>\r\n				<span>在用户违反本协议相关规定时，本网站有权终止向该用户提供服务。本网站将在中断服务时通知用户。但如该用户在被本网站终止提供服务后，再一次直接或间接或以他人名义注册为本网站用户的，本网站有权再次单方面终止为该用户提供服务；</span> \r\n			</li>\r\n			<li>\r\n				<span>一旦本网站发现用户注册资料中主要内容是虚假的，本网站有权随时终止为该用户提供服务；</span> \r\n			</li>\r\n			<li>\r\n				<span>本协议终止或更新时，用户未确认新的协议的。</span> \r\n			</li>\r\n			<li>\r\n				<span>其它本网站认为需终止服务的情况。</span> \r\n			</li>\r\n		</ul>\r\n	</li>\r\n	<li>\r\n		<span>因用户违反相关法律法规或者违反本协议规定等原因而致使本网站中断、终止对用户服务的，对于服务中断、终止之前用户交易行为依下列原则处理：</span> \r\n		<ul>\r\n			<li>\r\n				<span>本网站有权决定是否在中断、终止对用户服务前将用户被中断或终止服务的情况和原因通知用户交易关系方，包括但不限于对该交易有意向但尚未达成交易的用户,参与该交易竞价的用户，已达成交易要约用户。</span> \r\n			</li>\r\n			<li>\r\n				<span>服务中断、终止之前，用户已经上传至本网站的物品尚未交易或交易尚未完成的，本网站有权在中断、终止服务的同时删除此项物品的相关信息。</span> \r\n			</li>\r\n			<li>\r\n				<span>服务中断、终止之前，用户已经就其他用户出售的具体物品作出要约，但交易尚未结束，本网站有权在中断或终止服务的同时删除该用户的相关要约和信息。</span> \r\n			</li>\r\n		</ul>\r\n	</li>\r\n	<li>\r\n		<span>本网站若因用户的行为（包括但不限于刊登的商品、在本网站社区发帖等）侵害了第三方的权利或违反了相关规定，而受到第三方的追偿或受到主管机关的处分时，用户应赔偿本网站因此所产生的一切损失及费用。</span> \r\n	</li>\r\n	<li>\r\n		<span>对违反相关法律法规或者违反本协议规定，且情节严重的用户，本网站有权终止该用户的其它服务。</span> \r\n	</li>\r\n</ol>\r\n<p>\r\n	<br />\r\n<br />\r\n<strong><span>六、协议的修订</span></strong>\r\n</p>\r\n<p>\r\n	<strong><span></span></strong><br />\r\n<br />\r\n<span> 本协议可由本网站随时修订，并将修订后的协议公告于本网站之上，修订后的条款内容自公告时起生效，并成为本协议的一部分。用户若在本协议修改之后，仍继续使用本网站，则视为用户接受和自愿遵守修订后的协议。本网站行使修改或中断服务时，不需对任何第三方负责。</span><br />\r\n<br />\r\n<strong><span>七、 本网站的责任范围 </span></strong><br />\r\n<br />\r\n<span> 当用户接受该协议时，用户应明确了解并同意∶</span> \r\n</p>\r\n<ol>\r\n	<li>\r\n		<span>是否经由本网站下载或取得任何资料，由用户自行考虑、衡量并且自负风险，因下载任何资料而导致用户电脑系统的任何损坏或资料流失，用户应负完全责任。</span> \r\n	</li>\r\n	<li>\r\n		<span>用户经由本网站取得的建议和资讯，无论其形式或表现，绝不构成本协议未明示规定的任何保证。</span> \r\n	</li>\r\n	<li>\r\n		<span>基于以下原因而造成的利润、商誉、使用、资料损失或其它无形损失，本网站不承担任何直接、间接、附带、特别、衍生性或惩罚性赔偿（即使本网站已被告知前款赔偿的可能性）：</span> \r\n		<ul>\r\n			<li>\r\n				<span>本网站的使用或无法使用。</span> \r\n			</li>\r\n			<li>\r\n				<span>经由或通过本网站购买或取得的任何物品，或接收之信息，或进行交易所随之产生的替代物品及服务的购买成本。</span> \r\n			</li>\r\n			<li>\r\n				<span>用户的传输或资料遭到未获授权的存取或变更。</span> \r\n			</li>\r\n			<li>\r\n				<span>本网站中任何第三方之声明或行为。</span> \r\n			</li>\r\n			<li>\r\n				<span>本网站其它相关事宜。</span> \r\n			</li>\r\n		</ul>\r\n	</li>\r\n	<li>\r\n		<span>本网站只是为用户提供一个交易的平台，对于用户所刊登的交易物品的合法性、真实性及其品质，以及用户履行交易的能力等，本网站一律不负任何担保责任。用户如果因使用本网站，或因购买刊登于本网站的任何物品，而受有损害时，本网站不负任何补偿或赔偿责任。</span> \r\n	</li>\r\n	<li>\r\n		<span>本  网站提供与其它互联网上的网站或资源的链接，用户可能会因此连结至其它运营商经营的网站，但不表示本网站与这些运营商有任何关系。其它运营商经营的网站均  由各经营者自行负责，不属于本网站控制及负责范围之内。对于存在或来源于此类网站或资源的任何内容、广告、产品或其它资料，本网站亦不予保证或负责。因使  用或依赖任何此类网站或资源发布的或经由此类网站或资源获得的任何内容、物品或服务所产生的任何损害或损失，本网站不负任何直接或间接的责任。</span><br />\r\n	</li>\r\n</ol>\r\n<p>\r\n	<strong><span><br />\r\n</span></strong>\r\n</p>\r\n<p>\r\n	<strong><span>八、不可抗力</span></strong><br />\r\n<br />\r\n<span> 因不可抗力或者其他意外事件，使得本协议的履行不可能、不必要或者无意义的，双方均不承担责任。本合同所称之不可抗力意指不能预见、不能避免并不能克服的  客观情况，包括但不限于战争、台风、水灾、火灾、雷击或地震、罢工、暴动、法定疾病、黑客攻击、网络病毒、电信部门技术管制、政府行为或任何其它自然或人  为造成的灾难等客观情况。</span><br />\r\n<span></span><br />\r\n<strong><span>九、争议解决方式</span></strong>\r\n</p>\r\n<p>\r\n	<strong><span><br />\r\n</span></strong> \r\n</p>\r\n<ol>\r\n	<li>\r\n		<span>本协议及其修订本的有效性、履行和与本协议及其修订本效力有关的所有事宜，将受中华人民共和国法律管辖，任何争议仅适用中华人民共和国法律。</span> \r\n	</li>\r\n	<li>\r\n		<span>因  使用本网站服务所引起与本网站的任何争议，均应提交深圳仲裁委员会按照该会届时有效的仲裁规则进行仲裁。相关争议应单独仲裁，不得与任何其它方的争议在任  何仲裁中合并处理，该仲裁裁决是终局，对各方均有约束力。如果所涉及的争议不适于仲裁解决，用户同意一切争议由人民法院管辖。</span> \r\n	</li>\r\n</ol>', 255, 1, 1542755329),
(2, '什么是实名认证', 1, 0, '', '<p>\r\n	<strong>什么是实名认证？</strong>\r\n</p>\r\n<p>\r\n	“认证店铺”服务是一项对店主身份真实性识别服务。店主可以通过站内PM、电话或管理员EMail的方式 联系并申请该项认证。经过管理员审核确认了店主的真实身份，就可以开通该项认证。\r\n</p>\r\n<p>\r\n	通过该认证，可以说明店主身份的真实有效性，为买家在网络交易的过程中提供一定的信心和保证。\r\n</p>\r\n<p>\r\n	<strong>认证申请的方式：</strong>\r\n</p>\r\n<p>\r\n	Email：XXXX@XX.com\r\n</p>\r\n<p>\r\n	管理员：XXXXXX\r\n</p>', 255, 1, 1542755606),
(3, '什么是实体店铺认证', 1, 0, '', '<p>\r\n	<strong>什么是实体店铺认证？</strong>\r\n</p>\r\n<p>\r\n	“认证店铺”服务是一项对店主身份真实性识别服务。店主可以通过站内PM、电话或管理员EMail的方式 联系并申请该项认证。经过管理员审核确认了店主的真实身份，就可以开通该项认证。\r\n</p>\r\n<p>\r\n	通过该认证，可以说明店主身份的真实有效性，为买家在网络交易的过程中提供一定的信心和保证。\r\n</p>\r\n<p>\r\n	<strong>认证申请的方式：</strong>\r\n</p>\r\n<p>\r\n	Email：XXXX@XX.com\r\n</p>\r\n<p>\r\n	管理员：XXXXXX\r\n</p>', 255, 1, 1542755637),
(4, '开店协议', 1, 0, '', '<p>\r\n	使用本公司服务所须遵守的条款和条件。<br />\r\n<br />\r\n1.用户资格<br />\r\n本公司的服务仅向适用法律下能够签订具有法律约束力的合同的个人提供并仅由其使用。在不限制前述规定的前提下，本公司的服务不向18周岁以下或被临时或无限期中止的用户提供。如您不合资格，请勿使用本公司的服务。此外，您的帐户（包括信用评价）和用户名不得向其他方转让或出售。另外，本公司保留根据其意愿中止或终止您的帐户的权利。<br />\r\n<br />\r\n2.您的资料（包括但不限于所添加的任何商品）不得：<br />\r\n*具有欺诈性、虚假、不准确或具误导性；<br />\r\n*侵犯任何第三方著作权、专利权、商标权、商业秘密或其他专有权利或发表权或隐私权；<br />\r\n*违反任何适用的法律或法规（包括但不限于有关出口管制、消费者保护、不正当竞争、刑法、反歧视或贸易惯例/公平贸易法律的法律或法规）；<br />\r\n*有侮辱或者诽谤他人，侵害他人合法权益的内容；<br />\r\n*有淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的内容；<br />\r\n*包含可能破坏、改变、删除、不利影响、秘密截取、未经授权而接触或征用任何系统、数据或个人资料的任何病毒、特洛依木马、蠕虫、定时炸弹、删除蝇、复活节彩蛋、间谍软件或其他电脑程序；<br />\r\n<br />\r\n3.违约<br />\r\n如发生以下情形，本公司可能限制您的活动、立即删除您的商品、向本公司社区发出有关您的行为的警告、发出警告通知、暂时中止、无限期地中止或终止您的用户资格及拒绝向您提供服务：<br />\r\n(a)您违反本协议或纳入本协议的文件；<br />\r\n(b)本公司无法核证或验证您向本公司提供的任何资料；<br />\r\n(c)本公司相信您的行为可能对您、本公司用户或本公司造成损失或法律责任。<br />\r\n<br />\r\n4.责任限制<br />\r\n本公司、本公司的关联公司和相关实体或本公司的供应商在任何情况下均不就因本公司的网站、本公司的服务或本协议而产生或与之有关的利润损失或任何特别、间接或后果性的损害（无论以何种方式产生，包括疏忽）承担任何责任。您同意您就您自身行为之合法性单独承担责任。您同意，本公司和本公司的所有关联公司和相关实体对本公司用户的行为的合法性及产生的任何结果不承担责任。<br />\r\n<br />\r\n5.无代理关系<br />\r\n用户和本公司是独立的合同方，本协议无意建立也没有创立任何代理、合伙、合营、雇员与雇主或特许经营关系。本公司也不对任何用户及其网上交易行为做出明示或默许的推荐、承诺或担保。<br />\r\n<br />\r\n6.一般规定<br />\r\n本协议在所有方面均受中华人民共和国法律管辖。本协议的规定是可分割的，如本协议任何规定被裁定为无效或不可执行，该规定可被删除而其余条款应予以执行。\r\n</p>', 255, 1, 1542755700);

--
-- 转存表中的数据 `swd_sgrade`
--
delete from `swd_sgrade`;
INSERT INTO `swd_sgrade` (`grade_id`, `grade_name`, `goods_limit`, `space_limit`, `charge`, `need_confirm`, `description`, `skins`, `wap_skins`, `sort_order`) VALUES
(1, '系统默认', 100, 20, '0', 0, '测试用户请选择“默认等级”，可以立即开通', 'default|default', 'default|default', 255);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;