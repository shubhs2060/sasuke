require 'spec_helper'

describe Sasuke do
  it 'has a version number' do
    expect(Sasuke::VERSION).not_to be nil
  end

  # it 'does something useful' do
  #   expect(false).to eq(true)
  # end
  it 'version is 0.0.1' do
    "0.0.1" == Sasuke::VERSION
  end

  it 'is working fine' do
    "I am Coolz" == "I am Cools".sasuke
  end
end
