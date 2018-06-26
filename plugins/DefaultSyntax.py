import sublime, sublime_plugin

class DefaultSyntax(sublime_plugin.EventListener):
	def on_new(self, view):
		setting = view.settings().get('default_syntax', 'Packages/Text/Plain text.sublime-syntax')
		setting = sublime.active_window().active_view().settings().get('default_syntax', setting)
		view.set_syntax_file(setting)