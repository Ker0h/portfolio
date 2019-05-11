(function () {

	// These style names can be found on https://getbootstrap.com/docs/4.1/components/card/
	var style = 'bg-light'
	var textcolor = 'text-dark'
	var titlecolor = 'text-white'
	var button = 'light-purple-bg text-white'
	var badge = 'light-purple-bg'
	var header = 'light-purple-bg'
	var table = 'table-light'

	function pad(n) {
		return n < 10 ? '0' + n : n
	}

	function render(template, data) {
		return template.replace(/\{\{(\w+)\}\}/g, function (m, key) {
			return data[key]
		})
	}

	// unique ID for jsonp callbacks
	var cid = 0,

		template = '<div class="card d-none d-sm-block  ' + textcolor + ' ' + style + ' github-box">' +
		'    <div class="card-header ' + header + '">' +
		'      <a target="_blank" class="title ' + titlecolor + '" href="{{html_url}}">{{name}}</a>' +
		'      <div class="float-right">' +
		'       <span class="badge ' + badge + '">' +
		'           <a target="_blank" href="{{html_url}}/stargazers">' +
		'          <i class="fa fa-star"></i> {{stargazers_count}}</a>' +
		'       </span>' +
		'       <span class="badge ' + badge + '">' +
		'        <a target="_blank" href="{{html_url}}/network">' +
		'          <i class="fas fa-code-branch"></i> {{forks_count}}</a>' +
		'       </span>' +
		'       <span class="badge ' + badge + '">' +
		'        <a target="_blank" href="{{html_url}}/watchers">' +
		'          <i class="fa fa-eye"></i> {{subscribers_count}}</a>' +
		'       </span>' +
		'      </div>' +
		'    </div>' +
		'    <div class="card-body">' +
		'      <p class="card-text description">{{description}}</p>' +
		'      <p language="{{language}}" class="card-language">' +
		'           <span class="language-dot {{language}}-color"></span>' +
		'           {{language}}' +
		'       </p>' +
		'    </div>' +
		'       <div class="card-footer">' +
		'           <div class="row">' +
		'           <div class="col">' +
		'               <p><em>Latest commit on {{pushed_at}}</em></p>' +
		'           </div>' +
		'            <div class="col">' +
		'               <a class="btn ' + button + ' btn-sm float-right" target="_blank" href="{{html_url}}">Show on GitHub</a>' +
		'            </div>' +
		'            <div class="clearfix"></div>' +
		'        </div>' +
		'       </div>' +
		'   </div>' +
		'  </div>' +
		' <div class="d-block d-sm-none github-box">' +
		'       <div class="github-box">' +
		'                <div class="card align-items-stretch text-black ' + style + ' ' + textcolor + ' github-box">' +
		'                    <div class="card-header text-center ' + header + '">' +
		'                        <a class="title ' + titlecolor + '" target="_blank" href="{{html_url}}">' +
		'                            <b>{{name}}</b>' +
		'                        </a>' +
		'                    </div>' +
		'                    <div class="card-body">' +
		'                        <p class="card-text description">{{description}}</p>' +
		'                    </div>' +
		'                    <table style="margin-bottom: 0px;" class="table ' + table + ' table-striped">' +
		'                        <tr>' +
		'                            <td>' +
		'                                <p style="margin-bottom: 0px;">' +
		'                                    <span style="margin-right: 10px; margin-left:10px;" class="language-dot {{language}}-color"></span> {{language}} </p>' +
		'                            </td>' +
		'                        </tr>' +
		'                        <tr>' +
		'                            <td>' +
		'                                <a class="' + textcolor + '" target="_blank" href="{{html_url}}/stargazers">' +
		'                                    <i class="fa fa-star" style="margin-right: 10px; margin-left:10px;"></i> {{stargazers_count}} stargazers</a>' +
		'                            </td>' +
		'                        </tr>' +
		'                        <tr>' +
		'                            <td>' +
		'                                <a class="' + textcolor + '" target="_blank" href="{{html_url}}/network">' +
		'                                    <i class="fas fa-code-branch" style="margin-right: 10px; margin-left:10px;"></i> {{forks_count}} forks</a>' +
		'                            </td>' +
		'                        </tr>' +
		'                        <tr>' +
		'                            <td>' +
		'                                <a class="' + textcolor + '" target="_blank" href="{{html_url}}/watchers">' +
		'                                    <i class="fa fa-eye" style="margin-right: 10px; margin-left:10px;"></i> {{subscribers_count}} watchers</a>' +
		'                            </td>' +
		'                        </tr>' +
		'                    </table>' +
		'                    <div class="card-footer">' +
		'                        <div class="row text-center">' +
		'                            <div class="col-12">' +
		'                                <a style="width: 100%; margin-bottom: 10px;" class="btn ' + button + '" target="_blank" href="{{html_url}}">Show on GitHub</a>' +
		'                            </div>' +
		'                        </div>' +
		'                    </div>' +
		'                </div>' +
		'            </div>' +
		' </div>';

	// Private function to generate a jsonp callback
	// which deletes itself upon invocation
	function JSONPCallback(context, cb) {
		var name = 'GHWidgetLoaded' + ++cid
		window[name] = function (data) {
			cb.call(context, data)
			delete window[name]
		}
		return name
	}

	// Widget constructor
	function Repo(repo, target) {
		this.repo = repo
		this.callback = JSONPCallback(this, this.ready)
		this.target = target
	}

	// Load GitHub data
	Repo.prototype.load = function () {
		var cached, s
		// Attempt to get cached repo data
		if (window.sessionStorage && (cached = sessionStorage['gh-repos:' + this.repo])) {
			window[this.callback](JSON.parse(cached))
			return
		}
		s = document.createElement('script')
		s.async = true
		s.src = 'https://api.github.com/repos/' + this.repo + '?callback=' + this.callback
		document.body.appendChild(s)
	}

	// Receive data
	Repo.prototype.ready = function (results) {

		// Handle API failures
		if (results.meta.status >= 400 && results.data.message) {
			console.warn(results.data.message)
			return
		}

		// Cache data
		if (window.sessionStorage) {
			sessionStorage['gh-repos:' + this.repo] = JSON.stringify(results)
		}

		var data = results.data,
			pushed_at = new Date(data.pushed_at),
			month = pushed_at.getMonth() + 1,
			day = pushed_at.getDate(),
			year = pushed_at.getFullYear()

		if (data.description == null) {
			data.description = ''
		}

		data.pushed_at = year + '/' + pad(month) + '/' + pad(day)
		data.repo_url = '//github.com/' + this.repo

		var box = document.createElement('div')
		box.className = 'github-box'
		box.innerHTML = render(template, data)

		this.target && this.target.parentNode.replaceChild(box, this.target)
		return box
	}

	// Main object.
	// GHRepos.create() receives a selector, for which each element will
	// be replaced with a github repo box
	var GHRepos = {
		create: function (selector) {
			var els = document.querySelectorAll(selector),
				items = Array.prototype.slice.call(els, 0)

			items.forEach(function (el) {
				var repo = (el.dataset && el.dataset.repo) || el.href.split('/').slice(-2).join('/')
				new Repo(repo, el).load()
			})
		},
		Repo: Repo
	}

	if (typeof exports !== 'undefined') {
		exports = GHRepos
	} else {
		window.GHRepos = GHRepos
	}

})();