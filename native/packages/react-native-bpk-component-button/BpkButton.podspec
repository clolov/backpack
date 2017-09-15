require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name             = package['name']
  s.version          = package['version']
  s.summary          = package['description']
  s.license          = package['license']
  s.homepage         = 'https://github.com/skyscanner/backpack'
  s.authors          = package['author']
  s.source           = { :git => 'https://github.com/skyscanner/backpack.git', :tag => "v#{s.version}" }
  s.source_files     = 'src/*[^\-test].js'
  s.dependency         'React'
end
