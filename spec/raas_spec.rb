require 'spec_helper'

describe Raas do
  it 'has a version number' do
    expect(Raas::VERSION).not_to be nil
  end

  # it 'does something useful' do
  #   expect(false).to eq(true)
  # end
  it 'version is 0.0.1' do
    "0.0.1" == Raas::VERSION
  end

  it 'is working fine' do
    "I am Coolz" == "I am Cools".raas
  end
end
