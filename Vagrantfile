Vagrant.configure("2") do |config|
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"
  config.vm.provision :shell, :path => "bootstrap.sh"
  config.vm.network :forwarded_port, host: 8080, guest: 80
  config.vm.host_name = "sohi.local"
  config.vm.synced_folder ".", "/vagrant", :mount_options => ['dmode=774','fmode=775']
  config.vm.synced_folder "www/", "/var/www/"
end
